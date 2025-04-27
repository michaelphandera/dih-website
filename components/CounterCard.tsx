"use client"

import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface CounterCardProps {
  icon: string;
  count: number;
  text: string;
  style?: 'style1' | 'style2' | 'style3' | 'style4';
}

const CounterCard: React.FC<CounterCardProps> = ({
  icon,
  count,
  text,
  style = 'style1'
}) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`counter-card ${style}`}
      ref={counterRef}
      data-aos="fade-up"
    >
      <div className="counter-icon">
        <i className={icon} style={{ fontSize: '24px' }}></i>
      </div>
      <div className="counter-text">
        <h2 className="counter-num">
          {isVisible && <CountUp end={count} duration={2.5} />}
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CounterCard;