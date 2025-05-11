import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar/Navbar";
import { dbConnect } from "@/service/mongoConnect";







const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src:"../fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HotelHub",
  description: "HotelHub is your best partner",
};

export default async function RootLayout({ children }) {

  await dbConnect()
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           
           <Navbar sideMenu={true}/>

        <main >
           {children}
        </main> 

          </ThemeProvider>

     
     

      
       
      </body>
    </html>
  );
}
