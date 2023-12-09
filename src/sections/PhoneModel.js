import React, { Suspense } from 'react'
import styled from 'styled-components'
import {Canvas} from "@react-three/fiber"
import {  AdaptiveDpr, AdaptiveEvents, Environment, OrbitControls } from "@react-three/drei"
import Model  from "../components/Scene"


const Container = styled.div`
    width:100vw;
    height:100vh;


    position:fixed;
    top:0;
    z-index:1;
    background-color:transparent;
    transition:all 0.3s ease;

`

const PhoneModel = () => {
  return (
    <Container id='phone-model'>
      <Canvas  camera={{fov:14}} >
        <ambientLight intensity={1.25} />
        <directionalLight position={0.4} />
          <Suspense fallback={null}>

          {/* <Environment preset='night'  />  */}
          <Model />
          </Suspense>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />


        
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  )
}

export default PhoneModel


