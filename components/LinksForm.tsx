import AddLinkComponent from "./AddLinkComponent"

export default function LinksForm() {
    return (
        <div className="rounded-lg bg-cwhite w-full md:w-3/5 h-400px p-5">
            <p className="text-2xl font-medium my-5">Customize your links</p>
            <p className="text-xs font-light"> Add/edit/remove links below and then share all your profiles with the world!</p>
            <button className="w-full py-1 my-3 rounded-md bg-transparent h-9 border border-cpurple text-xs text-cpurple font-semibold">+ Add new link</button>
            <div>
                <AddLinkComponent />
                <AddLinkComponent />
                <AddLinkComponent />
            </div>
            <div className="flex justify-end border-[1px] border-t-gray-300 border-white py-2">
                <div className="px-3 mr-3 rounded-md bg-cpurple hover:bg-purple-900 flex items-center h-9 border border-cpurple   cursor-pointer">
                        <span className="text-xs w-full text-clightpurple  font-semibold inline-block">Save</span>
                </div>
            </div>
        </div>
    )
}