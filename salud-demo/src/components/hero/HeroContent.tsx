import { ArrowRight, CalendarDays } from "lucide-react";

export default function HeroContent() {

    return (

        <div>

            <span
                className="
                    inline-flex
                    rounded-full
                    border
                    border-[#A69232]
                    bg-white/10
                    px-5
                    py-2
                    text-sm
                    font-medium
                    tracking-widest
                    text-white
                    backdrop-blur-xl
                "
            >

                CLÍNICA DENTAL PREMIUM

            </span>

            <h1
                className="
                    mt-8
                    max-w-3xl
                    text-5xl
                    font-black
                    leading-tight
                    text-white
                    md:text-6xl
                    xl:text-7xl
                "
            >

                Tu mejor sonrisa

                <br/>

                comienza aquí.

            </h1>

            <p
                className="
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-8
                    text-gray-200
                "
            >

                Comprometidos a mejorar la salud bucal de nuestros pacientes
                mediante tratamientos modernos, seguros y totalmente
                personalizados.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

                <button
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-full
                        bg-[#A69232]
                        px-8
                        py-4
                        font-semibold
                        text-white
                        shadow-xl
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >

                    <CalendarDays size={20}/>

                    Agenda tu cita

                </button>

                <button
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/40
                        bg-white/10
                        px-8
                        py-4
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:bg-white/20
                    "
                >

                    Ver tratamientos

                    <ArrowRight size={18}/>

                </button>

            </div>

            {/* Estadísticas */}

            <div className="mt-14 flex flex-wrap gap-12">

                <div>

                    <h2 className="text-4xl font-bold text-white">

                        +2,300

                    </h2>

                    <p className="text-gray-300">

                        Pacientes felices

                    </p>

                </div>

                <div>

                    <h2 className="text-4xl font-bold text-white">

                        15+

                    </h2>

                    <p className="text-gray-300">

                        Años de experiencia

                    </p>

                </div>

                <div>

                    <h2 className="text-4xl font-bold text-white">

                        4.9★

                    </h2>

                    <p className="text-gray-300">

                        Calificación promedio

                    </p>

                </div>

            </div>

        </div>

    );

}