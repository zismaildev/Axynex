import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserAndProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: profileData, error } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("id", user.id)
          .maybeSingle(); // เปลี่ยนจาก .single() เป็น .maybeSingle()

        if (error) {
          console.error("Error fetching profile:", error.message);
        } else {
          setProfile(profileData);
        }
      }

      setLoading(false);
    };

    getUserAndProfile();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          const { data: profileData, error } = await supabase
            .from("user_profiles")
            .select("*")
            .eq("id", currentUser.id)
            .maybeSingle(); // เปลี่ยนจาก .single() เป็น .maybeSingle()

          if (error) {
            console.error("Error fetching profile:", error.message);
            setProfile(null);
          } else {
            setProfile(profileData);
          }
        } else {
          setProfile(null);
        }
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return { user, profile, loading };
}
