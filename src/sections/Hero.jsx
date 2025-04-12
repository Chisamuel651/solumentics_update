import Button from "../components/Button"
import { words } from "../constants"
import HeroExperience from "../components/HeroModels/HeroExperience"

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/* left side */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            Shaping  
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span className="flex items-center md:gap-3 gap-1 pb-2" key={word.text}>
                                            <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />

                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into High-Impact</h1>
                        <h1>Digital Solutions</h1>
                    </div>

                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                    Hi, we&apos;re Solumentics a creative digital agency building custom websites, <br /> web & mobile apps, SEO strategies, WordPress solutions <br /> and high-impact Google Ads campaigns.
                    </p>

                    <Button
                        className='md:w-80 md:h-16 w-60 h-12'
                        id='button'
                        text='See Our Work'
                    />
                </div>
            </header>

            {/* right side */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero