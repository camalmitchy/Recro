import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type AppRole = "admin" | "customer" | "therapist" | "finance" | "content_manager";

type DummyUser = {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
    phone?: string;
  };
};

type AuthState = {
  user: DummyUser | null;
  session: { user: DummyUser } | null;
  roles: AppRole[];
  loading: boolean;
  hasRole: (r: AppRole) => boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, name?: string) => void;
  refreshRoles: () => Promise<void>;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DummyUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('demoUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = (email: string, name?: string) => {
    const newUser: DummyUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      user_metadata: {
        full_name: name || email.split('@')[0],
      },
    };
    setUser(newUser);
    localStorage.setItem('demoUser', JSON.stringify(newUser));
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('demoUser');
  };

  const value: AuthState = {
    user,
    session: user ? { user } : null,
    roles: user ? ["admin", "customer"] : [], // All logged-in users are admins in demo
    loading,
    hasRole: (r) => !!user, // All logged-in users have all roles in demo
    signOut,
    signIn,
    refreshRoles: async () => { },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
