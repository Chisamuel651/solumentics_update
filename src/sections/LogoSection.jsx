import React from 'react'
import { logoIconsLists } from '../constants'

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge' />
        <div className='gradient-edge' />

        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
            {[...Array(3)].map((_, groupIndex) => (
                logoIconsLists.map((icon, iconIndex) => (
                    <LogoIcon key={`${icon.name}-${groupIndex}-${iconIndex}`} icon={icon} />
                ))
            ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection