import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import NeonStar from "./NeonStar"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 gap-12">
      
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Paula Fernández Jofré
        </h1>

        <h2 className="text-xl sm:text-2xl bg-gradient-to-r from-neonOrange to-neonYellow bg-clip-text text-transparent mb-6">
          Software Developer
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Desarrollo software con enfoque técnico, escalable y estructural.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://github.com/PaulaFernandezJofre"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neonOrange text-neonOrange hover:shadow-neon transition w-fit mx-auto lg:mx-0"
          >
            Ver proyectos
          </a>

          <a
            href="https://wa.me/56952375961?text=Hola%2C%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-neonOrange transition w-fit mx-auto lg:mx-0"
          >
            Contacto
          </a>
        </div>
      </motion.div>

      {/* 3D */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[2, 2, 2]} intensity={2} color="#FF6A00" />
          <NeonStar />
        </Canvas>
      </div>
    </section>
  )
}
