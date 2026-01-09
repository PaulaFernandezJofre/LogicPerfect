import { motion } from "framer-motion"

const projects = [
  {
    title: "Interacción con personas sordas en Lengua de Señas",
    desc: "Conversión de Texto a Imágenes con Lengua de Señas.",
    stack: ["SQLite", "Python"],
    url: "https://lenguadesenas.streamlit.app/",
  },
  {
    title: "Calculadora de Derivadas",
    desc: "Calculadora de derivadas con gráficas de sus funciones.",
    stack: ["Python", "PostgreSQL"],
    url: "https://calculadoradiferencial-kt8bhtokxb4qpwxzqombhj.streamlit.app/",
  },
  {
    title: "Calculadora de Calorías de un plato de comida",
    desc: "Extracción de calorías a partir de una fotografía de un plato de comida.",
    stack: ["Flask", "PostgreSQL", "Python", "IA"],
    url: "",
  },
  {
    title: "Interacción de personas sordas hacia personas oyentes",
    desc: "Plataforma para facilitar la comunicación entre personas sordas y personas oyentes.",
    stack: ["SQLite", "Python"],
    url: "https://imagenatext.streamlit.app/",
  },
]

export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-24">
      <h2 className="text-4xl mb-12 text-center md:text-left">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
            className="block cursor-pointer p-8 bg-black border border-gray-800 rounded-xl hover:shadow-neon transition"
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
          </motion.a>
        ))}
      </div>
    </section>
  )
}
