"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

// Import SVG icons from assets
import BrakeIcon from "images/servies/break.png";
import ChassisIcon from "images/servies/cassige.png";
import ElectricalIcon from "images/servies/electricalsystem.png";
import EngineIcon from "images/servies/engindiagonistics.png";
import TransmissionIcon from "images/servies/Transmission.png";
import InspectionIcon from "images/servies/Inspection.png";

export default function Services() {
    const { t } = useTranslation("common");
    const services = [
        { icon: BrakeIcon, title: t('home.service.services.0') },
        { icon: ChassisIcon, title: t('home.service.services.1') },
        { icon: ElectricalIcon, title: t('home.service.services.2') },
        { icon: EngineIcon, title: t('home.service.services.3') },
        { icon: TransmissionIcon, title: t('home.service.services.4') },
        { icon: InspectionIcon, title: t('home.service.services.5') },
    ];

    return (
        <div className="w-full bg-service-bg py-16">
            <div className="container">
                <div className="text-center mb-12">
                    <p className="text-xl text-primary flex items-center justify-center gap-2">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_251_1155)">
                                <path d="M20.1192 10.4845C20.1192 9.88509 21.0619 9.3061 21.8559 9.06885C21.6767 8.05181 21.3542 7.06532 20.898 6.13882C20.1124 6.41692 18.9602 6.5455 18.6404 5.99374C18.3406 5.47472 18.8675 4.5032 19.4349 3.89881C18.7698 3.10929 17.9976 2.41658 17.1407 1.84079C16.6 2.4732 15.6659 3.16139 15.1139 2.84322C14.5943 2.54338 14.5655 1.43647 14.7564 0.630177C13.7853 0.278859 12.7696 0.0661388 11.7392 -0.00170898C11.5876 0.816626 11.1217 1.87928 10.4854 1.87928C9.88568 1.87928 9.30696 0.936562 9.06997 0.142842C8.05271 0.322145 7.06603 0.644838 6.13941 1.10128C6.41804 1.88688 6.54688 3.04067 5.99486 3.35883C5.4761 3.65867 4.50509 3.1318 3.90201 2.56433C3.11227 3.22904 2.41953 4.00111 1.844 4.85803C2.47641 5.39931 3.16407 6.33365 2.84564 6.8854C2.54607 7.40495 1.43968 7.43375 0.633387 7.24285C0.281328 8.21428 0.0684158 9.23061 0.000976562 10.2617C0.81905 10.413 1.88145 10.8784 1.88145 11.5147C1.88145 12.1144 0.938724 12.6931 0.145266 12.9306C0.324782 13.9477 0.647558 14.9342 1.10396 15.8606C1.88956 15.5825 3.04178 15.454 3.36073 16.0057C3.66057 16.5245 3.13448 17.4955 2.56623 18.0986C3.23126 18.8883 4.00358 19.581 4.86071 20.1566C5.40199 19.5242 6.33607 18.8365 6.8873 19.1549C7.40685 19.4548 7.43722 20.5609 7.24501 21.3672C7.99744 21.6398 8.77749 21.8292 9.57118 21.9318L9.60287 18.2093C6.21587 17.5565 3.65848 14.5772 3.65848 10.9999C3.65664 6.9438 6.94439 3.65658 10.9994 3.65658C15.0544 3.65658 18.343 6.9438 18.343 10.9999C18.343 14.4866 15.9126 17.4059 12.6534 18.1559L12.8155 21.5267C12.8594 21.6372 12.8982 21.7477 12.9304 21.8553C13.9478 21.676 14.9345 21.3533 15.8612 20.8969C15.5829 20.1113 15.4538 18.9591 16.0055 18.6391C16.5243 18.3395 17.4955 18.8661 18.0984 19.4343C18.8885 18.7696 19.5815 17.9973 20.1572 17.1401C19.5248 16.5994 18.8366 15.6645 19.1547 15.1128C19.4546 14.5929 20.5612 14.5628 21.3678 14.755C21.7196 13.7841 21.9325 12.7683 22.0002 11.7378C21.1813 11.5862 20.1192 11.1211 20.1192 10.4845Z" fill="#0F4B90" />
                                <path d="M10.9992 4.5271C7.42445 4.5271 4.52637 7.42519 4.52637 11.0002C4.52637 14.0976 6.70222 16.6864 9.60869 17.3227L9.61288 16.837C6.97221 16.2095 5.00244 13.8312 5.00244 11.0002C5.00244 7.69229 7.69208 5.00134 10.9992 5.00134C14.3063 5.00134 16.9981 7.69229 16.9981 11.0002C16.9981 13.7584 15.1265 16.0875 12.5866 16.7854L12.61 17.2709C15.4064 16.5547 17.4728 14.0187 17.4728 11.0002C17.4728 7.42519 14.5747 4.5271 10.9992 4.5271Z" fill="#0F4B90" />
                            </g>
                            <defs>
                                <clipPath id="clip0_251_1155">
                                    <rect width="22" height="22" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {t('home.service.subTitle')}
                    </p>
                    <h2 className="text-[48px] leading-[72px] text-primary mb-2">
                        <span className="font-normal">{t('home.service.title.first')}</span>{" "}
                        <span className="font-bold">{t('home.service.title.second')}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative flex items-center" // Added relative and flex
                        >
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={250}
                                        height={185}
                                        className="object-cover rounded-[12.5rem]"
                                    />
                                </div>
                                <h3 className="text-lg text-center g font-semibold text-primary uppercase">
                                    {service.title}
                                </h3>
                            </div>
                            {/* Add vertical line after first and second card */}
                            {index < 5 && index != 2 && (
                                <div className="absolute right-0 top-5 w-[1px] h-full bg-[#D9D9D9]" />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
} 