"use client";

import React from "react";
import Image from "next/image";

const CustomImage = () => {
    return (
        <div className="relative w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
                src="https://i.pinimg.com/736x/81/6c/f7/816cf772f2fc95610d74d4e4e5d99702.jpg"
                alt="Custom Illustration"
                width={150}
                height={150}
                className="w-full h-auto object-cover"
                priority
            />
        </div>
    );
};

export default CustomImage;
