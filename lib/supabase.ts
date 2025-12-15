import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Form submissions will use email fallback.');
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface DogSubmission {
  dog_name: string;
  dog_age: number | null;
  dog_breed: string;
  dog_weight: string;
  dietary_needs: string;
  allergies: string;
  special_requirements: string;
  owner_name: string;
  owner_email: string;
}

export async function submitDogDetails(data: DogSubmission): Promise<{ success: boolean; error?: string }> {
  // Try Supabase first
  if (supabase) {
    try {
      const { error } = await supabase
        .from('dog_submissions')
        .insert([data]);

      if (error) {
        console.error('Supabase error:', error);
        // Fall through to email option
      } else {
        return { success: true };
      }
    } catch (err) {
      console.error('Supabase submission failed:', err);
      // Fall through to email option
    }
  }

  // Email fallback (client-side email sending via API route)
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return { success: true };
  } catch (err) {
    console.error('Form submission failed:', err);
    return { 
      success: false, 
      error: 'Unable to submit form. Please try again later or contact us directly.' 
    };
  }
}

