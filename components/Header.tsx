import Image from "next/image"
import Logo from "public/logo.jpg"
import { AiOutlineLink } from "react-icons/ai"
import { IoPersonCircleOutline } from "react-icons/io5"
import { AiOutlineEye } from "react-icons/ai"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"

export default function Header() {

    const pathname = usePathname()
    const [activeUrl, setActiveUrl] = useState('');
  
    useEffect(() => {
      setActiveUrl(pathname)
    }, [pathname])

    return (
        <div className="rounded-lg px-2 py-1 bg-cwhite z-2">
            <div className=" h-14 flex row justify-between items-center">
                <Link href="/">
                    <div className=" flex gap-x-1 items-center">
                        <Image 
                            src={Logo}
                            alt="Devlinks Logo"
                            width={35}
                            height={30}
                            className="w-7 md:w-10  rounded-lg inline-block"
                        />
                        <span className="text-xl font-extrabold  hidden md:inline-block">Devlinks</span>
                    </div>
                </Link>
                <div className="flex h-9 gap-x-2">
                    
                    <div className={activeUrl === '/' ? 'px-3 rounded-md bg-clightpurple flex items-center gap-1' : 'bg-cwhite flex items-center gap-1 px-3'}>
                        <Link href="/"><AiOutlineLink className={activeUrl === '/' ? "inline-block text-cpurple": "inline-block text-gray-500"}/></Link>
                        <Link href="/"><span className={activeUrl === '/' ? "text-xs text-cpurple font-semibold hidden md:inline-block ": 'text-xs text-gray-500 font-semibold hidden md:inline-block'}>Links</span></Link>
                    </div>
                    
                    <div className={activeUrl === '/profile' ? 'px-3 rounded-md bg-clightpurple flex items-center gap-1' : 'bg-cwhite flex items-center gap-1 px-3'}>
                        <Link href="profile"><IoPersonCircleOutline className={activeUrl === '/profile' ? "inline-block text-cpurple": "inline-block text-gray-500"}/></Link>
                        <Link href="profile"><span className={activeUrl === '/profile' ? "text-xs text-cpurple font-semibold hidden md:inline-block ": 'text-xs text-gray-500 font-semibold hidden md:inline-block'}>Profile Details</span></Link>
                    </div>
                </div>
                <div className="px-3 rounded-md bg-cwhite flex items-center h-9 border border-cpurple hover:bg-clightpurple  cursor-pointer">
                        <Link href="/preview"><span className="text-xs text-cpurple font-semibold hidden md:inline-block">Preview</span></Link>
                        <Link href="/preview"><AiOutlineEye className="md:hidden text-cpurple" /></Link>
                </div>
            </div>
        </div>
    )
}