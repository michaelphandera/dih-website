"use client";

import React, { useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const toggleTheme = (): void => {
    const html = document.documentElement;
    if (html.getAttribute('data-theme')) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const slider = document.getElementById('slider') as HTMLInputElement;
    
    if (savedTheme === 'dark' && slider) {
      document.documentElement.setAttribute('data-theme', 'dark');
      slider.checked = true;
    }
  }, []);

  return (
    <div className="switch-theme-mode">
      <label id="switch" className="switch">
        <input 
          type="checkbox" 
          onChange={toggleTheme} 
          id="slider" 
          aria-label="Toggle dark mode"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;