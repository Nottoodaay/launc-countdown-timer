import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [daysRemaining, setDaysRemaining] = useState('')
  const [hoursRemaining, setHoursRemaining] = useState('')
  const [minutesRemaining, setMinutesRemaining] = useState('')
  const [secondsRemaining, setSecondsRemaining] = useState('')

  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 14 )

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = launchDate - currentTime;
      
      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining('Launched!');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        setDaysRemaining(`${days}`)
        setHoursRemaining(`${hours}`)
        setMinutesRemaining(`${minutes}`)
        setSecondsRemaining(`${seconds}`)
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='body'>
      <div className='app-container'> 
        <h1 className='header'>
          We're Launching Soon
        </h1>

        <div className='time-container'>

          <div className='time-text-container'>
            <div className='time'>
              <hr />
              <span className='time-numbers'>
                {daysRemaining}
              </span>
              <img src='../assets/oval copy.png' alt="" className='left-oval'/>
              <img src="../assets/oval.png" alt="" className='right-oval' />
            </div>
            <p className='exact-time'>DAYS</p>
          </div>

          <div className='time-text-container'>
            <div className='time'>
              <hr />
              <span className='time-numbers'>
                {hoursRemaining}
              </span>
              <img src='../assets/oval copy.png' alt="" className='left-oval'/>
              <img src="../assets/oval.png" alt="" className='right-oval' />
            </div>
            <p className='exact-time'>HOURS</p>
          </div>

          <div className='time-text-container'>
            <div className='time'>
              <hr />
              <span className='time-numbers'>
                {minutesRemaining}
              </span>
              <img src='../assets/oval copy.png' alt="" className='left-oval'/>
              <img src="../assets/oval.png" alt="" className='right-oval' />
            </div>
            <p className='exact-time'>MINUTES</p>
          </div>

          <div className='time-text-container'>
            <div className='time'>
              <hr />
              <span className='time-numbers'>
                {secondsRemaining}
              </span>
              <img src='../assets/oval copy.png' alt="" className='left-oval'/>
              <img src="../assets/oval.png" alt="" className='right-oval' />
            </div>
            <p className='exact-time'>SECONDS</p>
          </div>
        </div>
        
      </div>
      
      <div className='footer'>
          <FontAwesomeIcon icon={faFacebook} className='icon' />
          <FontAwesomeIcon icon={faInstagram} className='icon' />
          <FontAwesomeIcon icon={faPinterest} className='icon'/>
      </div>
   
    </div>
  )
}

export default App
