import NotLoggedIn from "@/components/auth/not-loggedin";
import { Button } from "@/components/ui/button";
import getAllPosts from "@/helpers/get-post";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Page() {
  const user = await currentUser();
  if (!user) return <NotLoggedIn />;

const data = getAllPosts(user.emailAddresses[0].emailAddress);

  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen">
      {(await data).length === 0 ? (
        <>
        <h1 className="text-center text-5xl mb-8 font-extrabold sm:mb-4">You don&apos;t have a resume with us, yet</h1>
        <Link href={'/dashboard/new-resume'}><Button>Start building</Button></Link>
        </>
      ) : (
        <>
        {(await data).map((resume) => {
            <div className="w-fit p-2 m-2 bg-slate-900 border border-slate-800 rounded-md">
                {/* <p>{resume.name}</p> */}
            </div>
        })}
        </>
      )}
    </div>
  );
}
