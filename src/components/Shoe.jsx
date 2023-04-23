/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shoe.gltf --transform
Author: Nevena Knežević (https://sketchfab.com/gavez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/brothers-shoe-4268eb4870a045478cce51461f31a413
Title: Brothers shoe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.85, 0.45, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group position={[-2.06, -8.31, -0.53]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shoe-transformed.glb')