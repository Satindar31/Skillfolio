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
  ``;
  function onSubmit(): any {
    console.log("submitted");
  }
  return (
    <form className="bg-transparent" onSubmit={onsubmit?.call}>
      <Label className="text-center">Name</Label>
      <Input
        type="text"
        className="left-1/2 max-w-md bg-transparent border-slate-800"
        placeholder="Jhon Doe"
      />
      <span className="m-4 sm:m-2" />
      <div className="grid grid-cols-3 sm:grid-col-2">
        <div className="m-2 p-2">
          <Label>About you line 1</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="Hi my name is ..."
          />

          <Label>About you line 2</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I was born in ... on ..., ..."
          />

          <Label>About you line 3</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I am based in ..."
          />

          <Label>About you line 4</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I have a passion for ..."
          />

          <Label>About you line 5</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="My hobbies are ..."
          />
        </div>
        <div className="m-2 p-2">
          <Label>Education line 1</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I started my education in ..."
          />

          <Label>Education line 2</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I started high school in ..."
          />

          <Label>Education line 3</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I graduated high school in ..."
          />

          <Label>Education line 4</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I went to ... college/university for ..."
          />

          <Label>Education line 5</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I completed university/college in ..."
          />
        </div>
        <div className="m-2 p-2">
          <Label>Experience line 1</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="20WX-YZ in ..."
          />

          <Label>Experience line 2</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="20AB-CD in ..."
          />

          <Label>Experience line 3</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="20PQ-RS in ..."
          />
        </div>
      </div>
    </form>
  );
}
