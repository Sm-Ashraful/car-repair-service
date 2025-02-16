"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopCornerArrow from "@/public/images/TopCornerArrow.svg";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import faqImage from "@/public/images/servies/fagImage.png";
const MobileMechanicFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useTranslation("common");

    const faqs = t('home.faq.items', { returnObjects: true }) as Array<{
        question: string;
        answer: string;
    }>;

    return (
        <div className="py-[3.125rem]">
            <section className="container flex flex-col md:flex-row items-center gap-[7.1875rem]">
                {/* Left Section: Image + Heading */}
                <div className="w-full md:w-1/2 ">
                    <h2 className="text-[3rem] leading-[72px] pt-5">
                        <span className="font-normal">{t('home.faq.title.first')}</span>{" "}
                        <span className="text-primary font-bold">{t('home.faq.title.second')}</span>
                    </h2>
                    <div className="mt-4">
                        <Image
                            src={faqImage}
                            alt="Mobile Mechanic"
                            width={510}
                            height={288}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Section: FAQs */}
                <div className="w-full md:w-1/2">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`border rounded-3xl p-4 mb-3 cursor-pointer transition-all duration-500 ease-in-out 
                        ${isOpen ? "bg-blue-100 border-blue-400" : "bg-white"}`}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className={`text-lg font-semibold transition-colors duration-500 ${isOpen ? "text-blue-600" : ""}`}>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 0 : 90 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <Image src={TopCornerArrow} alt="Top Corner Arrow" />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default MobileMechanicFAQ;
