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
      .maybeSingle();

    // console.log("user id:", currentUser.id);
    // console.log("profileData:", profileData);

    if (error) {
      console.error("Error fetching profile:", error.message);
      setProfile(null);
    } else {
      setProfile(profileData);
    }
  };

  useEffect(() => {
    const getUserAndProfile = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error.message);
        setUser(null);
        setLoading(false);

        return;
      }

      const currentUser = data.user;

      setUser(currentUser);
      await fetchProfile(currentUser);
      setLoading(false);
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
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return { user, profile, loading };
}
