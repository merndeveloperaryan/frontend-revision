import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Gsap = () => {

    const tl = gsap.timeline();

    const boxRef = useRef(null);
    const circleRef = useRef(null);

    useGSAP(() => {
        tl.to(circleRef.current, {
            x: 600,
            duration: 1,
            delay: 2,
            rotate: 250,
            backgroundColor: 'red',
        })

        tl.to(boxRef.current, {
            x: 1200,
            duration: 1,
            borderRadius: '50%',
        })

    })



    return (
        <div className='w-full h-screen bg-zinc-200 flex justify-center items-start flex-col gap-2'>
            <div ref={circleRef} className='w-32 h-32 rounded-lg border border-red-300 bg-teal-400'></div>
            <div ref={boxRef} className='w-32 h-32 rounded-lg border border-red-300 bg-teal-400'></div>
            <button onClick={() => tl.reverse()} className='border p-4 my-10 bg-red-100'>reverse the animation</button>
        </div>
    )
}

export default Gsap