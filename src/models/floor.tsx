export function Floor(props: JSX.IntrinsicElements['mesh']) {
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2} {...props}>
      <planeGeometry args={[50, 50]} />
      <meshPhongMaterial />
    </mesh>
  )
}
