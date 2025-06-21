import { Image } from "@heroui/react";
import { Spinner } from "@heroui/react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useUser } from "@/lib/hooks/useUser";

export default function Profile() {
  const { user, profile, loading } = useUser();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">
          <h1 className={title()}>Profile</h1>
          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <Spinner size="lg" color="secondary" />
            </div>

          ) : user ? (
            <div>
              <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
                <Image
                  alt={profile?.first_name || "User Avatar"}
                  className="object-cover w-full h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={
                    (profile && profile.avatar_url) ? profile.avatar_url :
                      "https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  }
                  style={{
                    width: "auto",
                    height: "auto",
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <div className="inline-block max-w-xl text-center justify-center mt-2">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                    <span className="text-violet-600">Welcome </span>
                    <span className="text-gray-800">Back</span>
                  </h1>
                  <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                    <span className="text-gray-800">
                      {profile?.username ?? "-"}&nbsp;
                    </span>
                    <span className="text-violet-600">
                      {profile?.email ?? user?.email ?? "-"}&nbsp;
                    </span>
                  </h1>
                  <div className="text-lg md:text-xl text-gray-500 font-medium mb-4">
                    Beautiful, fast and modern React UI library.
                  </div>
                </div>
              </div>


              <div className="inline-block max-w-xl text-center justify-center mt-8">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                  <span className="text-violet-600">Edit Profile </span>
                </h1>
                <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                  <span className="text-gray-800">
                    {profile?.first_name ?? "-"}&nbsp;
                    {profile?.last_name ?? "-"}&nbsp;
                  </span>
                </h1>
                <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                  <span className="text-violet-600">
                    {profile?.email ?? user?.email ?? "-"}&nbsp;
                  </span>
                </h1>
                <div className="text-lg md:text-xl text-gray-500 font-medium mb-4">
                  {profile?.bio ?? "No bio available."}
                </div>
              </div>
            </div>
          ) : (
            <p>Not Found User</p>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
