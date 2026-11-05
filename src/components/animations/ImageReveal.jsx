
import {
  motion,
  useReducedMotion,
} from "motion/react";

function ImageReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`tm-image-reveal ${className}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, clipPath: "inset(0 0 12% 0)" }
      }
      whileInView={{
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
      }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={imageClassName}
        loading="lazy"
        initial={reduceMotion ? false : { scale: 1.07 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: reduceMotion ? 0 : 1.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  );
}

export default ImageReveal;
