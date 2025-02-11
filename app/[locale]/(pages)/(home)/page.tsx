import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BookNow from "@/components/home/BookNow";
import Value from "@/components/home/Value";
import Services from "@/components/home/Services";

export default function HomePage() {
    return (
        <div>
            <div className="max-w-[100vw]  bg-white">
                <HeroSection />
                <BookNow />
                <Value />
                <Services />
            </div>
        </div>
    );
}
