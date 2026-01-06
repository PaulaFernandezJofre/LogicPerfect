import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import NeonSphere from "./NeonSphere"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-between px-16">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-semibold mb-4">
          Paula Fernández Jofré
        </h1>

        <h2 className="text-2xl bg-gradient-to-r from-neonOrange to-neonYellow bg-clip-text text-transparent mb-6">
          Software Developer
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Desarrollo software con enfoque técnico, escalable y estructural.
        </p>

        <div className="flex gap-6">
            <a
                href="https://github.com/PaulaFernandezJofre"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neonOrange text-neonOrange hover:shadow-neon transition inline-block"
                >
                Ver proyectos
            </a>

            <a
                href="https://wa.me/56952375961?text=Hola%2C%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-neonOrange transition"
                >
                Contacto
            </a>
        </div>
      </motion.div>

      <div className="w-1/2 h-screen">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[2, 2, 2]} intensity={2} color="#FF6A00" />
          <NeonSphere />
        </Canvas>
      </div>
    </section>
  )
}
