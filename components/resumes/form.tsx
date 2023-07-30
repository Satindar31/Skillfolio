"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";

export default function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [abtMeL1, setAbtMeL1] = useState("");
  const [abtMeL2, setAbtMeL2] = useState("");
  const [abtMeL3, setAbtMeL3] = useState("");
  const [abtMeL4, setAbtMeL4] = useState("");
  const [abtMeL5, setAbtMeL5] = useState("");
  const [eduL1, setEduL1] = useState("");
  const [eduL2, setEduL2] = useState("");
  const [eduL3, setEduL3] = useState("");
  const [eduL4, setEduL4] = useState("");
  const [eduL5, setEduL5] = useState("");
  const [prevExp1, setPrevExp1] = useState("");
  const [prevExp2, setPrevExp2] = useState("");
  const [prevExp3, setPrevExp3] = useState("");

  async function formSubmited(event: any) {
    event.preventDefault();
    console.log("submitted");
    console.log(abtMeL1)

    const response = await fetch("/api/generate-resume", {
      method: "post",
      body: JSON.stringify({
        email,
        name,
        aboutMeLine1: abtMeL1,
        aboutMeLine2: abtMeL2,
        aboutMeLine3: abtMeL3,
        aboutMeLine4: abtMeL4,
        aboutMeLine5: abtMeL5,
        educationLine1: eduL1,
        educationLine2: eduL2,
        educationLine3: eduL3,
        educationLine4: eduL4,
        educationLine5: eduL5,
        previsousExperianceLine1: prevExp1,
        previsousExperianceLine2: prevExp2,
        previsousExperianceLine3: prevExp3,
      })
    })
  }
  
  return (
    <form className="bg-transparent" onSubmit={formSubmited}>
      <div className="grid grid-cols-2">
        <div>
          <Label className="text-center">Name</Label>
          <Input
            type="text"
            className=" max-w-md bg-transparent border-slate-800"
            placeholder="Jhon Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="jhondoe@example.com"
            className="bg-transparent border-slate-800 max-w-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <span className="m-4 sm:m-2" />
      <div className="grid grid-cols-3 sm:grid-col-2">
        <div className="m-2 p-2">
          <Label>About you line 1</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="Hi my name is ..."
            value={abtMeL1}
            onChange={(e) => setAbtMeL1(e.target.value)}
          />

          <Label>About you line 2</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I was born in ... on ..., ..."
            value={abtMeL2}
            onChange={(e) => setAbtMeL2(e.target.value)}
          />

          <Label>About you line 3</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I am based in ..."
            value={abtMeL3}
            onChange={(e) => setAbtMeL3(e.target.value)}
          />

          <Label>About you line 4</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I have a passion for ..."
            value={abtMeL4}
            onChange={(e) => setAbtMeL4(e.target.value)}
          />

          <Label>About you line 5</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="My hobbies are ..."
            value={abtMeL5}
            onChange={(e) => setAbtMeL5(e.target.value)}
          />
        </div>
        <div className="m-2 p-2">
          <Label>Education line 1</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I started my education in ..."
            value={eduL1}
            onChange={(e) => setEduL1(e.target.value)}
          />

          <Label>Education line 2</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I started high school in ..."
            value={eduL2}
            onChange={(e) => setEduL2(e.target.value)}
          />

          <Label>Education line 3</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I graduated high school in ..."
            value={eduL3}
            onChange={(e) => setEduL3(e.target.value)}
          />

          <Label>Education line 4</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I went to ... college/university for ..."
            value={eduL4}
            onChange={(e) => setEduL4(e.target.value)}
          />

          <Label>Education line 5</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="I completed university/college in ..."
            value={eduL5}
            onChange={(e) => setEduL5(e.target.value)}
          />
        </div>
        <div className="m-2 p-2">
          <Label>Experience line 1</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="20WX-YZ in ..."
            value={prevExp1}
            onChange={(e) => setPrevExp1(e.target.value)}
          />

          <Label>Experience line 2</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="20AB-CD in ..."
            value={prevExp2}
            onChange={(e) => setPrevExp2(e.target.value)}
          />

          <Label>Experience line 3</Label>
          <Input
            className="bg-transparent border-slate-800 active:border active:border-slate-800"
            placeholder="20PQ-RS in ..."
            value={prevExp3}
            onChange={(e) => setPrevExp3(e.target.value)}
          />
        </div>
      </div>
      <Button className="mt-4 max-w-xs">Submit</Button>
    </form>
  );
}
