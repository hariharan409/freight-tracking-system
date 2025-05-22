import EpicButton from "../epic/EpicButton";
import useAppRouter from "@/hooks/useAppRouter";
import { LottieFreightTracking } from "../lottie-web-animation/LottieWebAnimation";

const Login = () => {
    const {navigate} = useAppRouter();
    

    return (
        <div className="h-full flex flex-col justify-center items-center gap-3 text-center">
            <LottieFreightTracking className="w-1/2 lg:w-1/3 xl:w-1/4" />
            <h2 className="font-bold text-xl capitalize animate-bounce">welcome to freight tracking system!</h2>
            <h5 className="text-xs text-black/50 font-bold">It is designed to streamline the process of managing freight operations, ensuring that businesses can efficiently track, coordinate, and optimize the movement of goods across various transportation modes and supply chain touchpoints.</h5>
            <EpicButton type="button" label="login" className="w-[200px] uppercase" onClick={() => navigate("/new-transaction")} />
        </div>
    );
};

export default Login;
