import { motion } from 'motion/react'
import './Hero.css'

function Hero() {
  const scrollToCollection = () => {
    const collectionSection = document.querySelector('.collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>Redefine Your Style</h1>
        <p>A curated collection of modern essentials for the conscious individual.</p>
        <button onClick={scrollToCollection}>Shop The Collection</button>
      </motion.div>
    </section>
  )
}

export default Hero
