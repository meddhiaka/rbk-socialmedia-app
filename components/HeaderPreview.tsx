import Link from 'next/link'

export default function HeaderPreview() {
    return (
        <div className="rounded-lg relative top-3 mx-4 h-14 bg-cwhite flex items-center justify-between">
            
                <div className="px-3 ml-3 rounded-md bg-cwhite flex items-center h-9 border border-cpurple hover:bg-clightpurple  cursor-pointer">
                    <Link href="/">
                        <span className="text-xs text-cpurple font-semibold inline-block">Back to Editor</span>
                    </Link>
                </div>
                <div className="px-3 mr-3 rounded-md bg-cpurple hover:bg-purple-900 flex items-center h-9 border border-cpurple   cursor-pointer">
                    <Link href="/">
                        <span className="text-xs w-full text-clightpurple  font-semibold inline-block">Share Link</span>
                    </Link>
                </div>
        </div>
    )
}