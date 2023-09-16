import HeaderPreview from "@/components/HeaderPreview"

export default function Page() {
    return (
        <>
            <div className="bg-cpurple h-96 rounded-b-3xl">
                <HeaderPreview />
                <div className="flex justify-center relative top-36">
                    <div className=" h-96 w-56 block bg-white rounded-xl shadow-xl"></div>
                </div>
            </div>
            
        </>
    )
}