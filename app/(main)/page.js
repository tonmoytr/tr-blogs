import Link from "next/link";
import { DialogDemo } from "../components/DialogDemo";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1>Home...</h1>
      <h1 className="text-3xl font-bold">Welcome</h1>
      <DialogDemo></DialogDemo>
    </div>
  );
}
