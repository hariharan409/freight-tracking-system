import { appLogo } from '@/assets';
import useAppRouter from '@/hooks/useAppRouter';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from 'react';
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';
import { Separator } from "@/components/ui/separator";


const AppHeader = () => {
    const {navigate} = useAppRouter();
    const [open, setOpen] = useState(false);

    return(
        <div className="flex items-center h-full px-2">
            <img src={appLogo} className="w-[120px]" />
            <div className="flex-1 flex justify-end">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <UserCircleIcon
                            className="w-8 h-8 text-black cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </PopoverTrigger>

                    <PopoverContent className="w-auto bg-gray-200 min-w-64 min-h-10 flex flex-col gap-3 justify-center items-center mr-2 mt-2 p-1 shadow-2xl">
                        <div className="flex items-center gap-2 w-fit mt-1">
                            <UserIcon  className="w-6 text-red-500" />
                            <div>
                                <h5 className="text-black font-bold text-sm capitalize truncate w-48">
                                    harihara dhamodaran
                                </h5>
                                <h5 className="text-gray-500 font-semibold text-xs capitalize w-48">
                                    admin
                                </h5>
                            </div>
                        </div>
                        <Separator orientation="horizontal" className="h-[2px] bg-red-300" />
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