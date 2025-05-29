import React, { useEffect, useState } from 'react';
import './DealBanner.css';
import dealBanner from "../assets/images/dealbanner.jpg";

const DealBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 435,
    hours: 3,
    minutes: 49,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="deal-banner text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${dealBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        position: 'relative',
      }}
    >
      <div className="container text-start">
        <h2 className="fw-bold">Deal of the day!</h2>
        <p className="mb-4">We offer a hot deal offer every festival</p>

        <div className="d-flex gap-3 mb-4">
          <div className="time-box bg-warning text-dark p-2 text-center rounded">
            <div className="fw-bold fs-5">{timeLeft.days}</div>
            <div className="small">DAYS</div>
          </div>
          <div className="time-box bg-warning text-dark p-2 text-center rounded">
            <div className="fw-bold fs-5">{timeLeft.hours}</div>
            <div className="small">HOURS</div>
          </div>
          <div className="time-box bg-warning text-dark p-2 text-center rounded">
            <div className="fw-bold fs-5">{timeLeft.minutes}</div>
            <div className="small">MINUTES</div>
          </div>
          <div className="time-box bg-warning text-dark p-2 text-center rounded">
            <div className="fw-bold fs-5">{timeLeft.seconds}</div>
            <div className="small">SECONDS</div>
          </div>
        </div>

        <button className="btn btn-warning fw-bold rounded-pill px-4 ">Shop collection</button>
      </div>
    </div>
  );
};

export default DealBanner;
