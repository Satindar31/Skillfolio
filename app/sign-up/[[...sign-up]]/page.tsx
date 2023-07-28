"use client";
import { SignUp, useUser } from "@clerk/nextjs";

export default function Page() {
  const { user } = useUser();
  if (user) return (window.location.href = "/dashboard");
  return <SignUp />;
}
