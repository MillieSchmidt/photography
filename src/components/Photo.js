import React, { useEffect, useState, useRef } from "react";
import { PHOTOS } from '../assets/photos';

const Photo = () => {
    const [currentIndex, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 7000;

    function resetTimeout() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIndex(currentIndex === PHOTOS.length - 1 ? 0 : currentIndex + 1)
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const photo = PHOTOS.filter((p) => p.id === currentIndex).map((p) => {
        return(
            <div key={p.id} className={p.id === currentIndex ? 'photo-container active' : 'photo-container'}>
                <img src={p.src} alt={p.alt} />
            </div>
        )
    })

    return(
        <div>{photo}</div>
    )
}

export default Photo;