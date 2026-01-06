import { Shape } from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function NeonStar() {
  const ref = useRef()

  const shape = new Shape()
  const spikes = 5
  const outerRadius = 1
  const innerRadius = 0.5

  let rot = Math.PI / 2 * 3
  let x = 0
  let y = 0
  const step = Math.PI / spikes

  shape.moveTo(0, -outerRadius)

  for (let i = 0; i < spikes; i++) {
    x = Math.cos(rot) * outerRadius
    y = Math.sin(rot) * outerRadius
    shape.lineTo(x, y)
    rot += step

    x = Math.cos(rot) * innerRadius
    y = Math.sin(rot) * innerRadius
    shape.lineTo(x, y)
    rot += step
  }

  shape.closePath()

  useFrame(() => {
    ref.current.rotation.z += 0.01
  })

  return (
    <mesh ref={ref}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial
        color="#FF6A00"
        emissive="#FF6A00"
        emissiveIntensity={1.5}
      />
    </mesh>
  )
}
