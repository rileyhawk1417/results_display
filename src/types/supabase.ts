export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      "IGugu Auth": {
        Row: {
          id: number
          name: string | null
          password: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          password?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          password?: string | null
        }
        Relationships: []
      }
      igugu_blogs: {
        Row: {
          content: Json | null
          created_at: string | null
          description: string | null
          id: number
          published: boolean | null
          title: string | null
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          description?: string | null
          id?: number
          published?: boolean | null
          title?: string | null
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          description?: string | null
          id?: number
          published?: boolean | null
          title?: string | null
        }
        Relationships: []
      }
      student_data: {
        Row: {
          created_at: string
          email: string | null
          fname: string
          id: number
          lname: string
          phone_no: string | null
          results: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          fname: string
          id?: number
          lname: string
          phone_no?: string | null
          results?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          fname?: string
          id?: number
          lname?: string
          phone_no?: string | null
          results?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
