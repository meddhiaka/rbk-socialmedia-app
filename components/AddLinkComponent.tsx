import { LiaEqualsSolid } from "react-icons/lia"
import { useState } from "react"
import Dropdown from "./Dropdown"
import { AiOutlineLink } from "react-icons/ai"

export default function AddLinkComponent() {

    return (
        <div className="bg-cgray p-4 rounded-md flex flex-col justify-center">
            <div>
                <div className="flex justify-between">
                    <div className=" flex items-center gap-1">
                            <LiaEqualsSolid className="inline-block text-gray-400 text-lg"/>
                            <span className="inline-block text-xs text-gray-500 font-semibold">Link #1</span>
                    </div>
                    <div className="text-xs font-medium text-gray-500">Remove</div>
                </div>
                <Dropdown />
                <label htmlFor="input-group-1" className="block mt-4 mb-2 text-xs font-medium text-gray-500">Link</label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <AiOutlineLink className="w-4 h-4 inline-block text-gray-500"/>
                    </div>
                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple block w-full pl-10 p-2" placeholder="Put your social media's link" />
                </div>
            </div>
        </div>
    )
}