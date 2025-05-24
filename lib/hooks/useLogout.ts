import { supabase } from "@/lib/supabase";

export function useLogout() {
  return async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };
}
