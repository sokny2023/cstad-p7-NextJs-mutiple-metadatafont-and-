
import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import StyledJsxRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600","900"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});

export const metadata: Metadata = {
  title: {
    template: "%s - my-shop",
    default: "my-shop",
  },
  description: "Welcome to the new world of sleeping",
  keywords: [" shop", "ecommerce", "sell","shoes","store","products"],
  openGraph: {
    title: {
      template: "%s - my-shop",
      default: "my-shop",
    },
    description: "This is description of my  website",
    images: [
      "https://i.pinimg.com/564x/c0/a7/78/c0a7789a758ca212eabf8beacc2d8f2e.jpg",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${kantumruy_pro.variable}`}>
        <NextUILayout>
        <StyledJsxRegistry>
        <NavbarComponent />
          <Suspense fallback={<LoadingComponent/>}>
            <ErrorBoundary errorComponent={Error}>
            {children}
            </ErrorBoundary>
          {/* {children} */}
         </Suspense>
         </StyledJsxRegistry>
        </NextUILayout>
      </body>
    </html>
  );
}
