import React, { useRef } from 'react'
import Button from '../components/Button'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollToPlugin);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    // const sectionRef = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current];
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: {trigger: card, start: 'top bottom-=100'} }
            )
        })
    }, [])
  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* left side */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project-1.png" alt="Cv Builder" />
                    </div>
                    <div className="text-content">
                        <h2>Create Stunning Resumes in Minutes with a Sleek, Easy-to-Use Web App called CV Builder</h2>
                        <p className="text-white-50 md:text-xl">Built with Next.js, Tailwind CSS, Gemini AI, jsPDF, and Lucide React for a fast, user-friendly resume building experience.</p>
                        <Button
                            className='md:w-80 md:h-16 w-60 h-12 mt-6'
                            text='Visit App'
                            href='https://www.cvbuilder.cloud/'
                            newTab={true}
                        />
                    </div>
                </div>
                {/* right side */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#fdfef4]'>
                            <img src="/images/project-2.png" alt="Spendless Expense Tracker" />
                        </div>
                        <div className="text-content">
                        <h2>Spendless - Expense Tracker Application</h2>
                        <p className="text-white-50 md:text-xl mb-5">Spendless is a fast, responsive expense tracker built with Next.js, helping users manage and visualize their daily spending with ease.</p>
                        <Button
                            className='md:w-80 md:h-16 w-60 h-12 mt-6'
                            text='Visit App'
                            href='https://spendless-pearl.vercel.app/'
                            newTab={true}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection