import {
  MeshProps,
  Euler,
  Vector3,
  Color,
  ThreeElements,
} from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
// import { OrbitControls } from 'three-stdlib'
import { MeshReflectorMaterial } from '@react-three/drei'

import { PageHeader } from 'ui/components/PageHeader'
import { Stack } from 'ui/components/Stack'
import { HtmlTitle } from 'ui/components/HtmlTitle'
import { tokens } from 'ui/tokens'
import { Area } from 'ui/components/Area'

export const meta = {
  title: 'Three Fiber Attempt',
  date: '2022-10-08T00:00:00',
}

function Box(props: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<ThreeElements['mesh']>()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current!.rotation.x += 0.01
    ref.current!.rotation.y += 0.02
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

// extend({ OrbitControls })
function Scene() {
  return (
    <div style={{ aspectRatio: 1, border: '2px solid white' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1, 0, 0]} />
        <Box position={[1, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default function Output() {
  return (
    <>
      <HtmlTitle title={meta.title} />

      <Stack gap={tokens.size.x24}>
        <PageHeader title={meta.title} date={meta.date} />
        <Area width={tokens.width.x768}>
          <Scene />
        </Area>
      </Stack>
    </>
  )
}
