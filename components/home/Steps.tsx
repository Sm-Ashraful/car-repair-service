"use client"

import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Card } from '../ui/card'

// Import images
import Step1Image from "images/Group 102.png"
import Step2Image from "images/Group 102.png"
import Step3Image from "images/Group 102.png"
import RightDoubbleArrow from "images/RightDoubbleArrow.svg"
const stepImages = [Step1Image, Step2Image, Step3Image]

const Steps = () => {
    const { t } = useTranslation("common")
    const steps = t('home.steps.items', { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    return (
        <div className="w-full py-16">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-[3rem] leading-[4.5rem] text-primary mb-2">
                        <span className="font-normal">{t('home.steps.title.first')}</span>{" "}
                        <span className="font-bold">{t('home.steps.title.second')}</span>
                    </h2>
                    <p className="text-black text-[1.25rem] leading-[1.6875rem]">
                        {t('home.steps.subtitle')}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    {steps.map((step, index) => (
                        <>
                            <Card
                                key={index}
                                variant="default"
                                width='w-full max-w-[20rem]'
                                className="flex flex-col items-center text-center p-0"
                            >
                                <div className="relative w-[5.625rem] h-[6.375rem] mb-6">
                                    <Image
                                        src={stepImages[index]}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-lg font-semibold mb-2 whitespace-nowrap">
                                    {step.title}
                                </p>
                                <p className="text-base text-foreground">
                                    {step.description}
                                </p>
                            </Card>
                            {
                                index < steps.length - 1 && (
                                    <Image src={RightDoubbleArrow} alt="RightDoubbleArrow" width={60} height={60} />
                                )
                            }</>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Steps 