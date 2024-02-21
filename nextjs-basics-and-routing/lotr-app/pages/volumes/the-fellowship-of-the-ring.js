import Link from "next/link";
import Image from "next/image";

import { volumes } from "../../resources/lib/data";

export default function Volume1() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

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
      <Link href="/volumes/the-two-towers">Next Volume</Link>
    </>
  );
}
