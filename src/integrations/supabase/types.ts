export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          booking_id: string | null
          created_at: string
          duration_min: number | null
          id: string
          notes: string | null
          scheduled_at: string
          service_id: string | null
          status: string
          therapist_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          booking_id?: string | null
          created_at?: string
          duration_min?: number | null
          id?: string
          notes?: string | null
          scheduled_at: string
          service_id?: string | null
          status?: string
          therapist_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          booking_id?: string | null
          created_at?: string
          duration_min?: number | null
          id?: string
          notes?: string | null
          scheduled_at?: string
          service_id?: string | null
          status?: string
          therapist_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_therapist_id_fkey"
            columns: ["therapist_id"]
            isOneToOne: false
            referencedRelation: "therapists"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author: string | null
          body: string | null
          cover_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          is_published: boolean
          published_at: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          body?: string | null
          cover_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          is_published?: boolean
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          body?: string | null
          cover_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          is_published?: boolean
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          amount_kes: number | null
          client_email: string
          client_name: string
          client_phone: string | null
          created_at: string
          id: string
          notes: string | null
          payment_status: string
          preferred_date: string | null
          preferred_time: string | null
          reference: string
          service_id: string | null
          status: string
          therapist_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount_kes?: number | null
          client_email: string
          client_name: string
          client_phone?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          payment_status?: string
          preferred_date?: string | null
          preferred_time?: string | null
          reference?: string
          service_id?: string | null
          status?: string
          therapist_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount_kes?: number | null
          client_email?: string
          client_name?: string
          client_phone?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          payment_status?: string
          preferred_date?: string | null
          preferred_time?: string | null
          reference?: string
          service_id?: string | null
          status?: string
          therapist_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_therapist_id_fkey"
            columns: ["therapist_id"]
            isOneToOne: false
            referencedRelation: "therapists"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          is_published: boolean
          question: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          question: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          question?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      grief_applications: {
        Row: {
          child_age: number | null
          child_name: string
          created_at: string
          id: string
          loss_context: string | null
          notes: string | null
          parent_email: string
          parent_name: string
          parent_phone: string | null
          status: string
          tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          child_age?: number | null
          child_name: string
          created_at?: string
          id?: string
          loss_context?: string | null
          notes?: string | null
          parent_email: string
          parent_name: string
          parent_phone?: string | null
          status?: string
          tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          child_age?: number | null
          child_name?: string
          created_at?: string
          id?: string
          loss_context?: string | null
          notes?: string | null
          parent_email?: string
          parent_name?: string
          parent_phone?: string | null
          status?: string
          tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string
          subject?: string | null
        }
        Relationships: []
      }
      media_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_published: boolean
          media_type: string
          thumbnail_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_published?: boolean
          media_type?: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_published?: boolean
          media_type?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          status?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount_kes: number
          booking_id: string | null
          created_at: string
          id: string
          method: string
          mpesa_checkout_id: string | null
          mpesa_receipt: string | null
          notes: string | null
          phone: string | null
          proof_url: string | null
          reference: string | null
          status: string
          updated_at: string
          user_id: string | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          amount_kes: number
          booking_id?: string | null
          created_at?: string
          id?: string
          method: string
          mpesa_checkout_id?: string | null
          mpesa_receipt?: string | null
          notes?: string | null
          phone?: string | null
          proof_url?: string | null
          reference?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          amount_kes?: number
          booking_id?: string | null
          created_at?: string
          id?: string
          method?: string
          mpesa_checkout_id?: string | null
          mpesa_receipt?: string | null
          notes?: string | null
          phone?: string | null
          proof_url?: string | null
          reference?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_type: Database["public"]["Enums"]["account_type"]
          avatar_url: string | null
          comms_email: boolean
          comms_sms: boolean
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          account_type?: Database["public"]["Enums"]["account_type"]
          avatar_url?: string | null
          comms_email?: boolean
          comms_sms?: boolean
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          account_type?: Database["public"]["Enums"]["account_type"]
          avatar_url?: string | null
          comms_email?: boolean
          comms_sms?: boolean
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      saved_resources: {
        Row: {
          created_at: string
          id: string
          resource_id: string | null
          resource_type: string
          title: string | null
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          resource_id?: string | null
          resource_type: string
          title?: string | null
          url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          resource_id?: string | null
          resource_type?: string
          title?: string | null
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          duration_min: number | null
          id: string
          is_published: boolean
          price_kes: number | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          duration_min?: number | null
          id?: string
          is_published?: boolean
          price_kes?: number | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          duration_min?: number | null
          id?: string
          is_published?: boolean
          price_kes?: number | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_name: string
          author_role: string | null
          created_at: string
          id: string
          is_published: boolean
          quote: string
          rating: number | null
          updated_at: string
        }
        Insert: {
          author_name: string
          author_role?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          quote: string
          rating?: number | null
          updated_at?: string
        }
        Update: {
          author_name?: string
          author_role?: string | null
          created_at?: string
          id?: string
          is_published?: boolean
          quote?: string
          rating?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      therapists: {
        Row: {
          bio: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          is_active: boolean
          phone: string | null
          photo_url: string | null
          specialties: string[] | null
          title: string | null
          updated_at: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          is_active?: boolean
          phone?: string | null
          photo_url?: string | null
          specialties?: string[] | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          is_active?: boolean
          phone?: string | null
          photo_url?: string | null
          specialties?: string[] | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      account_type: "customer" | "guardian" | "corporate"
      app_role:
        | "admin"
        | "customer"
        | "therapist"
        | "finance"
        | "content_manager"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      account_type: ["customer", "guardian", "corporate"],
      app_role: [
        "admin",
        "customer",
        "therapist",
        "finance",
        "content_manager",
      ],
    },
  },
} as const
