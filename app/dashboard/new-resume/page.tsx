import NotLoggedIn from "@/components/auth/not-loggedin";
import ResumeForm from "@/components/resumes/form";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
    const user = await currentUser();
    if (!user) return <NotLoggedIn />;
    return (
        <div className="bg-black h-screen">
            <ResumeForm />
        </div>
    )
}