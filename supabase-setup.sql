-- DogMarket Supabase Database Setup
-- Run this SQL in your Supabase SQL Editor to create the necessary table

CREATE TABLE IF NOT EXISTS dog_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dog_name TEXT NOT NULL,
  dog_age INTEGER,
  dog_breed TEXT,
  dog_weight TEXT,
  dietary_needs TEXT,
  allergies TEXT,
  special_requirements TEXT,
  owner_name TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_dog_submissions_created_at ON dog_submissions(created_at DESC);

-- Create an index on owner_email for faster lookups
CREATE INDEX IF NOT EXISTS idx_dog_submissions_owner_email ON dog_submissions(owner_email);

-- Enable Row Level Security (RLS)
ALTER TABLE dog_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for form submissions)
-- In production, you may want to add additional security measures
CREATE POLICY "Allow public inserts" ON dog_submissions
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create a policy for authenticated users to read their own submissions
-- This requires authentication setup in your Supabase project
-- CREATE POLICY "Users can view own submissions" ON dog_submissions
--   FOR SELECT
--   USING (auth.uid()::text = owner_email);

