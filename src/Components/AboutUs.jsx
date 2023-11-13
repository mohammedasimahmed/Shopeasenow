import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const people = [
  {
    name: "Shishiro",
    role: "Member 1",
    imageUrl: "https://api.dicebear.com/5.x/initials/svg?seed=shishiro",
  },
  {
    name: "Asim",
    role: "Member 2",
    imageUrl: "https://api.dicebear.com/5.x/initials/svg?seed=asim",
  },
  {
    name: "Nimesh",
    role: "Member 3",
    imageUrl: "https://api.dicebear.com/5.x/initials/svg?seed=nimesh",
  },
];
const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="flex flex-row" id="about-link">
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
        <div className="relative isolate px-6 pt-14 lg:px-8 w-[100%]  ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto grid max-w-[100%] gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 justify-between">
              <motion.div
                ref={ref}
                initial={{ x: "-20%" }}
                animate={isInView ? { x: 0 } : { x: "-20%" }}
                transition={{ duration: 0.45, delay: 0.4, ease: "easeInOut" }}
                className=" text-gray-500  rounded-lg  "
              >
                <div className="max-w-[100%]">
                  <span className="text-4xl font-extrabold text-gray-600 mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[#51D6FF]">
                    <Typewriter
                      words={["Shop Smile Repeat", "Shop smart , live smart"]}
                      loop={10000}
                      cursor
                      cursorStyle="_"
                      typeSpeed={90}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                  <br />
                  <h2 className="text-3xl font-bold tracking-tight leading-none text-[white] sm:text-4xl ">
                    The{" "}
                    <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                      ultimate
                    </span>{" "}
                    shopping <span>destination</span>
                  </h2>
                  <p className="mt-6  leading-8  mb-6 text-lg font-normal text-gray-500">
                    Welcome to ShopEaseNow, where convenience meets
                    style. We bring the world of fashion and lifestyle to your
                    fingertips. Explore a curated collection of trending
                    products, shop with ease, and experience a world of
                    effortless elegance. Discover the future of shopping with us
                  </p>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ x: "20%" }}
                animate={isInView ? { x: 0 } : { x: "20%" }}
                transition={{ duration: 0.45, delay: 0.4, ease: "easeInOut" }}
                className=" text-gray-500 p-8 rounded-lg grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2"
              >
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-1 md:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center justify-center gap-x-6">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-100">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold leading-6 text-indigo-600">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
