import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Link href="/blogs">
        <h1 className="text-2xl underline text-blue-200 text-center">Visit Blogs here</h1>
        </Link>
    </div>
  );
}