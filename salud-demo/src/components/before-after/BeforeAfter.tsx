import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../../site/locale';
// src/components/before-after/BeforeAfterSection.tsx
import { motion } from "motion/react";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const beforeAfterData = [
  {
    id: 1,
    before: "/before1.jpg",
    after: "/after1.jpg",
    title: "Blanqueamiento dental",
    description: "Resultado en 2 sesiones",
  },
  // Agrega más...
];

export function BeforeAfterSection() {
  useSiteLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> {tr("text.f32d075c1f")} <span className="text-blue-600">{tr("text.26c707591a")}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"> {tr("text.392ea09957")} </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {beforeAfterData.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-64 md:h-80">
                      <img
                        src={item.before}
                        alt={tr("text.1177e4ed7f")}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"> {tr("text.1177e4ed7f")} </span>
                    </div>
                    <div className="relative h-64 md:h-80">
                      <img
                        src={item.after}
                        alt={tr("text.26c707591a")}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full"> {tr("text.26c707591a")} </span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{localizeText(item.title)}</h3>
                    <p className="text-gray-600">{localizeText(item.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
