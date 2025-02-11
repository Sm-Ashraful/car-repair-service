"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import CartPng from "images/girl-fixing-car 1.webp"
import Image from "next/image";


export default function HeroSection() {
    const { t } = useTranslation("common");


    // console.log("currentLocale: ", currentLocale)
    const content = (
        <>
            <p className="text-[3rem]  font-medium leading-[4.2rem]">
                {t('home.heroSection.title')} : <span className="font-bold text-primary"> {t('home.heroSection.titleBold')}</span>
            </p>

            <p className="text-[12px] lg:text-[18px] md:text-[14px] pt-4 text-black">
                {t('home.heroSection.description')}
            </p>
            <div className="flex items-center gap-4 pt-6">

                <Button variant={"default"} className="rounded-none bg-transparent">
                    {t('button.bookNow')}
                </Button>
            </div>
        </>
    );

    return (
        <div className={`grid grid-cols-2 gap-[4.5625rem] pt-[2.5rem] container`}>
            <div className="text-secondary max-w-[567px]">{content}</div>
            <div className="">
                <Image src={CartPng} alt="hero-image" width={600} height={336} />
            </div>
        </div>
    );
}
