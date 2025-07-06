import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vukmsvqganavfrpdfcbo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1a21zdnFnYW5hdmZycGRmY2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NTk3MjIsImV4cCI6MjA2NzMzNTcyMn0.KNccFbUez37UK1IIK9sq1nfbPPwaJa4S514cQtZVsxA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);