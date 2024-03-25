import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import './App.css'

function App() {
  const fireworksRef = useRef(null)
  return (
    <div className="container">
      <div className="fireworks-area">
        <Fireworks
          ref={fireworksRef}
          options={{
            opacity: 0.7,
            particles: 200,
            explosion: 7,
            intensity: 70,
          }}
        />
      </div>

      <div className="content">
        <h1 className="title">Happy Lunar New Year 2024!
          <div className="animate-color">
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
          </div>
        </h1>
        {/* <div className="author">
          <a href="" target="_blank" alt="Trung Tran">
            <i className="bx bxl-youtube bx-sm"></i>
            Trung ran
          </a>
        </div> */}
        {/* Nếu muốn custom nâng cao thì sử dụng ref như ví dụ dưới đây mình làm nút Restart nhé */}
        {/* <button onClick={() => fireworksRef?.current?.clear()}>Restart</button> */}
      </div>
    </div>
  )
}

export default App
