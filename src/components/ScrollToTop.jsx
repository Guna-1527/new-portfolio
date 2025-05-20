import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 bg-black text-white rounded-full p-2 cursor-pointer transition z-50'
        aria-label="Scroll to top"
      >
        <ChevronUp />
      </button>
    )
  );
};

export default ScrollToTop;
