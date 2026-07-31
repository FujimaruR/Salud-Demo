export default function HeroBackground() {

    return (

        <>

            {/* Video */}

            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >

                <source
                    src="/videos/dentist.mp4"
                    type="video/mp4"
                />

            </video>

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/65"/>

            {/* Gradiente */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/90
                    via-black/50
                    to-black/20
                "
            />

            {/* Luces */}

            <div
                className="
                    absolute
                    -left-40
                    top-40
                    h-96
                    w-96
                    rounded-full
                    bg-[#A69232]/20
                    blur-[120px]
                "
            />

            <div
                className="
                    absolute
                    bottom-0
                    right-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#110E73]/30
                    blur-[180px]
                "
            />

        </>

    );

}