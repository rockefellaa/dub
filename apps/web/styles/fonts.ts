import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

// export const satoshi = localFont({
//   src: "Satoshi-Variable.woff2",
//   variable: "--font-satoshi",
//   weight: "300 900",
//   display: "swap",
//   style: "normal",
// });

export const satoshi = Roboto({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: "400",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
