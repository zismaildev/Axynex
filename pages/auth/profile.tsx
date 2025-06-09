import { Image } from "@heroui/react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useUser } from "@/lib/hooks/useUser";

export default function Profile() {
  const { user, profile } = useUser();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">
          <h1 className={title()}>Profile</h1>
          {user ? (
            <div>
              <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
                <Image
                  alt={profile?.full_name || "User Avatar"}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={
                    profile?.avatar_url ||
                    "https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  }
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <div className="inline-block max-w-xl text-center justify-center mt-8">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                    <span className="text-violet-600">Welcome </span>
                    <span className="text-gray-800">Back</span>
                  </h1>
                  <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                    <span className="text-gray-800">
                      {profile?.username}&nbsp;
                    </span>
                    <span className="text-violet-600">{user?.email}&nbsp;</span>
                  </h1>
                  <div className="text-lg md:text-xl text-gray-500 font-medium mb-4">
                    Beautiful, fast and modern React UI library.
                  </div>
                </div>
              </div>
              <div className="inline-block max-w-xl text-center justify-center mt-8">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                  <span className="text-violet-600">Profle </span>
                </h1>
                <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                  <span className="text-gray-800">{user.first_name}&nbsp;</span>
                </h1>
                <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                  <span className="text-gray-800">{user.last_name}&nbsp;</span>
                </h1>
                <h1 className="text-4xl md:text-4xl font-extrabold mb-2 tracking-tight">
                  <span className="text-violet-600">{user?.email}&nbsp;</span>
                </h1>
                <div className="text-lg md:text-xl text-gray-500 font-medium mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  nam omnis autem vel earum! Perferendis quod dignissimos ea
                  error in rem libero eligendi vero nemo voluptate autem,
                  laboriosam iste labore.
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
