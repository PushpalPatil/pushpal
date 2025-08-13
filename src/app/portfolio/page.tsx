import Header from "../components/header";


export default function Portfolio() {
      return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                  <Header />


                  <div className="flex flex-row gap-10">
                        <div className="relative w-40 h-40 border border-white cursor-pointer hover:bg-white/5 transition-colors duration-200 flex items-center justify-center group">
                              <img
                                    src="/Frame 3.svg"
                                    alt="Frame 3"
                                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                              />
                              <span className="text-white text-sm font-mono">Tic Tac Toe</span>
                        </div>
                        <div className="relative w-40 h-40 border border-white cursor-pointer hover:bg-white/5 transition-colors duration-200 flex items-center justify-center group">
                              <img
                                    src="/Frame 3.svg"
                                    alt="Frame 3"
                                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                              />
                              <span className="text-white text-sm font-mono"> WATASHI </span>
                        </div>
                  </div>
            </div>
      )
}
