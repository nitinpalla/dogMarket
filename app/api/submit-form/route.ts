import { NextRequest, NextResponse } from 'next/server';
import { DogSubmission } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const data: DogSubmission = await request.json();

    // Validate required fields
    if (!data.owner_name || !data.owner_email || !data.dog_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If Supabase is configured, try that first
    const { supabase } = await import('@/lib/supabase');
    if (supabase) {
      const { error } = await supabase
        .from('dog_submissions')
        .insert([data]);

      if (!error) {
        return NextResponse.json({ success: true });
      }
    }

    // Email fallback - log to console in development
    // In production, you'd integrate with an email service like SendGrid, Resend, etc.
    console.log('Form submission received:', data);

    // For now, return success (you can integrate actual email sending here)
    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully. In production, this would send an email.'
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

