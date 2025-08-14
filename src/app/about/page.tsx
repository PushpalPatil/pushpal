import Header from "../components/header";

export default function About() {
      return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:gap-16 sm:p-20">
                  <Header />
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <img
                              src="/Frame 3.svg"
                              alt="Frame 3"
                              className="h-55 w-auto sm:h-150"
                        />

                        <div className="flex flex-col gap-2 font-mono text-xs sm:text-sm text-left sm:text-left mt-2">
                              <h1 className="text-lg sm:text-xl"> Hey! </h1>
                              <h1 className="text-lg sm:text-xl"> Thanks for visiting my website :&#125; </h1>
                              <br />
                              <br />
                              <p className="text-xs sm:text-sm">
                                    I&apos;m Pushpal, and I love building cool things.
                                    <br />
                                    <br />
                                    What&apos;s &quot;cool&quot; what&apos;s &quot;good&quot; you may ask. Well. I&apos;m figuring it out myself.
                                    <br />
                                   
                                    I&apos;m a quick learner & always looking to improve my skills.
                                    <br />
                                    <br />
                                    Right now, I&apos;m working on a project called <a href="https://watashi-topaz.vercel.app/" className="underline" target="_blank" rel="noopener noreferrer">WATASHI</a>
                                    <br/> - a webapp that allows you to talk to your planets :)
                              </p>
 
                              <br />
                              <br />
                              <p className="text-xs sm:text-sm">
                                    Have feedback? <a href="/contact" className="hover:no-underline underline">Let me know</a>.
                              </p>
                        </div>
                  </div>

            </div>
      )
}
