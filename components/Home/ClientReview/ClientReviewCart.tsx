"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

type ReviewCardProps = {
    review: string;
    name: string;
    role: string;
    image: string;
};

const ReviewCard = ({ review, name, role, image }: ReviewCardProps) => {
    return (
        <Tilt
            tiltMaxAngleX={12}    // smooth tilt X
            tiltMaxAngleY={12}    // smooth tilt Y
            glareEnable={true}    // enable glare
            glareMaxOpacity={0.25}
            scale={1.05}          // slight scale on hover
            transitionSpeed={400}
            tiltReverse={false}   // normal tilt direction
        >
            <div
                className="
          relative p-8 min-h-[260px] rounded-3xl
          bg-indigo-950/40 backdrop-blur-3xl
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.45)]
          hover:shadow-[0_12px_40px_rgba(79,70,229,0.6)]
          transition-all duration-500 ease-out
        "
            >
                {/* Neon Glow Background */}
                <div className="absolute inset-0 rounded-3xl 
                        bg-gradient-to-br from-indigo-500/20 to-blue-700/10
                        blur-2xl opacity-40 pointer-events-none" />

                {/* Review Text */}
                <p className="relative text-gray-200 text-[16px] leading-relaxed mb-10">
                    ⭐⭐⭐⭐⭐ {review}
                </p>

                {/* User Info */}
                <div className="relative flex items-center gap-5">
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover border border-white/40 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                    />
                    <div>
                        <h4 className="font-semibold text-xl text-white">{name}</h4>
                        <p className="text-gray-300 text-sm opacity-90">{role}</p>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default ReviewCard;
