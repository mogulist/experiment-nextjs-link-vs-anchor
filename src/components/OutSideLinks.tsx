import Link from "next/link";
import { Inter } from "next/font/google";
import Arrow from "./Arrow";

const inter = Inter({ subsets: ["latin"] });

const OutSideLinks = () => {
  return (
    <div className="min-w-fit mb-8 grid text-center space-x-4">
      <a href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Anchor to Next.js Docs <Arrow />
        </h2>
      </a>
      <Link href="https://shopping.naver.com/home">
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Link to 네이버 쇼핑 <Arrow />
        </h2>
      </Link>
    </div>
  );
};

export default OutSideLinks;
