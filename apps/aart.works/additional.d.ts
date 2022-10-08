import { OrbitControls } from 'three-stdlib'

declare module 'dirty-json'

declare module '*.module.css' {
  const content: { [className: string]: string }
  export = content
}

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: Object3DNode<CustomElement, typeof OrbitControls>
  }
}
