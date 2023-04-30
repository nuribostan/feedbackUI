import React from 'react'
import { useParams, useNavigate, Routes,Route } from 'react-router-dom'

function About() {
    const navigate = useNavigate()

    const clickButton = () => {
       navigate('//show')
    }

  return (
    <div>

        <button onClick={clickButton}>Click</button>

        <Routes>
            <Route path="/show" element={<h1>Hello Guys</h1>} />
        </Routes>

    </div>
  )
}

export default About