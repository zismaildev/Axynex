import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export interface TeamDev {
    id: string;
    dev_role: string;
    contact: string | null;
    created_at: string;
    bio_dev?: string | null;
    user_id: string;
    username: string;
    bio: string | null;
    avatar_url: string | null;
}

export function useTeamDev() {
    const [team, setTeam] = useState<TeamDev[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeam = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("teamdev")
                .select(`
          id, dev_role, contact, created_at, bio_dev, user_id,
          user_profiles: user_id (username, bio, avatar_url)
        `)
                .order("created_at", { ascending: false });

            if (error) {
                setError(error.message);
                setTeam([]);
            } else {
                // Map user_profiles fields to top-level
                setTeam(
                    (data || []).map((item: any) => ({
                        ...item,
                        username: item.user_profiles?.username || "",
                        bio: item.user_profiles?.bio || "",
                        avatar_url: item.user_profiles?.avatar_url || null,
                    }))
                );
                setError(null);
            }
            setLoading(false);
        };
        fetchTeam();
    }, []);

    return { team, loading, error };
}
