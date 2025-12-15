/// <reference types="vite/client" />

// 基本的な画像ファイル（クエリパラメータなし）
declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

// vite-imagetools: クエリパラメータ付き画像モジュール
// 画像ファイル + クエリパラメータの組み合わせに対応
declare module '*.png?format=webp&quality=85&w=300' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=80&w=100' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=80&w=150' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=80&w=200' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=80&w=300' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=80&w=600' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=80&w=1200' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=75&w=800' {
    const src: string;
    export default src;
}

declare module '*.png?format=webp&quality=75&w=1920' {
    const src: string;
    export default src;
}
