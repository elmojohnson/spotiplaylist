import useLogin from "@/hooks/auth/useLogin";
import React from "react";

const Login = () => {
  const { url, isLoggingIn } = useLogin();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isLoggingIn ? (
        <p>Logging in...</p>
      ) : (
        <div>
          {url && (
            <a href={url} className="btn">
              Login
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
