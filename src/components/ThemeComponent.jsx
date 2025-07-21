'use client';

import { ThemeProvider } from "next-themes";

export default function ThemeComponent({children}) {
    return (
        <ThemeProvider attribute= 'class' defaultTheme = 'dark' enableSystem>
            <div className= "min-h-screen transition-colors duration-500">
                { children}
            </div>
        </ThemeProvider>
    );
}