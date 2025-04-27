import { useEffect } from 'react';

const useTheme = () => {
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

  return { toggleTheme };
};

export default useTheme;