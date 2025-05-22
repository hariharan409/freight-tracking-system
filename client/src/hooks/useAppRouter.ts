import { useLocation, useNavigate } from "react-router-dom";


const useAppRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return {
        navigate,
        pathname: location.pathname
    }

}

export default useAppRouter;