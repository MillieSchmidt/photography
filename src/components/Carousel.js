import React, { Suspense } from 'react';
import { lazy } from 'react';

const Carousel = () => {
    const Photo = lazy(() => import('./Photo'));

    return(
        <div className='carousel' id='carousel'>
            <div className='photo-background'>
                <Suspense fallback={<div>רק רגע...</div>}>
                    <Photo />
                </Suspense>
            </div>
        </div>
    )
}

export default Carousel;