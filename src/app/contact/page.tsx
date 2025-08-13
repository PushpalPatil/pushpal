"use client";

import { Toaster, toast } from "react-hot-toast";
import Header from "../components/header";

export default function Contact() {

      return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                  <Header />
                  
                  <Toaster position="top-center" toastOptions={{
                        duration: 2000,
                        style: {
                              background: '#000',
                              color: '#fff',
                              border: '0.5px solid #fff',
                        },
                        className: 'text-sm font-mono border border-white mt-60',
                  }} />

                  <div className="flex flex-col gap-2 font-mono">
                        <h1
                              className="cursor-pointer hover:text-gray-500 transition-colors duration-200 select-all"
                              onClick={() => {
                                    navigator.clipboard.writeText('pushpalp831@gmail.com');
                                    toast('Email copied to clipboard');
                              }}
                              title="Click to copy email"
                        >
                              pushpalp831@gmail.com
                        </h1>
                        <h1 className="text-sm"> <a href="https://www.linkedin.com/in/pushpalpatil/" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
                        <h1 className="text-sm"> <a href="https://github.com/pushpalpatil" className="hover:underline" target="_blank" rel="noopener noreferrer">Github</a></h1>
                        <h1 className="text-sm"> <a href="https://twitter.com/pushpal_p" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></h1>

                  </div>
            </div>
      )
}

