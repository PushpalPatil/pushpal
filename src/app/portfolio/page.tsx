import Header from "../components/header";


export default function Portfolio() {
      return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                  <Header />


                  <div className="flex flex-row sm:flex-row gap-6 sm:gap-10">
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 border border-white cursor-pointer hover:bg-white/5  bg-white/5  sm:bg-transparent transition-colors duration-200 flex items-center justify-center group">
                              <img
                                    src="/Frame 3.svg"
                                    alt="Frame 3"
                                    className="absolute inset-0 w-full h-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 -z-10"
                              />
                              <span className="text-white text-xs sm:text-sm font-mono">Tic Tac Toe</span>
                        </div>
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 border border-white cursor-pointer hover:bg-white/5  bg-white/5  sm:bg-transparent transition-colors duration-200 flex items-center justify-center group">
                              <img
                                    src="/Frame 3.svg"
                                    alt="Frame 3"
                                    className="absolute inset-0 w-full h-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 -z-10"
                              />
                              <a
                                    href="https://watashi-topaz.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-xs sm:text-sm font-mono hover:text-gray-300 transition-colors duration-200"
                              >
                                    WATASHI
                              </a>
                        </div>
                  </div>
            </div>
      )
}
