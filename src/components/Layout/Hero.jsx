import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero(){

    useGSAP(()=>{
        gsap.to('#container-hero', { x: 30, opacity: 1, duration: 1, delay: 3})
        gsap.to('.text-1', {x: 30, duration: .9, delay: 3})
        gsap.to('.text-2', {x: -30, duration: .9, delay: 3.1})
        gsap.to('.text-3', {x: 30, duration: .9, delay: 3.2})
        gsap.to('.text-4', {y: 20, duration: .9, delay: 3.3})
    })

    return(
        <section className="flex items-center justify-center h-screen ">
            <div 
            id="container-hero"
            className="flex flex-col items-center justify-center h-screen  text-white font-poppins gap-4 md:gap-2 opacity-0 -ml-32">
                <div className=" text-1 text-5xl  md:text-3xl font-medium whitespace-nowrap md:text-center md:whitespace-normal items-end gradient-multi-silver ">desain biar nggak B aja </div>
                <div className="text-2 text-6xl md:text-3xl font-semibold flex items-center gap-3 ml-10 gradient-multi-silver">
                    <div className="w-12 h-2 bg-white"></div> 
                    komponen
                </div>
                <div className="text-3 flex ml-5 ">
                    <div className="text-5xl md:text-3xl whitespace-nowrap"><span className="gradient-multi-gold font-semibold text-8xl md:text-5xl">UI/UX</span></div>
                    <div className="text-4 md:text-2xl text-4xl whitespace-nowrap gradient-multi-silver"> kece buat lo!</div>
                </div>
            </div>
        </section>
    )
}

export default Hero;