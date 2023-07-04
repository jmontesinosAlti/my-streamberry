import Image from "next/image";
import  Header  from "./Components/Header/Header";
import Link from "next/link";

const posts = [
  { slug: 'movie1', title: 'movie1' },
  { slug: 'movie2', title: 'movie2' },
  { slug: 'movie3', title: 'movie3' },
  { slug: 'movie4', title: 'movie4' },
  // Add more posts here
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {posts.map((post) => (
            <Link href="/movie/[slug]" as={`/movie/${post.slug}`}>
              {post.title}
            </Link>
      ))}
    </main>
  );
}
