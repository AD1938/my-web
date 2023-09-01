import me from "../public/me.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} font-sans`}>
      <main className="bg-white dark:bg-gray-900 px-10 py-20 md:px-20 lg:px-40">
        <section>
          <nav className="mb-12 flex justify-between items-center dark:text-white">
            <h1 className="text-3xl font-extrabold tracking-wide">Welcome</h1>
            <WiMoonAltWaxingCrescent3
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-3xl"
            />
          </nav>
          <div className="text-center space-y-12">
            <h2 className="text-6xl text-gray-800 dark:text-gray-100 font-extrabold">
              Ando Deng
            </h2>
            <div className="space-y-4">
              <div className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-full">
                <h3 className="text-2xl text-gray-700 dark:text-gray-300">
                  Education: Pure Mathematics / Combinatorics and Optimization@
                  UWaterloo
                </h3>
              </div>
              <div className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-full">
                <h3 className="text-2xl text-gray-700 dark:text-gray-300">
                  Experience:
                  <ul className="list-disc list-inside">
                    <li>Software Developer @ Cynorix Inc</li>
                    <li>Software Developer @ Luci AI Inc</li>
                  </ul>
                </h3>
              </div>
            </div>
            <h3 className="text-4xl text-gray-800 dark:text-gray-100 font-semibold">
              Get in touch
            </h3>
            <div className="text-5xl flex justify-center space-x-12 my-8">
              <a
                href="https://github.com/AD1938"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:anduodeng@gmail.com"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
              >
                <AiOutlineMail />
              </a>
              <a
                href="https://www.linkedin.com/in/ando-deng-b18a06204/?originalSubdomain=ca"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ando.deng.5/"
                className="hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="relative w-80 h-80 mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden mt-10 md:w-96 md:h-96">
              <Image src={me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
