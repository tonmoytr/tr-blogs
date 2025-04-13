"use client";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";

export default function ModalExample() {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <h2 className="text-lg font-bold mb-2">Intercepted Modal</h2>
      <p>This modal is shown on top of the current page!</p>
    </Modal>
  );
}
