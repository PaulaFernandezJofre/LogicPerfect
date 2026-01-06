import { MeshDistortMaterial } from "@react-three/drei"

export default function NeonSphere() {
  return (
    <mesh scale={1.8}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#0a0a0a"
        emissive="#FF6A00"
        emissiveIntensity={0.6}
        distort={0.3}
        speed={2}
      />
    </mesh>
  )
}
