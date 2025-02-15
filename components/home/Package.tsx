"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import OkSymbol from "@/assets/oksymbol";
import Sell from '@/assets/Sell';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const Package = () => {
    const { t } = useTranslation("common");
    const packages = t('home.package.packages', { returnObjects: true }) as string[];

    return (
        <div className="w-full py-16">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-[48px] leading-[72px] text-primary mb-2">
                        <span className="font-normal">{t('home.package.title.first')}</span>{" "}
                        <span className="font-bold">{t('home.package.title.second')}</span>
                    </h2>
                    <p className="text-black text-[20px] leading-[27px]">{t('home.package.subTitle')}</p>
                </div>

                <Card>
                    <div className="flex justify-between">
                        {/* Package left side */}
                        <div className="w-fit pr-[60px] border-r border-white/20">
                            <div className="flex flex-col gap-2">
                                {packages.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <OkSymbol />
                                        <span className="text-base">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8">
                                <button className="text-lg font-semibold underline">
                                    {t('home.package.button')}
                                </button>
                            </div>
                        </div>

                        {/* Package right side */}
                        <div className="w-1/2 ml-[3.75rem] h-full">
                            <div className='flex justify-between'>
                                <h3 className="text-3xl font-semibold mb-2">
                                    {t('home.package.servicePackages.title')}
                                </h3>
                                <p className="bg-white text-sm text-primary flex items-center gap-2 px-[14px] py-[9.5px] rounded-lg mb-4">
                                    <Sell />
                                    {t('home.package.servicePackages.offerTitle')}
                                </p>
                            </div>
                            <div className='flex-1 flex flex-col justify-between'>
                                <div>
                                    <span className='text-lg'>AED</span>
                                    {" "}
                                    <span className="text-[48px] font-bold">
                                        {t('home.package.servicePackages.price')}
                                    </span>
                                </div>
                                <Button variant="secondary" className='w-full'>
                                    {t('button.bookNow')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Package
