"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

// Import your value icons
import Value1 from "images/Group 101.png";
import Value2 from "images/Group 102.png";
import Value3 from "images/Group 102.png";
import Value4 from "images/Group 102.png";

export default function Value() {
    const { t } = useTranslation("common");

    const values = [
        { icon: Value1, title: t('home.value.v1') },
        { icon: Value2, title: t('home.value.v2') },
        { icon: Value3, title: t('home.value.v3') },
        { icon: Value4, title: t('home.value.v4') },
    ];

    return (
        <div className="container">
            <div className="flex justify-between py-16 font-poppins mt-[3.75rem]">
                {values.map((value, index) => (
                    <div key={index} className="flex items-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 relative">
                                <Image
                                    src={value.icon}
                                    alt={value.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-foreground text-base  tracking-[0] font-semibold">
                                {value.title}
                            </p>
                        </div>
                        {/* Add vertical line after each card except the last one */}
                        {index < values.length - 1 && (
                            <div className="w-[1px] h-full bg-[#D9D9D9] ml-[41px]" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
