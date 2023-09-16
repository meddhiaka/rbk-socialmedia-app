import Image from "next/image"

import Rect1 from "@/public/Rectangle1.png"
import Rect2 from "@/public/Rectangle2.png"
import Rect3 from "@/public/Rectangle3.png"
import Rect4 from "@/public/Rectangle4.png"
import Rect5 from "@/public/Rectangle5.png"

import { useGlobalContext } from "@/context/AppContext"


export default function Screen() {
    const { firstName, lastName, emailAddress, profilePicture } = useGlobalContext()
    return (
        <div className="rounded-lg hidden md:block bg-cwhite flex-1 py-5 ">
            <div 
                className="w-4/5 bg-contain h-[450px] bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url('/smartphone.png')`
                }}
            >
                <div 
                    className="mx-auto h-24 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-[4px] border-cpurple rounded-full relative top-14 bg-transparent bg-cover shadow-lg bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${profilePicture}')`,
                    }}
                ></div>

                <div className="text-center mt-16 ">{
                    firstName.length === 0 ? (
                        <Image className="mx-auto" src={Rect1} alt={"img"} width={150} height={300} />        
                    ): (
                        <div className="text-base font-medium">{firstName} {lastName}</div>
                    )
                }</div>

                <div className="text-center mt-1 ">{
                    emailAddress.length === 0 ? (
                        <Image className="mx-auto" src={Rect2} alt="img" width={100} height={100} />        
                    ): (
                        <div className="font-base text-xs text-gray-500 text-center ">{emailAddress}</div>
                    )
                }</div>

                <div className="text-center mt-8">
                        <Image className="mx-auto" src={Rect3} alt="img" width={150} height={100} />        
                </div>

                <div className="text-center mt-3 ">
                        <Image className="mx-auto" src={Rect4} alt="img" width={150} height={100} />        
                </div>
                
                <div className="text-center mt-3 ">
                        <Image className="mx-auto" src={Rect5} alt="img" width={150} height={100} />        
                </div>

            </div>
        </div>
    )
}