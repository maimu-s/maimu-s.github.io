/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

// vite-imagetools用の型定義
declare module '*?format=webp' {
    const value: string;
    export default value;
}

declare module '*?w=*' {
    const value: string;
    export default value;
}

declare module '*&format=webp' {
    const value: string;
    export default value;
}
