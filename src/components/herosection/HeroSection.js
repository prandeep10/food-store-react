import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './HeroSection.css'; // Assuming you have a CSS file for styling

const HeroSection = () => {
  const products = [
    {
      name: 'Mango Pickle',
      text: 'Delicious and tangy mango pickle',
      image: '/mango.webp',
      backgroundColor: 'linear-gradient(45deg,var(--sinopia), #FFE66D, #8BC34A)',
    },
    {
      name: 'Tasty Lemon Pickle',
      text: 'Tangy lemon pickle for your taste buds',
      image: '/garlic.webp',
      backgroundColor: 'linear-gradient(45deg, #8A2BE2)',
    },
    {
      name: 'Fried Mango Pickle',
      text: 'Delicious and tangy mango pickle',
      image: '/lemon.webp',
      backgroundColor: 'linear-gradient(45deg, #98F8ED, #8BC34A)',
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextProductIndex = (currentProductIndex + 1) % products.length;
      setCurrentProductIndex(nextProductIndex);

      // Trigger motion effects for image and text every time they change
      imageControls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 }
      });

      textControls.start({
        opacity: [0, 1],
        transition: { duration: 0.5 }
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentProductIndex, imageControls, textControls, products.length]);

  const currentProduct = products[currentProductIndex];

  return (
    <motion.div className="hero-section" style={{ background: currentProduct.backgroundColor }}>
      <div className="hero-content">
        <motion.div className="product-info" initial={{ opacity: 0 }} animate={textControls}>
          <motion.h1 className="product-name" initial={{ y: -50 }} animate={{ y: 0 }}>{currentProduct.name}</motion.h1>
          <motion.p className="product-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{currentProduct.text}</motion.p>
          <button className='button-75'> Shop Now</button>
        </motion.div>
        <motion.div className="product-image" initial={{ scale: 0 }} animate={imageControls}>
          <img src={currentProduct.image} alt={currentProduct.name} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
