'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn,zoomIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import Image from 'next/image';

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once: false, amount: 0.25}}
     className={`${styles.innerWidth} mx-auto  
    flex lg:flex-row flex-col gap-6`}>
      <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[370px] flex
      justify-end flex-col gradient-05 sm:p-8 p-4
      rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px]
          sm:leading-[40px] leading-[36px] text-white">
            Adfer Aijaz
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px]
          sm:leading-[22px] leading-[16px] text-white">
            Founder | Koshur Safar
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the wide range of availale destinations nowdays, we ensure the best
          destinations for our clients, we ensure that they have the best holidays ever.
        </p>
      </motion.div>
      <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
      >
        <div className="relative w-full lg:h-[610px] min-h-[210px] rounded-[40px] overflow-hidden">
          <Image
            src="/founder/adfer.png"
            alt="planet-09"
            fill
            className="object-cover"
            priority // Add for above-the-fold LCP-critical images
          />
        </div>
        <motion.div
        variants={zoomIn(0.4, 1)}
        className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/stamp.png"
            alt="stamp"
            width={155}
            height={155}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
    </section>
  )
}

export default Feedback