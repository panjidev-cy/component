import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero(){

    useGSAP(()=>{
        gsap.to('#container-hero', { x: 30, opacity: 1, duration: 1, delay: 2.1})
        gsap.to('.text-1', {x: 30, duration: .9, delay: 2.2})
        gsap.to('.text-2', {x: -30, duration: .9, delay: 2.2})
        gsap.to('.text-3', {x: 30, duration: .9, delay: 2.2})
        gsap.to('.text-4', {y: 20, duration: .9, delay: 2.3})
    })

    return(
        <section className="flex items-center justify-center h-screen ">
            <div 
            id="container-hero"
            className="flex flex-col items-center justify-center h-screen w-[90%] text-white font-poppins gap-4 md:gap-2 opacity-0 -ml-24 m-8 p-8">
                <div className=" text-1 text-5xl  md:text-3xl font-medium  md:text-center  items-end gradient-multi-silver ">desain biar nggak B aja </div>
                <div className="text-2 text-6xl md:text-3xl font-semibold flex items-center justify-center gap-2 -mr-16  gradient-multi-silver md:items-center  flex-wrap-reverse">
                    <div className="w-12 h-2 md:w-8 md:h-1 rounded-lg bg-white/30"></div> 
                    komponen
                </div>
                <div className="text-3 flex flex-wrap ml-5 gap-2">
                    <div className="text-5xl md:text-3xl whitespace-nowrap mb-2"><span className="gradient-multi-gold font-semibold text-8xl md:text-5xl">UI/UX</span></div>
                    <div className="text-4 md:text-2xl font-medium text-4xl text-start gradient-multi-silver"> kece buat lo!</div>
                </div>
            </div>
        </section>
    )
}

export default Hero;