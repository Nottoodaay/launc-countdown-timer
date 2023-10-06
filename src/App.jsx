import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeRemaining, setTimeRemaining] = useState('')
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
        
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setDaysRemaining(`${days}d`)
        setHoursRemaining(`${hours}h`)
        setMinutesRemaining(`${minutes}m`)
        setSecondsRemaining(`${seconds}s`)
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <> 
    <h1 className='header'>
      We're Launching Soon
    </h1>
    <div className='time-container'>
      {daysRemaining}
      {hoursRemaining}
      {minutesRemaining}
      {secondsRemaining}
    </div>
     
    </>
  )
}

export default App
