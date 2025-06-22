import { useUser } from "@/lib/hooks/useUser";

export default function RequireAdmin({ children }: { children: React.ReactNode }) {
    const { profile, loading } = useUser();
    // Log for debugging
    // console.log("[RequireAdmin] profile:", profile);
    // console.log("[RequireAdmin] loading:", loading);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>กำลังตรวจสอบสิทธิ์...</p>
            </div>
        )
    }
    if (!profile || !(profile.roles?.name === "admin" || profile.roles?.name === "owner")) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="flex items-center justify-center h-[60vh]">
                        <p className="text-2xl text-danger font-semibold">ไม่มีสิทธิ์เข้าถึงหน้านี้</p>
                    </div>
                </div>
            </div>
        )
    }
    return <>{children}</>;
}