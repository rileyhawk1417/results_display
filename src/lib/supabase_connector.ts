import {createClient}  from '@supabase/supabase-js'
import {Database} from '@/types/supabase'

const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_DB_URL, 
    process.env.DB_KEY,
    {
        auth: {persistSession: false}
    }
    )
export default supabase