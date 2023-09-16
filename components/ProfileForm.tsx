export default function ProfileForm() {
    return (
        <div className="bg-cwhite w-full md:w-3/5 h-400px p-5">
            <p className="text-2xl font-medium my-5">Profile Details</p>
            <p className="text-xs font-light">Add your details to create a personal touch to your profile.</p>
            <div className="mt-4 bg-cgray p-4 rounded-md flex  flex-col md:flex-row  items-center justify-between">
                <p className="text-gray-600 font-light text-xs">Profile Picture</p>
                <div className="flex flex-row">
                    <div className="w-36 h-36 bg-slate-600 rounded-md"></div>
                    <div className="flex flex-col justify-center mx-1 w-4/5">
                        <p className="text-xs text-gray-600 font-light">Image must be below 1024x1024px.</p>
                        <p className="text-xs text-gray-600 font-light">Use PNG, JPG or BMP format.</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 bg-cgray p-4 rounded-md flex flex-col">
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="" className="inline-block text-xs text-gray-700 font-light w-1/2 md:w-auto">First name*</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple inline-block w-80 p-2" placeholder="Put your first name" />
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="" className="text-xs text-gray-700 font-light w-1/2 md:w-auto">Last name*</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple inline-block w-80 p-2" placeholder="Put your last name" />
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="" className="text-xs text-gray-700 font-light w-1/2 md:w-auto">Email name*</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple inline-block w-80 p-2" placeholder="name@email.domain" />
                </div>
            </div>
            <div className="flex justify-end border-[1px] border-t-gray-300 border-white pt-2">
                <div className="px-3 mr-3 rounded-md bg-cpurple hover:bg-purple-900 flex items-center h-9 border border-cpurple   cursor-pointer">
                        <span className="text-xs w-full text-clightpurple  font-semibold inline-block">Save</span>
                </div>
            </div>
        </div>
    )
}