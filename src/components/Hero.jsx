import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import NeonSphere from "./NeonSphere"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 text-center">
      
      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
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
        <div className="flex justify-center mb-10">
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

      {/* ESFERA 3D */}
      <div className="w-full max-w-md h-[300px] md:h-[400px] flex justify-center">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[2, 2, 2]} intensity={2} color="#FF6A00" />
          <NeonSphere />
        </Canvas>
      </div>
    </section>
  )
}
