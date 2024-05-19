import { motion } from "framer-motion";

import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-950 pt-1">
            <div className="textstructure mt-52 px-20">
                    {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => {
                return <div key={index} className="masker ">
                            <div className="w-fit flex items-center">
                                {index === 1 && (
                                    <motion.div 
                                        // initial={{ bg: ["#0A0E42"] }} 
                                        // animate={{ bg: ["#FFBC00"] }} 
                                        // transition={{ ease: [(0.76, 0, 0.24, 1)], duration: 1}} 
                                        initial={{ width: 0 }}
                                        animate={{ width: "8vw" }}
                                        transition={{
                                            type: "spring",
                                            // ease:  (0.76, 0, 0.24, 1),
                                            stiffness: 260,
                                            damping: 20,
                                            duration: 1
                                            
                                        }}
                                        className="w-[8vw] rounded h-[5.6vw] bg-red-500 m-3 mt-6 relative">
                                    </motion.div>)}
                                <h1 className="flex items-center text-[6vw] leading-[4vw] tracking-tighter font-['Neue Montreal']  font-bold">{item}</h1>
                            </div>
                        </div>
            } )}
                
                
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to the IPO"].map((item, index) => 
                (<p key={index} className="text-md -mt-10 font-light tracking-tight leading-none">{item}</p>))}
                <div className="start flex items-center gap-5">
                    <div className="px-4 py-5 border-[2px] font-md text-sm uppercase border-zinc-400 rounded-full" >Start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px]  border-zinc-400 rounded-full">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
