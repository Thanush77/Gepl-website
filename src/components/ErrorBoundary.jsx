// components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <FallbackSphere />;
    }
    return this.props.children;
  }
}

// FallbackSphere component
function FallbackSphere() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#64ffda"
        emissive="#64ffda"
        emissiveIntensity={0.2}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}
