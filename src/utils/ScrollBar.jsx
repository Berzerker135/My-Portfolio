import React, { useEffect , useState } from 'react'
import './ScrollBar.scss'

const ScrollBar = () => {

    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        const onscroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollTop = document.documentElement.scrollTop
            const scrollPercent = (scrollTop / totalHeight) * 100
            setScrollTop(scrollPercent)
        }

        window.addEventListener('scroll', onscroll)
        return () => window.removeEventListener('scroll', onscroll)
    }, [])

    return (
        <div className='progress-scroll-container'>
            <div className='progress-bar-scroll' style={{ height: `${scrollTop}%` }}></div>
        </div>
    )
}

export default ScrollBar