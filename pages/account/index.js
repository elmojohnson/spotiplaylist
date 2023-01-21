import useUser from "@/hooks/auth/useUser";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Account = () => {
  const router = useRouter();
  const { user } = useUser();
  const logout = () => {
    localStorage.clear();
    router.push("/account/login");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center p-4 rounded-lg bg-white">
        {user.images[0]?.url && (
          <Image
            src={user.images[0]?.url}
            alt={user.display_name}
            width={100}
            height={100}
            priority
            className="rounded-full mb-4"
          />
        )}
        <h1 className="font-bold text-xl">{user.display_name}</h1>
        <p>{user.email}</p>
        <button className="btn mt-4" onClick={logout}>
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Account;
