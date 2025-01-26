import "./globals.css";

export const metadata = {
  title: "Web Dev Assignment 2 ",
  description: "Web Dev Assignment 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
