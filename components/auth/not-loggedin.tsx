import { SignInButton } from "@clerk/nextjs"

export default function NotLoggedIn() {
    return (
        <div className="bg-black flex flex-col justify-center items-center">
            <p className="m-2">This page is not for you, yet</p>
            <SignInButton mode="modal" redirectUrl={'/dashboard'} />
        </div>
    )
}