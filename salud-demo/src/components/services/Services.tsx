import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../../site/locale';
// src/components/services/ServicesSection.tsx
import { motion } from "motion/react";
import { Heart, Sparkles, Scissors, Smile } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Implantes dentales",
    desc: "Recupera tu sonrisa con implantes de última generación.",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento",
    desc: "Aclarado dental profesional con resultados inmediatos.",
  },
  {
    icon: Scissors,
    title: "Ortodoncia",
    desc: "Alineadores invisibles y brackets de última tecnología.",
  },
  {
    icon: Smile,
    title: "Estética dental",
    desc: "Carillas, coronas y sonrisa de diseño personalizado.",
  },
];

export function ServicesSection() {
  useSiteLocale();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> {tr('demo.services')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"> {tr("text.b0c142ba8d")} </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {localizeText(service.title)}
              </h3>
              <p className="mt-2 text-gray-600">{localizeText(service.desc)}</p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition"> {tr("text.b5b73ae604")} </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
