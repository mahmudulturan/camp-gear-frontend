import React, { FC, useRef, useState } from 'react';
import image from '../../../../assets/mock-item-images/product14.1.webp';

const ProductImage: FC = () => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifiedArea, setMagnifiedArea] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);
    const magnifierRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!imageRef.current || !magnifierRef.current) return;

        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const magnifierSize = magnifierRef.current.offsetWidth;

        let x = e.pageX - left - magnifierSize / 2;
        let y = e.pageY - top - magnifierSize / 2;

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > width - magnifierSize) x = width - magnifierSize;
        if (y > height - magnifierSize) y = height - magnifierSize;

        setMagnifiedArea({ x, y });
    };

    return (
        <div className='relative group'>
            <img
                onMouseEnter={() => setShowMagnifier(true)}
                onMouseLeave={() => setShowMagnifier(false)}
                ref={imageRef}
                src={image}
                alt=""
                className='max-h-[500px]'
                onMouseMove={handleMouseMove}
            />
            <div
                hidden={!showMagnifier}
                ref={magnifierRef}
                className='group-hover:border border-gray-400'
                style={{
                    position: 'absolute',
                    left: `${magnifiedArea.x}px`,
                    top: `${magnifiedArea.y}px`,
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'white',
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `-${magnifiedArea.x * 2}px -${magnifiedArea.y * 2}px`,
                    backgroundSize: `${imageRef.current?.width ? imageRef.current.width * 2 : 1000}px auto`,
                    pointerEvents: 'none',
                }}
            />
            <div className='hidden md:block'>
                <div
                    hidden={!showMagnifier}
                    className='max-w-[300px] lg:max-w-[400px] w-full max-h-[500px] h-full overflow-hidden absolute -right-6 top-0 translate-x-full z-10'>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${image})`,
                            backgroundPosition: `-${magnifiedArea.x * 3}px -${magnifiedArea.y * 3}px`,
                            backgroundSize: `${imageRef.current?.width ? imageRef.current.width * 3 : 1500}px auto`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductImage;