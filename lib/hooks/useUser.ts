import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (currentUser: any) => {
    if (!currentUser) {
      setProfile(null);
      return;
    }
    const { data: profileData, error } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", currentUser.id)
      .single();
    if (error) {
      setProfile(null);
    } else {
      setProfile(profileData);
    }
  };

  useEffect(() => {
    let mounted = true;
    const getUserAndProfile = async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();
      if (error || !sessionData?.session?.user) {
        setUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }
      const currentUser = sessionData.session.user;
      setUser(currentUser);
      await fetchProfile(currentUser);
      if (mounted) setLoading(false);
    };
    getUserAndProfile();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        await fetchProfile(currentUser);
      },
    );
    return () => {
      mounted = false;
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return { user, profile, loading };
}
