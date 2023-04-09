import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const OutSideLinks = () => {
  return (
    <div className="mb-32 grid text-center  space-x-4">
      <a href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Next.js Docs{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
      <Link href="https://shopping.naver.com/home">
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          네이버 쇼핑{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default OutSideLinks;
