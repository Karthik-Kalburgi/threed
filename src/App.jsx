
import {useState,Suspense} from 'react'

import './App.css'

import {Canvas} from  '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Earth from '../public/Earth'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Canvas>
    <ambientLight>
      
    </ambientLight>
    <OrbitControls>

    </OrbitControls>

    <Suspense fallback={null } 
     >
  <Earth>
    
  </Earth>
      
      
        

     
    </Suspense>
   </Canvas>
   </>
  )
}

export default App
