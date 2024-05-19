

export default function About() {
    return (
        <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl text-zinc-950"> 
        <h1 className="font-['Neue Montreal'] tracking-tight text-[4vw] leading-[4.5vw]">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
            <div className="w-1/2 ">
                <h1 className="text-6xl">Our approach: </h1>
                <button className="px-10 uppercase flex py-6 mt-10 bg-zinc-950 rounded-full text-white gap-9 items-center">Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#353f12] rounded-3xl"></div>
        </div>

        </div>
    )
}
