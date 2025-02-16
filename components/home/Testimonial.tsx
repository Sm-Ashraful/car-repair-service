"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, StarIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
    id: number;
    name: string;
    car: string;
    location: string;
    review: string;
    date: string;
    text: string;
    rating: number;
}

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation("common");

    const testimonials = t('home.testimonials.items', { returnObjects: true }) as Testimonial[];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 6; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };



    return (
        <div className="w-full bg-service-bg py-[50px]">
            <div className="container">
                <h2 className="text-[48px] leading-[4.5rem] mb-[3.75rem] max-w-[679px] mx-auto text-center">
                    <span className="text-primary font-bold">{t('home.testimonials.title.first')}</span>{" "}
                    <span className="font-medium">{t('home.testimonials.title.second')}</span>
                </h2>

                <div className="relative">
                    <div className="grid grid-cols-3 gap-6">
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <div key={index} className="bg-white shadow-lg border rounded-xl p-6 text-left transition-transform transform hover:scale-105">
                                <svg width="68" height="73" viewBox="0 0 68 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6281 23.0866C13.7116 22.8248 14.8191 22.693 15.93 22.6936C24.7275 22.6936 31.8572 30.8416 31.8572 40.8886C31.8572 50.9386 24.7275 59.0866 15.93 59.0866C7.1325 59.0866 0 50.9416 0 40.8886C0 40.5946 0.005625 40.2976 0.0196875 40.0036H0C0 24.8386 10.8 12.4996 24.075 12.4996V18.6076C19.7691 18.6076 15.7978 20.2816 12.6281 23.0866ZM48.2738 23.0866C49.3369 22.8286 50.4394 22.6936 51.57 22.6936C60.3675 22.6936 67.5 30.8416 67.5 40.8886C67.5 50.9386 60.3675 59.0866 51.57 59.0866C42.7725 59.0866 35.6428 50.9416 35.6428 40.8886C35.6428 40.5946 35.6484 40.2976 35.6625 40.0036H35.6428C35.6428 24.8386 46.4428 12.4996 59.7178 12.4996V18.6076C55.4091 18.6076 51.4434 20.2816 48.2738 23.0866Z" fill="#0F4B90" />
                                </svg>

                                <p className="text-gray-700">{testimonial.review}</p>
                                <h3 className="font-semibold text-lg mt-4">{testimonial.name}</h3>
                                <p className="text-gray-500 text-sm">{testimonial.car}</p>
                                <p className="text-gray-400 text-sm">{testimonial.location}</p>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            className={`text-yellow-500 ${i < testimonial.rating ? "" : "opacity-40"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-400 text-xs mt-2">{testimonial.date}</p>
                            </div>
                        ))}

                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;