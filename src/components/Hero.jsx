import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import NeonSphere from "./NeonSphere"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
      
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Paula Fernández Jofré
        </h1>

        <h2 className="text-xl md:text-2xl bg-gradient-to-r from-neonOrange to-neonYellow bg-clip-text text-transparent mb-6">
          Software Developer
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Desarrollo software con enfoque técnico, escalable y estructural.
        </p>

        {/* BOTÓN CONTACTO */}
        <div className="flex justify-center md:justify-start">
          <a
            href="https://wa.me/56952375961?text=Hola%2C%20vi%20tu%20portafolio%20y%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-neonOrange text-neonOrange hover:shadow-neon transition"
          >
            Contacto
          </a>
        </div>
      </motion.div>

      {/* 3D */}
      <div className="w-full md:w-1/2 h-[400px] md:h-screen mt-12 md:mt-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[2, 2, 2]} intensity={2} color="#FF6A00" />
          <NeonSphere />
        </Canvas>
      </div>
    </section>
  )
}
