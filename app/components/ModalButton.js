import Link from "next/link";

export default function ModalButton() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Modal Page</h1>
      <Link
        href="/blogs/modal-example"
        className="border p-3 rounded bg-gray-50"
      >
        Open Modal
      </Link>
    </main>
  );
}
