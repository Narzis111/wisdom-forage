import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
      
          toast.success('Log in Successful');
        
        navigate(from);

      }
    });
  };
  return (
    <>

      <div className="divider"><strong>OR</strong></div>
      <div className="mb-6 p-2 text-center me-2 ">
        <button onClick={() => handleSocialLogin(googleLogin)} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-2 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <FaGoogle className="me-2" />
          Sign in with Google
        </button>
        <button onClick={() => handleSocialLogin(githubLogin)} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-2 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
          <FaGithub className="me-2" />
          Sign in with Github
        </button>
      </div>

    </>
  );
};

export default SocialLogin;