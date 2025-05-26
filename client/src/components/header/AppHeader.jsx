import { appLogo } from '@/assets';
import useAppRouter from '@/hooks/useAppRouter';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from 'react';
import EpicButton from '@/components/epic/EpicButton';
import { MenuIcon } from 'lucide-react';

const AppHeader = () => {
    const {navigate} = useAppRouter();
    const [open, setOpen] = useState(false);

    return(
        <div className="flex items-center h-full px-4">
            <img src={appLogo} className="w-[120px]" />
            <div className="flex-1 flex justify-end">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <MenuIcon
                            className="w-8 h-8 text-black cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </PopoverTrigger>

                    <PopoverContent className="w-auto bg-gray-200 min-w-56 min-h-10 flex flex-col gap-3 justify-center items-center mr-2 mt-2 p-0 shadow-2xl">
                    <ul className='w-full flex flex-col gap-1 p-2 rounded-sm'>
                        <li className="w-full h-8 capitalize bg-white text-black font-semibold text-xs flex items-center justify-center hover:bg-white/50 cursor-pointer" onClick={() => navigate("/login")}>logout</li>
                        <li className="w-full h-8 capitalize bg-white text-black font-semibold text-xs flex items-center justify-center hover:bg-white/50 cursor-pointer" onClick={() => {}}>settings</li>
                        <li className="w-full h-8 capitalize bg-white text-black font-semibold text-xs flex items-center justify-center hover:bg-white/50 cursor-pointer" onClick={() => {}}>help & support</li>
                        <li className="w-full h-8 capitalize bg-white text-black font-semibold text-xs flex items-center justify-center hover:bg-white/50 cursor-pointer" onClick={() => {}}>change password</li>
                    </ul>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default AppHeader;