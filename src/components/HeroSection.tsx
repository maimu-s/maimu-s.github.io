import { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import logoHero from '../assets/images/logo/logo.png?format=webp&quality=80&w=600';
// キービジュアル: モバイル用(600px)とデスクトップ用(1200px)
import keyVisualMobile from '../assets/images/hero/maimu-keyvisual.png?format=webp&quality=80&w=600';
import keyVisualDesktop from '../assets/images/hero/maimu-keyvisual.png?format=webp&quality=80&w=1200';
// 背景画像: モバイル用(800px)とデスクトップ用(1920px)
import backgroundMobile from '../assets/images/hero/background.png?format=webp&quality=75&w=800';
import backgroundDesktop from '../assets/images/hero/background.png?format=webp&quality=75&w=1920';

interface TiltState {
    x: number;
    y: number;
}

function HeroSection() {
    const scrollIndicatorRef = useRef<HTMLButtonElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            if (scrollIndicatorRef.current) {
                const opacity = 1 - window.scrollY / 300;
                scrollIndicatorRef.current.style.opacity = String(Math.max(0, opacity));
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const tiltX = ((y - centerY) / centerY) * -0.5;
            const tiltY = ((x - centerX) / centerX) * 0.5;
            setTilt({ x: tiltX, y: tiltY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="hero-background" ref={backgroundRef}>
                <picture>
                    <source media="(max-width: 767px)" srcSet={backgroundMobile} />
                    <img
                        src={backgroundDesktop}
                        alt=""
                        className="hero-background-image"
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.1)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    />
                </picture>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                <div className="hero-logo">
                    <picture>
                        <img src={logoHero} alt="鈴音舞夢" />
                    </picture>
                </div>                    <p className="hero-catchphrase">
                        みんなに元気と笑顔を振りまく都会のお狐VTuber
                    </p>
                </div>

                <div className="hero-visual">
                    <picture>
                        <source media="(max-width: 767px)" srcSet={keyVisualMobile} />
                        <img src={keyVisualDesktop} alt="鈴音舞夢" />
                    </picture>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
