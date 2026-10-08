import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../../site/locale';
// src/components/specialists/SpecialistsSection.tsx
import { motion } from "motion/react";
import { Camera as Instagram, BriefcaseBusiness as Linkedin } from "lucide-react";

const specialists = [
  {
    name: "Dra. María González",
    specialty: "Ortodoncia y Estética",
    experience: 12,
    image: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=0D8ABC&color=fff&size=128",
  },
  {
    name: "Dr. Carlos Ruiz",
    specialty: "Implantología",
    experience: 15,
    image: "https://ui-avatars.com/api/?name=Carlos+Ruiz&background=0D8ABC&color=fff&size=128",
  },
  {
    name: "Dra. Laura Méndez",
    specialty: "Endodoncia",
    experience: 8,
    image: "https://ui-avatars.com/api/?name=Laura+Mendez&background=0D8ABC&color=fff&size=128",
  },
];

export function SpecialistsSection() {
  useSiteLocale();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> {tr("text.6c8a1a683c")} <span className="text-blue-600">{tr("text.fb9e658078")}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"> {tr("text.476e98319f")} </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={spec.image}
                alt={localizeText(spec.name)}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold">{localizeText(spec.name)}</h3>
              <p className="text-blue-600 font-medium">{localizeText(spec.specialty)}</p>
              <p className="text-gray-500 text-sm mt-1">
                {localizeText(spec.experience)} {tr("text.b4c460516b")} </p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
