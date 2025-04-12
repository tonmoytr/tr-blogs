import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1>Home...</h1>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <Link
        href="/modal-example"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </Link>
    </div>
  );
}
