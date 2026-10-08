import { useLocale as useSiteLocale, t as tr } from '../../site/locale';
import { ArrowRight, CalendarDays } from "lucide-react";

export default function HeroContent() {
  useSiteLocale();

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
            > {tr("text.f6c9703334")} </span>

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
            > {tr("text.500e4be500")} <br/> {tr("text.bdd4c87a48")} </h1>

            <p
                className="
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-8
                    text-gray-200
                "
            > {tr("text.db992a2c90")} </p>

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

                    <CalendarDays size={20}/> {tr("text.df14356d6d")} </button>

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
                > {tr("text.98dc159f21")} <ArrowRight size={18}/>

                </button>

            </div>

            {/* Estadísticas */}

            <div className="mt-14 flex flex-wrap gap-12">

                <div>

                    <h2 className="text-4xl font-bold text-white"> {tr("text.5f273ca8a8")} </h2>

                    <p className="text-gray-300"> {tr("text.727629b4ff")} </p>

                </div>

                <div>

                    <h2 className="text-4xl font-bold text-white"> {tr("text.e52c854d56")} </h2>

                    <p className="text-gray-300"> {tr("text.c82cbcde3f")} </p>

                </div>

                <div>

                    <h2 className="text-4xl font-bold text-white"> {tr("text.93f9259322")} </h2>

                    <p className="text-gray-300"> {tr("text.924347fea4")} </p>

                </div>

            </div>

        </div>

    );

}
