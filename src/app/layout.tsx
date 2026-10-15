import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"N-CODE AI Studio | Website Intelligence",description:"Open-weight AI powered website audit tool by N-CODE STUDIO"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
