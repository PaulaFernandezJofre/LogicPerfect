import { motion } from "framer-motion"

const projects = [
  {
    title: "Api Rest Full Stack",
    desc: "Extracción de calorías de un plato de comida a partir de una fotografía.",
    stack: ["Flask", "PostgreSQL", "Python"],
  },
  {
    title: "Calculadora de Derivadas",
    desc: "Calculadora de derivadas con gráficas de sus funciones.",
    stack: ["Python", "PostgreSQL", "Streamlit"],
  },
  {
    title: "Datawarehouse para Noticieros",
    desc: "Datawarehouse para noticieros con extracción de datos.",
    stack: ["Python", "Pandas", "Markdown"],
  },
]

export default function Projects() {
  return (
    <section className="px-16 py-24">
      <h2 className="text-4xl mb-12">Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 bg-black border border-gray-800 rounded-xl hover:shadow-neon transition"
          >
            <h3 className="text-xl mb-4">{p.title}</h3>
            <p className="text-gray-400 mb-6">{p.desc}</p>

            <div className="flex gap-3 flex-wrap">
              {p.stack.map((s, j) => (
                <span
                  key={j}
                  className="text-sm px-3 py-1 border border-neonOrange text-neonOrange rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
