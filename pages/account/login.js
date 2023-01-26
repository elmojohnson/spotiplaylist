import useLogin from "@/hooks/auth/useLogin";
import { BsSpotify } from "react-icons/bs";

const Login = () => {
  const { url, isLoggingIn } = useLogin();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {isLoggingIn ? (
        <p>Logging in...</p>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-3xl">Playlist Manager</h1>
          {url && (
            <a
              href={url}
              className="btn rounded-full bg-primary w-full flex items-center justify-center font-semibold text-lg space-x-3 text-white"
            >
              <BsSpotify />
              <span>Login with Spotify</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
