import { appLogo } from '@/assets';
import useAppRouter from '@/hooks/useAppRouter';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const AppHeader = () => {
    const {navigate} = useAppRouter();

    return(
        <div className="flex items-center h-full px-4">
            <img src={appLogo} className="w-[120px]" />
            <div className="flex-1 justify-items-end cursor-pointer">
                <ArrowRightStartOnRectangleIcon className="w-8 text-black" onClick={() => navigate("/login")} />
            </div>
        </div>
    )
}

export default AppHeader;