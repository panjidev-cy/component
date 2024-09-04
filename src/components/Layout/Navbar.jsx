import IconBadge from "../Element/IconBadge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
    
    useGSAP(()=>{
        gsap.to('#container', { opacity: 1, duration: 1, delay: .2})
        gsap.to('#icon', { x: 30, opacity: 1, duration: 1, delay: 1.5 })
        gsap.to('#search', { x: -10, opacity: 1, duration: 1, delay: 1.5 })
        gsap.to('#github', {opacity: 1, duration: 1, delay: 1.5 })

    })
    return (
        <header
        className="flex py-4 px-7 w-full gap-4 items-center justify-between fixed top-0 left-0 right-0 h-16 bg-dark/65 opacity-0"
        id="container">
            
            <div 
            className="flex items-center gap-2 relative right-10 opacity-0"
            id="icon">
                <IconBadge icon="uil-backpack"/>
                <div className="md:hidden">
                    <h2 className="text-lg font-semibold capitalize font-poppins text-gray-100">
                        Back<span className="text-primer italic font-semibold">pack</span>
                    </h2>
                </div>
            </div>

            <div className="flex gap-5 items-center " id="search">
                <form action="/search" method="get" className="flex gap-2">
                    <input 
                    type="text" 
                    name="query" 
                    placeholder="Search..." 
                    required  
                    className="px-4 py-1 h-8 border-[1.5px] border-primer rounded-md focus:outline-none focus:ring-0  bg-primer/30 text-gray-200 font-poppins text-xs"/>
                    <button 
                    type="submit" 
                    className="w-8 h-8 flex items-center justify-center p-2 bg-primer rounded-lg md:hidden">
                        <i className="uil uil-search-alt text-xl text-secondary"></i>
                    </button>
                </form>

                <div className="w-[2px] h-6 bg-slate-100/20 rounded-lg" />
                <div id="github" className="opacity-0">
                    <IconBadge icon="uil-github-alt"/>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
