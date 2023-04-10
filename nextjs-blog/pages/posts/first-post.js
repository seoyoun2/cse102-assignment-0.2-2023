import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Hello, I'm Seoyoun, a student at Hanyang University. My hobby is listening to music and especially I like R&B and Ballad genre.</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}