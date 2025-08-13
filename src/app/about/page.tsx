import Header from "../components/header";

export default function About() {
      return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 ">
                  <Header />
                  <div className="flex flex-row gap-4 items-center">
                        <img
                              src="/Frame 3.svg"
                              alt="Frame 3"
                              className="h-150 w-auto animate-sway will-change-transform"
                              style={{
                                    animation: 'sway 5s ease-in-out infinite'
                              }}
                        />
                        
                  <div className="flex flex-col gap-2 font-mono text-sm">
                        <h1> Hey! </h1>
                        <h1> Thanks for visiting my website :&#125; </h1>
                        <br />
                        <p className="text-sm">
                              I'm Pushpal, and I love building cool things.
                              <br />
                              <br />
                              What's "cool" what's "good" you may ask. Well. I'm figuring it out myself.
                              
                              
                        </p>
                        <br />
                        <p className="text-sm">
                              I'm a quick learner & I'm always looking to improve my skills.
                              <br />
                              <br />
                              I am currently working on a project called <a href="https://watashi-topaz.vercel.app/" className="underline" target="_blank" rel="noopener noreferrer">WATASHI</a> - a webapp that allows you to talk to your planets XD
                        </p>

                        <br />
                        <p className="text-sm">
                              Have feedback? <a href="/contact" className="hover:no-underline underline">Let me know</a>.
                        </p>
                        </div>
                  </div>

            </div>
      )
}
