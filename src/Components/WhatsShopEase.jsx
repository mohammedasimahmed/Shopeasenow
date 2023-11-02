import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function WhatsShopEase() {
  return (
    <div className="flex flex-row" id="home-link">
      <div className="relative isolate px-6 lg:px-8 w-[100%]">
        <div
          className="absolute inset-x-0 -top-40 -z-88 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
        <div className="mx-auto mt-[-80px] max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center px-3">
            <h className="text-6xl text-[#51D6FF] font-bold tracking-tight sm:text-6xl">
              ShopEaseNow:
              <br />
              <span className="text-3xl font-bold tracking-tight text-gray-100 ">
                Explore Tailored Products and Services Just for You!
              </span>
            </h>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover a world of endless possibilities at ShopEaseNow, where
              shopping meets seamless services. Explore our curated selection of
              high-quality products and unlock a spectrum of essential services,
              all in one place. You got expert services of your convenience at
              your fingertips. Experience the future of online shopping and
              service solutions with us.
              <br />
              {/* Lets see the  */}
              <span className="mt-6 text-lg leading-8 text-gray-600 tracking-tight md:text-lg lg:text-lg dark:text-[#51D6FF]">
                <Typewriter
                  words={["Shop smart, shop with confidence.", "Browse, choose, experience excellence", "Navigate the art of modern shopping"]}
                  loop={10000}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <NavLink
                  to="/browse"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </NavLink>
                <NavLink
                  to="/"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  onClick={() => {
                    const anchor = document.querySelector("#about-link");
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  Learn more
                </NavLink>
              </div>
            </div>
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
    </div>
  );
}
