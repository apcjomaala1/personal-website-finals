import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fynpfvzqtdakjagmahmt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5bnBmdnpxdGRha2phZ21haG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMjcwOTYsImV4cCI6MjA1NjgwMzA5Nn0.WZavXlRBiHjecDjvCn03Q2nY6LtwhvOseTSH911eS1E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    realtime: {
      params: {
        eventsPerSecond: 10
      }
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true
    }
  })