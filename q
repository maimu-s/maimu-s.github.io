[1mdiff --git a/src/components/Header.tsx b/src/components/Header.tsx[m
[1mindex 06cdb3b..d9182f8 100644[m
[1m--- a/src/components/Header.tsx[m
[1m+++ b/src/components/Header.tsx[m
[36m@@ -1,6 +1,7 @@[m
 import { useEffect, useState } from 'react';[m
 import './Header.css';[m
[31m-import logo from '../assets/images/logo/logo.png?format=webp&quality=80';[m
[32m+[m[32mimport logoMobile from '../assets/images/logo/logo.png?format=webp&quality=80&w=100';[m[41m[m
[32m+[m[32mimport logoDesktop from '../assets/images/logo/logo.png?format=webp&quality=80&w=200';[m[41m[m
 [m
 function Header() {[m
     const [isScrolled, setIsScrolled] = useState(false);[m
[36m@@ -43,7 +44,10 @@[m [mfunction Header() {[m
             <div className="header-container">[m
                 <div className="header-logo">[m
                     <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>[m
[31m-                        <img src={logo} alt="鈴音舞夢" />[m
[32m+[m[32m                        <picture>[m[41m[m
[32m+[m[32m                            <source media="(max-width: 767px)" srcSet={logoMobile} />[m[41m[m
[32m+[m[32m                            <img src={logoDesktop} alt="鈴音舞夢" />[m[41m[m
[32m+[m[32m                        </picture>[m[41m[m
                     </a>[m
                 </div>[m
 [m
[1mdiff --git a/src/components/HeroSection.tsx b/src/components/HeroSection.tsx[m
[1mindex 159eb1c..d9e9837 100644[m
[1m--- a/src/components/HeroSection.tsx[m
[1m+++ b/src/components/HeroSection.tsx[m
[36m@@ -1,8 +1,13 @@[m
 import { useEffect, useRef, useState } from 'react';[m
 import './HeroSection.css';[m
[31m-import logoHero from '../assets/images/logo/logo.png?format=webp&quality=80';[m
[31m-import keyVisual from '../assets/images/hero/maimu-keyvisual.png?format=webp&quality=80';[m
[31m-import backgroundImage from '../assets/images/hero/background.png?format=webp&quality=75&w=1920';[m
[32m+[m[32mimport logoHeroMobile from '../assets/images/logo/logo.png?format=webp&quality=80&w=300';[m
[32m+[m[32mimport logoHeroDesktop from '../assets/images/logo/logo.png?format=webp&quality=80&w=600';[m
[32m+[m[32m// キービジュアル: モバイル用(600px)とデスクトップ用(1200px)[m
[32m+[m[32mimport keyVisualMobile from '../assets/images/hero/maimu-keyvisual.png?format=webp&quality=80&w=600';[m
[32m+[m[32mimport keyVisualDesktop from '../assets/images/hero/maimu-keyvisual.png?format=webp&quality=80&w=1200';[m
[32m+[m[32m// 背景画像: モバイル用(800px)とデスクトップ用(1920px)[m
[32m+[m[32mimport backgroundMobile from '../assets/images/hero/background.png?format=webp&quality=75&w=800';[m
[32m+[m[32mimport backgroundDesktop from '../assets/images/hero/background.png?format=webp&quality=75&w=1920';[m
 [m
 interface TiltState {[m
     x: number;[m
[36m@@ -44,29 +49,38 @@[m [mfunction HeroSection() {[m
     return ([m
         <section id="home" className="hero-section">[m
             <div className="hero-background" ref={backgroundRef}>[m
[31m-                <img[m
[31m-                    src={backgroundImage}[m
[31m-                    alt=""[m
[31m-                    className="hero-background-image"[m
[31m-                    style={{[m
[31m-                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.1)`,[m
[31m-                        transition: 'transform 0.1s ease-out'[m
[31m-                    }}[m
[31m-                />[m
[32m+[m[32m                <picture>[m
[32m+[m[32m                    <source media="(max-width: 767px)" srcSet={backgroundMobile} />[m
[32m+[m[32m                    <img[m
[32m+[m[32m                        src={backgroundDesktop}[m
[32m+[m[32m                        alt=""[m
[32m+[m[32m                        className="hero-background-image"[m
[32m+[m[32m                        style={{[m
[32m+[m[32m                            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.1)`,[m
[32m+[m[32m                            transition: 'transform 0.1s ease-out'[m
[32m+[m[32m                        }}[m
[32m+[m[32m                    />[m
[32m+[m[32m                </picture>[m
                 <div className="hero-overlay"></div>[m
             </div>[m
 [m
             <div className="hero-container">[m
                 <div className="hero-content">[m
                 <div className="hero-logo">[m
[31m-                    <img src={logoHero} alt="鈴音舞夢" />[m
[32m+[m[32m                    <picture>[m
[32m+[m[32m                        <source media="(max-width: 767px)" srcSet={logoHeroMobile} />[m
[32m+[m[32m                        <img src={logoHeroDesktop} alt="鈴音舞夢" />[m
[32m+[m[32m                    </picture>[m
                 </div>                    <p className="hero-catchphrase">[m
                         みんなに元気と笑顔を振りまく都会のお狐VTuber[m
                     </p>[m
                 </div>[m
 [m
                 <div className="hero-visual">[m
[31m-                    <img src={keyVisual} alt="鈴音舞夢" />[m
[32m+[m[32m                    <picture>[m
[32m+[m[32m                        <source media="(max-width: 767px)" srcSet={keyVisualMobile} />[m
[32m+[m[32m                        <img src={keyVisualDesktop} alt="鈴音舞夢" />[m
[32m+[m[32m                    </picture>[m
                 </div>[m
             </div>[m
         </section>[m
[1mdiff --git a/src/components/NewsSection.tsx b/src/components/NewsSection.tsx[m
[1mindex 99dbca0..cc8c404 100644[m
[1m--- a/src/components/NewsSection.tsx[m
[1m+++ b/src/components/NewsSection.tsx[m
[36m@@ -36,6 +36,17 @@[m [mfunction NewsSection() {[m
         document.body.style.overflow = '';[m
     };[m
 [m
[32m+[m[32m    type ImgParams = Record<string, string | number | boolean | null | undefined>;[m
[32m+[m
[32m+[m[32m    const withImgParams = (url: string, params: ImgParams): string => {[m
[32m+[m[32m        const u = new URL(url);[m
[32m+[m[32m        for (const [k, v] of Object.entries(params)) {[m
[32m+[m[32m            if (v === null || v === undefined) continue;[m
[32m+[m[32m            u.searchParams.set(k, String(v));[m
[32m+[m[32m        }[m
[32m+[m[32m        return u.toString();[m
[32m+[m[32m    };[m
[32m+[m
     return ([m
         <section className="news-section" id="news">[m
             <div className="news-container">[m
[36m@@ -88,11 +99,23 @@[m [mfunction NewsSection() {[m
                                 </div>[m
                                 {selectedNews.imageUrl && ([m
                                     <div className="news-modal-image-wrapper">[m
[32m+[m[32m                                        <picture>[m
[32m+[m[32m                                        <source[m
[32m+[m[32m                                            srcSet={withImgParams(selectedNews.imageUrl, { fm: "avif", w: 1200, q: 70 })}[m
[32m+[m[32m                                            type="image/avif"[m
[32m+[m[32m                                        />[m
[32m+[m[32m                                        <source[m
[32m+[m[32m                                            srcSet={withImgParams(selectedNews.imageUrl, { fm: "webp", w: 1200, q: 80 })}[m
[32m+[m[32m                                            type="image/webp"[m
[32m+[m[32m                                        />[m
                                         <img[m
[31m-                                            src={selectedNews.imageUrl}[m
[32m+[m[32m                                            src={withImgParams(selectedNews.imageUrl, { w: 1200 })}[m
                                             alt={selectedNews.title}[m
                                             className="news-modal-image"[m
[32m+[m[32m                                            loading="lazy"[m
[32m+[m[32m                                            decoding="async"[m
                                         />[m
[32m+[m[32m                                        </picture>[m
                                     </div>[m
                                 )}[m
                             </div>[m
[1mdiff --git a/src/components/TalentSection.tsx b/src/components/TalentSection.tsx[m
[1mindex 23ea8e6..1249ba7 100644[m
[1m--- a/src/components/TalentSection.tsx[m
[1m+++ b/src/components/TalentSection.tsx[m
[36m@@ -1,12 +1,16 @@[m
 import { useState } from 'react';[m
 import './TalentSection.css';[m
[31m-import maimPortrait from '../assets/images/talent/maimu-portrait.png?format=webp&quality=85';[m
[31m-import initialThreeview from '../assets/images/talent/initial_threeviews.png?format=webp&quality=80';[m
[31m-import chinalikeThreeview from '../assets/images/talent/chinalike_threeviews.png?format=webp&quality=80';[m
[31m-import cyberThreeview from '../assets/images/talent/cyber_threeviews.png?format=webp&quality=80';[m
[31m-import rionectionLogo from '../assets/images/logo/rionection_logo.png?format=webp&quality=80';[m
[31m-import travLogo from '../assets/images/logo/trav_logo.png?format=webp&quality=80';[m
[31m-import nonaniLogo from '../assets/images/logo/nonani_logo.png?format=webp&quality=80';[m
[32m+[m[32mimport maimPortrait from '../assets/images/talent/maimu-portrait.png?format=webp&quality=85&w=300';[m
[32m+[m[32mimport initialThreeview from '../assets/images/talent/initial_threeviews.png?format=webp&quality=80&w=1200';[m
[32m+[m[32mimport chinalikeThreeview from '../assets/images/talent/chinalike_threeviews.png?format=webp&quality=80&w=1200';[m
[32m+[m[32mimport cyberThreeview from '../assets/images/talent/cyber_threeviews.png?format=webp&quality=80&w=1200';[m
[32m+[m[32m// ロゴ画像（モバイル用とデスクトップ用）[m
[32m+[m[32mimport rionectionLogoMobile from '../assets/images/logo/rionection_logo.png?format=webp&quality=80&w=150';[m
[32m+[m[32mimport rionectionLogoDesktop from '../assets/images/logo/rionection_logo.png?format=webp&quality=80&w=300';[m
[32m+[m[32mimport travLogoMobile from '../assets/images/logo/trav_logo.png?format=webp&quality=80&w=150';[m
[32m+[m[32mimport travLogoDesktop from '../assets/images/logo/trav_logo.png?format=webp&quality=80&w=300';[m
[32m+[m[32mimport nonaniLogoMobile from '../assets/images/logo/nonani_logo.png?format=webp&quality=80&w=150';[m
[32m+[m[32mimport nonaniLogoDesktop from '../assets/images/logo/nonani_logo.png?format=webp&quality=80&w=300';[m
 [m
 interface TalentData {[m
     image: string;[m
[36m@@ -15,12 +19,14 @@[m [minterface TalentData {[m
     description: string;[m
     projects: {[m
         name: string;[m
[31m-        logo: string;[m
[32m+[m[32m        logoMobile: string;[m
[32m+[m[32m        logoDesktop: string;[m
         url: string;[m
     }[];[m
     groups: {[m
         name: string;[m
[31m-        logo: string;[m
[32m+[m[32m        logoMobile: string;[m
[32m+[m[32m        logoDesktop: string;[m
         url: string;[m
     }[];[m
     social: {[m
[36m@@ -95,7 +101,6 @@[m [mfunction TalentSection() {[m
         }[m
     };[m
 [m
[31m-    // モックデータ(後で実際のデータに置き換え)[m
     const talentData: TalentData = {[m
         image: maimPortrait,[m
         name: '鈴音舞夢',[m
[36m@@ -104,19 +109,22 @@[m [mfunction TalentSection() {[m
         projects: [[m
             {[m
                 name: 'RIONECTION',[m
[31m-                logo: rionectionLogo,[m
[32m+[m[32m                logoMobile: rionectionLogoMobile,[m
[32m+[m[32m                logoDesktop: rionectionLogoDesktop,[m
                 url: 'https://riot-music.com/rionection/'[m
             }[m
         ],[m
         groups: [[m
             {[m
                 name: 'TravelVasket',[m
[31m-                logo: travLogo,[m
[32m+[m[32m                logoMobile: travLogoMobile,[m
[32m+[m[32m                logoDesktop: travLogoDesktop,[m
                 url: 'https://x.com/TraV_project'[m
             },[m
             {[m
                 name: 'ノンストップアニマルズ',[m
[31m-                logo: nonaniLogo,[m
[32m+[m[32m                logoMobile: nonaniLogoMobile,[m
[32m+[m[32m                logoDesktop: nonaniLogoDesktop,[m
                 url: 'https://www.youtube.com/@nonstop-animals'[m
             }[m
         ],[m
[36m@@ -198,7 +206,10 @@[m [mfunction TalentSection() {[m
                                                 title={group.name}[m
                                             >[m
                                                 <span className="affiliation-name">{group.name}</span>[m
[31m-                                                <img src={group.logo} alt={group.name} className="affiliation-logo" />[m
[32m+[m[32m                                                <picture>[m
[32m+[m[32m                                                    <source media="(max-width: 767px)" srcSet={group.logoMobile} />[m
[32m+[m[32m                                                    <img src={group.logoDesktop} alt={group.name} className="affiliation-logo" />[m
[32m+[m[32m                                                </picture>[m
                                             </a>[m
                                         ))}[m
                                     </div>[m
[36m@@ -220,7 +231,10 @@[m [mfunction TalentSection() {[m
                                                 title={project.name}[m
                                             >[m
                                                 <span className="affiliation-name">{project.name}</span>[m
[31m-                                                <img src={project.logo} alt={project.name} className="affiliation-logo" />[m
[32m+[m[32m                                                <picture>[m
[32m+[m[32m                                                    <source media="(max-width: 767px)" srcSet={project.logoMobile} />[m
[32m+[m[32m                                                    <img src={project.logoDesktop} alt={project.name} className="affiliation-logo" />[m
[32m+[m[32m                                                </picture>[m
                                             </a>[m
                                         ))}[m
                                     </div>[m
[1mdiff --git a/src/utils/newsApi.ts b/src/utils/newsApi.ts[m
[1mindex 908538e..65c9895 100644[m
[1m--- a/src/utils/newsApi.ts[m
[1m+++ b/src/utils/newsApi.ts[m
[36m@@ -153,24 +153,10 @@[m [mfunction getMockNews(): NewsItem[] {[m
     return [[m
         {[m
             id: '1',[m
[31m-            date: '2025.12.12',[m
[31m-            title: 'ウェブサイトをリニューアルしました！',[m
[31m-            content: '鈴音舞夢の公式ウェブサイトをリニューアルオープンしました。今後ともよろしくお願いいたします！',[m
[32m+[m[32m            date: '2000.00.00',[m
[32m+[m[32m            title: 'Mock Title',[m
[32m+[m[32m            content: 'Mock Content',[m
             category: 'お知らせ'[m
[31m-        },[m
[31m-        {[m
[31m-            id: '2',[m
[31m-            date: '2025.12.10',[m
[31m-            title: 'YouTube チャンネル登録者数1000人突破！',[m
[31m-            content: 'YouTubeチャンネルの登録者数が1000人を突破しました！いつも応援ありがとうございます！これからもたくさん配信していきますので、よろしくお願いします！',[m
[31m-            category: '活動報告'[m
[31m-        },[m
[31m-        {[m
[31m-            id: '3',[m
[31m-            date: '2025.12.05',[m
[31m-            title: '初配信アーカイブ公開中',[m
[31m-            content: '初配信のアーカイブをYouTubeで公開しています。ぜひご覧ください！',[m
[31m-            category: '配信情報'[m
         }[m
     ];[m
 }[m
[1mdiff --git a/src/vite-env.d.ts b/src/vite-env.d.ts[m
[1mindex 35c8f15..5590211 100644[m
[1m--- a/src/vite-env.d.ts[m
[1m+++ b/src/vite-env.d.ts[m
[36m@@ -1,48 +1,64 @@[m
 /// <reference types="vite/client" />[m
[31m-/// <reference types="vite-imagetools/client" />[m
 [m
[32m+[m[32m// 基本的な画像ファイル（クエリパラメータなし）[m
 declare module '*.png' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*.jpg' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.svg' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*.jpeg' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.webp' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*.svg' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32m// vite-imagetools: クエリパラメータ付き画像モジュール[m
[32m+[m[32m// 画像ファイル + クエリパラメータの組み合わせに対応[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=85&w=300' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*.gif' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=80&w=100' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*.webp' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=80&w=150' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=80&w=200' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=80&w=300' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=80&w=600' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-// vite-imagetools用の型定義[m
[31m-declare module '*?format=webp' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=80&w=1200' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*?w=*' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=75&w=800' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
 [m
[31m-declare module '*&format=webp' {[m
[31m-    const value: string;[m
[31m-    export default value;[m
[32m+[m[32mdeclare module '*.png?format=webp&quality=75&w=1920' {[m
[32m+[m[32m    const src: string;[m
[32m+[m[32m    export default src;[m
 }[m
[1mdiff --git a/tsconfig.json b/tsconfig.json[m
[1mindex 30d6ff1..9ae6def 100644[m
[1m--- a/tsconfig.json[m
[1m+++ b/tsconfig.json[m
[36m@@ -8,18 +8,22 @@[m
 [m
         /* Bundler mode */[m
         "moduleResolution": "bundler",[m
[32m+[m[32m        "allowArbitraryExtensions": true,[m
         "allowImportingTsExtensions": true,[m
         "resolveJsonModule": true,[m
         "isolatedModules": true,[m
         "noEmit": true,[m
         "jsx": "react-jsx",[m
 [m
[32m+[m[32m        /* Types */[m
[32m+[m[32m        "types": ["vite/client"],[m
[32m+[m
         /* Linting */[m
         "strict": true,[m
         "noUnusedLocals": true,[m
         "noUnusedParameters": true,[m
         "noFallthroughCasesInSwitch": true[m
     },[m
[31m-    "include": ["src"],[m
[32m+[m[32m    "include": ["src", "src/vite-env.d.ts"],[m
     "references": [{ "path": "./tsconfig.node.json" }][m
 }[m
