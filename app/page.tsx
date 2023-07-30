import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();


  return (
    <div className="bg-black flex flex-col h-screen justify-center items-center">
      <h1 className="text-center text-5xl mb-8 font-extrabold sm:mb-4">Build your dream resume.</h1>
      <div className="mt-8 flex flex-row sm:mt-4">
        {user ? (
          <Link href={'/dashboard'}><Button className="ml-4 sm:ml-4">Dashboard</Button></Link>
        ) : (
          <SignInButton redirectUrl="/dashboard" mode="modal"><Button className="ml-4 sm:ml-4">Get Started</Button></SignInButton>
        )}
        <Button className="ml-4 sm:ml-4 bg-transparent" variant={"outline"}>Learn More</Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
