import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { HemisphereLight, PointLight } from 'three';
const Computers = () => {
        const computer = useGLTF('./desktop_pc/scene.gltf');
        return (
                <mesh>
                        <hemisphereLight intensity={Math.PI} groundColor="black" />
                        <pointLight intensity={Math.PI} />
                        <primitive object={computer.scene} scale={0.74} position={[0, -2.5, -1.5]} />
                </mesh>
        );
};

const ComputersCanvas = () => {
        const [loaded, setLoaded] = useState(false);

        useEffect(() => {
                setLoaded(true); //Mark the GLTF File has been loaded
        }, []);
        return (
                <Canvas
                        frameloop="demand"
                        shadows
                        camera={{ position: [20, 3, 5], fov: 25 }}
                        gl={{ preserveDrawingBuffer: true }}
                >
                        <Suspense fallback={<CanvasLoader />}>
                                <OrbitControls
                                        enableZoom={false}
                                        maxPolarAngle={Math.PI / 2}
                                        minPolarAngle={Math.PI / 2}
                                />
                        </Suspense>

                        <Preload all />
                        {loaded && <Computers />}
                </Canvas>
        );
};
export default ComputersCanvas;
