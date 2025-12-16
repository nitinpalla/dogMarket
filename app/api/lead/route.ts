import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ["dog_name", "contact_email", "consent"];
    for (const k of required) {
      if (body?.[k] === undefined || body?.[k] === null || body?.[k] === "") {
        return NextResponse.json({ error: `Missing: ${k}` }, { status: 400 });
      }
    }

    if (!isEmail(body.contact_email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (body.consent !== true) {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }

    const payload = {
      owner_email: process.env.LEADS_OWNER_EMAIL ?? null,
      dog_name: String(body.dog_name).trim(),
      dog_age_years: body.dog_age_years ? Number(body.dog_age_years) : null,
      dog_weight_lbs: body.dog_weight_lbs ? Number(body.dog_weight_lbs) : null,
      breed: body.breed ? String(body.breed).trim() : null,
      activity_level: body.activity_level ? String(body.activity_level) : null,
      allergies: body.allergies ? String(body.allergies).trim() : null,
      goals: body.goals ? String(body.goals).trim() : null,
      diet_type: body.diet_type ? String(body.diet_type) : null,
      proteins: body.proteins ? String(body.proteins).trim() : null,
      dislikes: body.dislikes ? String(body.dislikes).trim() : null,
      notes: body.notes ? String(body.notes).trim() : null,
      contact_email: String(body.contact_email).trim(),
      phone: body.phone ? String(body.phone).trim() : null,
      consent: Boolean(body.consent),
    };

    const { error } = await supabase.from("leads").insert(payload);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
