import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BookNow from "@/components/home/BookNow";
async function HomePage() {
    return (

        <div>
            <div className="max-w-[100vw] md:w-[1370px] mx-auto bg-white h-[500px]">
                <HeroSection />
                <BookNow />
            </div>
        </div>
    );
}

export default HomePage;
