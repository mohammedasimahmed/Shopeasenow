import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const features = [
  {
    name: "Explore Catalog",
    description:
    "Discover a world of options. Our diverse catalog offers a wide range of products to suit your needs and desires!",
  },
  {
    name: "Explore Services",
    description:
      "Dive into our service selection. From convenience to expertise, we have you covered. Explore the possibilities today!",
  },
  {
    name: "Easy Browsing",
    description:
      "Simplify your shopping experience with easy browsing. Navigate our offerings effortlessly, find what you need, and shop stress-free!",
  },
  {
    name: "User Privacy",
    description:
      "We prioritize the security of your data and personal information. Your identity and privacy are always protected.",
  },
];

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="w-full">
      <div className="bg-white py-24 sm:py-32 w-full" id="feature-link">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {" "}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Shop ShopEaseNow
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experience
                <span className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ml-2">
                  Quality
                </span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover unbeatable value and exceptional quality! Explore our
                curated selection of products and services to elevate your
                shopping experience. Shop now to enjoy the best in class
              </p>
            </div>
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate="visible"
            >
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
