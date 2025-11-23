import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
   <div>
    <h1 className=" text-blue-400">Welcome to my Next.js project</h1>
    <Button variant={"outline"}>Click to know more!</Button>
   </div>
  );
}
