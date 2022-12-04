import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  
} from "react-icons/ai";

import {BsInstagram} from 'react-icons/bs'
import {WiMoonAltWaxingCrescent3} from "react-icons/wi"
import { useState } from "react";
import hehua from "../public/hehua.png"
import me from "../public/me.png"




import Image from "next/image";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
   
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Welcome</h1>
            <ul className="flex items-center">
              <li>
                <WiMoonAltWaxingCrescent3
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
 
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ando Deng
            </h2>
          
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <div id="middle_heading">  
            <a href="https://github.com/AD1938">
              <AiFillGithub icon={AiFillGithub} />      
            </a>    
           </div>

           <div id="middle_heading">  
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=anduodeng@gmail.com">
              <AiOutlineMail icon={AiFillGithub} />      
            </a>    
           </div>
        
           <div id="middle_heading">  
            <a href="https://www.linkedin.com/in/ando-deng-b18a06204/?originalSubdomain=ca">
              <AiFillLinkedin icon={AiFillGithub} />      
            </a>    
           </div>

           <div id="middle_heading">  
            <a href="https://www.instagram.com/ando.deng.5/">
              <BsInstagram icon={BsInstagram} />      
            </a>    
           </div>

        
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
