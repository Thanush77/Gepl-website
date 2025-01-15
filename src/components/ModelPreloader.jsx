// ModelPreloader.jsx
import { useGLTF } from '@react-three/drei';

export function ModelPreloader() {
  useGLTF.preload('../assets/scene.gltf');
  return null;
}
