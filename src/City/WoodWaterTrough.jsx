import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { useBox } from "@react-three/cannon";

const WoodWaterTrough = () => {
  const ref = useRef();
  const glt = useGLTF("./models/WoodWaterTrough.glb");
  const args = [1, 2, 2];
  useBox(() => ({ args, position: [-45, 0.2, -57.5] }), useRef());

  return (
    <group ref={ref} dispose={null} position={[-45, 0.2, -57.5]} rotation-y={0}>
      <group name="Scene">
        <primitive object={glt.scene} scale={0.5} />
      </group>
    </group>
  );
};

export default WoodWaterTrough;
