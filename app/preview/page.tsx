'use client'

import { useGlobalContext } from "@/context/AppContext"
import HeaderPreview from "@/components/HeaderPreview"
import { AiOutlineArrowRight } from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {AiFillYoutube, AiFillLinkedin} from "react-icons/ai"

export default function Page() {

    const { profilePicture, firstName, lastName, emailAddress  } = useGlobalContext()

    return (
        <>
            <div className="bg-cpurple h-56 rounded-b-3xl">
                <HeaderPreview />
                <div className="flex justify-center relative top-20">
                    <div className=" h-[380px] w-56 block bg-white rounded-xl shadow-xl">
                        <div 
                            className="mx-auto h-24 w-24 bg-white rounded-full relative top-3 border-[4px] border-cpurple bg-transparent bg-cover shadow-lg bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('${profilePicture}')`,
                            }}
                        >

                        </div>
                        <p className="font-bold text-2xl text-center mt-4">{ firstName === '' ? 'First Name' : firstName } { lastName === '' ? 'Last Name' : lastName}</p>
                        <p className="font-base text-xs text-gray-500 text-center mt-2">{ emailAddress === '' ? 'Email Address' : emailAddress }</p>
                        <div className="cursor-pointer mx-auto bg-github w-48 p-2 mt-10 text-sm text-white rounded-md flex flex-row justify-between items-center">
                            <div>
                                <BsGithub className="inline-block mr-1"/>
                                <p className="inline-block font-light">Github</p>
                            </div>
                            <AiOutlineArrowRight />
                        </div>
                        <div className="cursor-pointer mx-auto bg-youtube w-48 p-2 mt-2 text-sm text-white rounded-md flex flex-row justify-between items-center">
                            <div>
                                <AiFillYoutube className="inline-block mr-1"/>
                                <p className="inline-block font-light">YouTube</p>
                            </div>
                            <AiOutlineArrowRight />
                        </div>
                        <div className="cursor-pointer mx-auto bg-linkedin w-48 p-2 mt-2 text-sm text-white rounded-md flex flex-row justify-between items-center">
                            <div>
                                <AiFillLinkedin className="inline-block mr-1"/>
                                <p className="inline-block font-light">LinkedIn</p>
                            </div>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}