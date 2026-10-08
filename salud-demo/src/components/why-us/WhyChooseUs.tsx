import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../../site/locale';
// src/components/why-us/WhyUsSection.tsx
import { motion } from "motion/react";
import { Award, Clock, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expertos certificados",
    desc: "Más de 10 años de experiencia en odontología estética.",
  },
  {
    icon: Clock,
    title: "Tecnología avanzada",
    desc: "Equipos de última generación para diagnósticos precisos.",
  },
  {
    icon: Shield,
    title: "Seguridad y confianza",
    desc: "Protocolos de higiene y esterilización rigurosos.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    desc: "Tratamientos adaptados a tus necesidades y presupuesto.",
  },
];

export function WhyUsSection() {
  useSiteLocale();
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> {tr("text.202b437555")} <span className="text-blue-600">{tr("text.f529a4b3b5")}</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-4">
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {localizeText(reason.title)}
              </h3>
              <p className="mt-2 text-gray-600">{localizeText(reason.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
