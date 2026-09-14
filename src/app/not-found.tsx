import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="font-semibold lg:text-3xl text-2xl">404</h1>
      <Separator orientation="vertical" className={`mx-4`} />
      <Button
        variant={"link"}
        className="px-0 lg:text-2xl text-xl"
        size={"lg"}
        render={<Link href="/"></Link>}
        nativeButton={false}
      >
        Home
      </Button>
    </div>
  );
}
