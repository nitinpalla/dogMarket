-- Leads table for PawFuel intake
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  owner_email text,
  dog_name text not null,
  dog_age_years numeric,
  dog_weight_lbs numeric,
  breed text,
  activity_level text,
  allergies text,
  goals text,
  diet_type text,
  proteins text,
  dislikes text,
  notes text,
  contact_email text not null,
  phone text,
  consent boolean not null default false
);

alter table public.leads enable row level security;

create policy "Allow inserts" on public.leads
for insert to anon
with check (true);
