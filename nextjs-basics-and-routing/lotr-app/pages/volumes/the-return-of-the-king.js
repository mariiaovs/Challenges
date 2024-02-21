import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

export default function Volume2() {
  const data = volumes.find(({ slug }) => slug === "the-return-of-the-king");

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
        height={230}
        width={140}
        alt="A cover of the Volume"
      />
      <br />
      <Link href="/volumes/the-two-towers">Previous Volume</Link>
    </>
  );
}
