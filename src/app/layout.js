import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Afaq Ahmad | MERN Stack Developer",
  description: "Portfolio showcasing projects, skills, and services by Afaq Ahmad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
