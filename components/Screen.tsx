export default function Screen() {
    return (
        <div className="rounded-lg hidden md:block bg-cwhite flex-1 py-5 ">
            <div 
                className="w-4/5 bg-contain h-[450px] bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url('/smartphone.png')`
                }}
            >
                <p className="fixed top-44 left-28">u</p>
            </div>
        </div>
    )
}