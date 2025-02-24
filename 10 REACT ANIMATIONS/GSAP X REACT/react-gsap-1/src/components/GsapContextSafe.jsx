import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const GsapContextSafe = () => {

    const [moveMouse, setMoveMouse] = useState(0);

    const randomX1 = gsap.utils.random(-500, 500, 100);
    const randomy1 = gsap.utils.random(-250, 250, 100);
    const randomX2 = gsap.utils.random(-500, 500, 100);
    const randomy2 = gsap.utils.random(-250, 250, 100);
    const randomX3 = gsap.utils.random(-500, 500, 100);
    const randomy3 = gsap.utils.random(-250, 250, 100);
    const ball1Ref = useRef(null);
    const ball2Ref = useRef(null);
    const ball3Ref = useRef(null);

    useGSAP(() => {
        gsap.to(ball1Ref.current, {
            x: randomX1,
            y: randomy1,
            duration: .5,
            
        })
    }, [moveMouse])
    useGSAP(() => {
        gsap.to(ball2Ref.current, {
            x: randomX2,
            y: randomy2,
            duration: .5,
            
        })
    }, [moveMouse])
    useGSAP(() => {
        gsap.to(ball3Ref.current, {
            x: randomX3,
            y: randomy3,
            duration: .5,
            
        })
    }, [moveMouse])
    

    const catchBall = (e) => {
        setMoveMouse(e.clientX);
    }





    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div
            onMouseEnter={catchBall}
            ref={ball2Ref}
            style={{
                width: "40px",
                height: "40px",
                backgroundImage: "radial-gradient(circle, #fff, blue)"
            }} className='w-10 h-10 rounded-full'></div>
            <div
            onMouseEnter={catchBall}
            ref={ball1Ref}
            style={{
                width: "40px",
                height: "40px",
                backgroundImage: "radial-gradient(circle, #fff, red)"
            }} className='w-10 h-10 rounded-full'></div>
            <div
            onMouseEnter={catchBall}
            ref={ball3Ref}
            style={{
                width: "40px",
                height: "40px",
                backgroundImage: "radial-gradient(circle, #fff, green)"
            }} className='w-10 h-10 rounded-full'></div>
        </div>
    )
}

export default GsapContextSafe