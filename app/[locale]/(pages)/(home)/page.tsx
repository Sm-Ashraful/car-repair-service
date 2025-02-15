import React from "react";
import HeroSection from "@/components/home/HeroSection";
import BookNow from "@/components/home/BookNow";
import Value from "@/components/home/Value";
import Services from "@/components/home/Services";
import Package from "@/components/home/Package";
import HealthCheck from "@/components/home/HealthCheck";
import CarServiceCTA from "@/components/home/CarServiceCTA";
import Steps from "@/components/home/Steps";
import GenuinePartsBanner from "@/components/home/GenuinePartsBanner";
export default function HomePage() {
    return (
        <div>
            <div className="max-w-[100vw]  bg-white">
                <HeroSection />
                <BookNow />
                <Value />
                <Services />
                <Package />
                <HealthCheck />
                <CarServiceCTA />
                <Steps />
                <GenuinePartsBanner />
            </div>
        </div>
    );
}
