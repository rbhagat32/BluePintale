import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const InfiniteSlider = ({ images }: { images: string[] }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: { duration: 100, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="mt-20 py-20 bg-zinc-100">
      <div className="md:mx-6 lg:mx-12 flex overflow-x-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div key={i} animate={controls} className="flex flex-shrink-0">
            {images.map((image, index) => (
              <div
                className="h-100 w-80 mr-5 rounded-xl overflow-hidden hover:brightness-70 transition-all duration-300"
                key={`${i}-${index}`}
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() =>
                  controls.start({
                    x: "-100%",
                    transition: {
                      duration: 100,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  })
                }
              >
                <img
                  className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
                  src={image}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
