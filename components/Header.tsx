import Image from "next/image"
import Logo from "public/logo.jpg"
import { AiOutlineLink } from "react-icons/ai"
import { IoPersonCircleOutline } from "react-icons/io5"

export default function Header() {
    return (
        <div className="rounded-lg m-3">
            <div className="h-16 flex row justify-between items-center">
                <div className=" flex gap-x-1 items-center">
                    <Image 
                        src={Logo}
                        alt="Devlinks Logo"
                        width={35}
                        height={30}
                        className="rounded-lg inline-block"
                    />
                    <span className="text-xl font-extrabold inline-block">Devlinks</span>
                </div>
                <div className="flex h-9 gap-x-2">
                    <div className="px-3 rounded-md bg-clightpurple flex items-center gap-1">
                        <AiOutlineLink className="inline-block text-cpurple"/>
                        <span className="inline-block text-xs text-cpurple font-semibold">Links</span>
                    </div>
                    <div className="px-3 rounded-md bg-clightpurple flex items-center gap-1">
                        <IoPersonCircleOutline className="inline-block text-cpurple"/>
                        <span className="inline-block text-xs text-cpurple font-semibold">Profile Details</span>
                    </div>
                </div>
                <div className="px-5 rounded-md bg-cwhite flex items-center h-9 border border-cpurple">
                        <span className="inline-block text-xs text-cpurple font-semibold">Preview</span>
                </div>
            </div>
        </div>
    )
}