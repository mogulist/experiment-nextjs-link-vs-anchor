import Link from "next/link";
import { Inter } from "next/font/google";
import Arrow from "./Arrow";

const inter = Inter({ subsets: ["latin"] });

const InsideLinks = ({ href }: { href: string }) => {
  return (
    <div>
      <Link href={href}>
        <h2 className={`${inter.className} text-2xl`}>
          Link to {href} <Arrow />
        </h2>
      </Link>

      <a href={href} className={`${inter.className} text-2xl`}>
        anchor to {href} <Arrow />
      </a>
    </div>
  );
};

export default InsideLinks;
