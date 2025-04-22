import { Float, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React from 'react'

const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if (!scene) {
          console.warn('Model failed to load:', model.modelPath)
        }
    }, [scene, model.modelPath])
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <Environment preset="city" />

        <Float>
            <group>
                <primitive object={scene.scene} />
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon