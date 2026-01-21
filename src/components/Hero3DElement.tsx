import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

// Premium Organic Palette
const PALETTE = ['#F59E0B', '#FDE68A', '#F43F5E', '#84CC16', '#ffffff'];

const CinematicParticle = ({ position, rotation, scale, color, type, speed }: any) => {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        // Cinematic slow rotation
        mesh.current.rotation.x += speed * 0.002;
        mesh.current.rotation.y += speed * 0.003;

        // Physics: Mouse repulsion - Optimized distance check
        const { x, y } = state.pointer;
        // Simple distance check without square root for perf
        const dx = x * 10 - position[0];
        const dy = y * 10 - position[1];
        const distSq = dx * dx + dy * dy;

        if (distSq < 9) { // 3^2 = 9
            mesh.current.position.x += dx * 0.01;
            mesh.current.position.y += dy * 0.01;
        }
    });

    return (
        <Float
            speed={speed * 0.8}
            rotationIntensity={0.6}
            floatIntensity={1.5}
            position={position}
        >
            <mesh
                ref={mesh}
                rotation={rotation}
                scale={scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {/* Type 0: Torus Knot - Reduced Segments */}
                {type === 0 && <torusKnotGeometry args={[0.5, 0.2, 64, 8]} />}

                {/* Type 1: Icosahedron - No change needed, already low poly */}
                {type === 1 && <icosahedronGeometry args={[0.8, 0]} />}

                {/* Type 2: Sphere - Reduced Segments */}
                {type === 2 && <sphereGeometry args={[0.6, 16, 16]} />}

                {/* Optimized Standard Material - Removes transmission overhead */}
                <meshStandardMaterial
                    color={hovered ? '#ffffff' : color}
                    roughness={0.4}
                    metalness={0.6}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
};

const CinematicScene = () => {
    const particles = useMemo(() => {
        return new Array(20).fill(null).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 35,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15 - 5
            ],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
            scale: Math.random() * 0.5 + 0.3,
            color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
            type: Math.floor(Math.random() * 3),
            speed: Math.random() * 1 + 0.2
        }));
    }, []);

    return (
        <>
            {/* Sparkles provide the "Magic/Bloom" feeling without the post-processing overhead */}
            <Sparkles count={50} scale={12} size={4} speed={0.4} opacity={0.5} color="#FDE68A" />
            {particles.map((p, i) => (
                <CinematicParticle key={i} {...p} />
            ))}
        </>
    );
};

const Hero3DElement = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-80" style={{ pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 35 }} dpr={[1, 2]} gl={{ antialias: true }}>
                {/* Studio Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} color="#fff" />
                <pointLight position={[-10, -5, -5]} intensity={1} color="#F97316" />
                <pointLight position={[5, 10, -10]} intensity={1.5} color="#3B82F6" />

                <CinematicScene />
            </Canvas>
        </div>
    );
};

export default Hero3DElement;
