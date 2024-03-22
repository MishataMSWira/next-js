"use client"
import Link from "next/link"
import { ReactNode, useState } from "react"

type Props = {
    children: ReactNode,
    title: string
}
const MainTemplate = (myProps: Props) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
        <div className="w-full min-h-dvh">
            <div className="w-full flex flex-wrap">
                {/* sidebar section */}
                {/* dvh = dynamic viewwport height */}
                <div className={`min-h-dvh w-1/4 bg-sky-300 fixed  top-0 right-full transform transition-transform ${isShow ? `translate-x-full` : ``}`}>
                    <div className="flex w-full p-3">
                        <button onClick={() => setIsShow(false)} className="ml-auto text-white font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <h2 className="pt-10 w-full p-3 text-2xl font-bold text-center text-white uppercase">
                        Serena
                    </h2>

                    {/* menu area */}
                    <div className="w-full mt-10 px-3">
                        <Link onClick={() => setIsShow(false)} href={`/profile`}>
                            <div className="text-lg font-bold text-white py-3 w-full text-center my-2 hover:bg-slate-400 hover:rounded-md">
                                Profile
                            </div>
                        </Link>
                        <Link onClick={() => setIsShow(false)} href={`/faq`}>
                            <div className="text-lg font-bold text-white py-3 w-full text-center my-2 hover:bg-slate-400 hover:rounded-md">
                                FAQ
                            </div>
                        </Link>
                        <Link onClick={() => setIsShow(false)} href={`/product`}>
                            <div className="text-lg font-bold text-white py-3 w-full text-center my-2 hover:bg-slate-400 hover:rounded-md">
                                Products
                            </div>
                        </Link>
                    </div>
                    {/* end menu area */}
                </div>

                {/* end sidebar section */}

                {/* right section */}
                <div className="w-full">
                    {/* header section */}
                    <div className="w-full bg-white border-b-2 border-sky-300 p-5">
                        <h1 className="text-sky-300 text-center font-bold text-2xl uppercase flex items-center gap-2">
                            <button onClick={() => setIsShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            </button>

                            {myProps.title}
                        </h1>
                    </div>
                    {/* end header section */}

                    {/* content section */}
                    <div className="w-full p-5">
                        {myProps.children}
                    </div>
                    {/* end content section */}
                </div>
                {/* end right section */}
            </div>
        </div>
    )
}
export default MainTemplate