import Header from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "AI FOR AE",
  description: "Generated by XiaoYan app",
};

// headers

export default function RootLayout({ children }) {
  return (
    <html lang="cn">
      <body>
        <div className="mr-auto ml-auto px-[50px]">
          <div className="">
              <Header />
          </div>
          <div className=" mt-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
