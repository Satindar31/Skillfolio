"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export default function ResumeForm() {
  const resumeSchema = z.object({
    name: z.string(),
    aboutMeLine1: z.string(),
    aboutMeLine2: z.string(),
    aboutMeLine3: z.string(),
    aboutMeLine4: z.string(),
    aboutMeLine5: z.string(),
    educationLine1: z.string(),
    educationLine2: z.string(),
    educationLine3: z.string(),
    educationLine4: z.string(),
    educationLine5: z.string(),
    previsousExperianceLine1: z.string(),
    previsousExperianceLine2: z.string(),
    previsousExperianceLine3: z.string(),
  });

``
  function onSubmit(): any {
    console.log("submitted");
  }
  return (
    <form className="bg-transparent" onSubmit={onsubmit?.call}>
      <Label>Name</Label>
      <Input placeholder="Jhon Doe" />
      <span className="m-2 sm:m-1" />

      <Label></Label>
    </form>
  );
}
