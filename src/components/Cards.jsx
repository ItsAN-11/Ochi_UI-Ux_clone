

function Cards(){
    return (
        <div className="w-full h-screen  bg-zinc-950 flex items-center px-32 gap-10">
            <div className="cardcontainer w-1/2 h-[50vh] ">
                <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""></img>
                    <button className="outline  outline-1  absolute rounded-full left-5 bottom-9 px-2 py-2  border-[#CDEA68] text-[#CDEA68]">&copy;2023-2024</button>
                </div>
            </div>
            <div className="cardcontainer w-2/3  flex gap-5 h-[50vh]">
                <div className="card w-1/2 relative flex items-center justify-center h-full bg-zinc-900 rounded-xl">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""></img>
                    <button className="outline outline-1  absolute rounded-full left-5 bottom-9 px-2 py-2 border-1  ">RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="card w-1/2 h-full bg-[#212121] relative flex justify-center items-center rounded-xl">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""></img>
                    <button className=" outline outline-1 absolute rounded-full left-5 bottom-9 px-2 py-2 border-1 ">BUSINESS BOOTCAMP </button>
                </div>
            </div>

        </div>
    )
}
export default Cards