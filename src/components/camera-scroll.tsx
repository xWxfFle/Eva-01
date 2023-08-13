import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type Props = {
  children: React.ReactNode;
};

export function ScrollContainer(props: Props) {
  const scroll = useScroll();
  useFrame((state) => {
    const offset = 1 - scroll.offset;
    state.camera.position.set(
      Math.cos(offset * Math.PI) * 5 - 1,
      Math.atan(offset * Math.PI * 5) * -2.7 + 2,
      Math.sin(offset * Math.PI * 3) * 5 + 2
    );
    state.camera.lookAt(offset * 1.5 - 0.6, -offset * 1.9, offset * 1.5 - 0.4);
  });
  return <group>{props.children}</group>;
}
