import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function Volume1() {
  const data = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.books.map((book, index) => (
          <li key={index}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src={data.cover}
        height={140}
        width={230}
        alt="A cover of the Volume"
      />
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </>
  );
}
