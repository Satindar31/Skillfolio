import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Template, generate } from '@pdfme/generator';
import { NextRequest, NextResponse } from "next/server";
import templateBasic from "@/templates/basic";

export const runtime = 'edge'

export async function POST(req: Request) {
    const {
        email,
        name,
        aboutMeLine1,
        aboutMeLine2,
        aboutMeLine3,
        aboutMeLine4,
        aboutMeLine5,
        educationLine1,
        educationLine2,
        educationLine3,
        educationLine4,
        educationLine5,
        previsousExperianceLine1,
        previsousExperianceLine2,
        previsousExperianceLine3,
    }: {
        email: string;
        name: string;
        aboutMeLine1: string;
        aboutMeLine2: string;
        aboutMeLine3: string;
        aboutMeLine4: string;
        aboutMeLine5: string;
        educationLine1: string;
        educationLine2: string;
        educationLine3: string;
        educationLine4: string;
        educationLine5: string;
        previsousExperianceLine1: string;
        previsousExperianceLine2: string;
        previsousExperianceLine3: string;
    } = await req.json();
    console.log(aboutMeLine1)
    const inputs = [{
        "email": email,
        "Name": name,
        "Abt me L1": aboutMeLine1,
        "Abt me L2": aboutMeLine2,
        "Abt me L3": aboutMeLine3,
        "Abt me L4": aboutMeLine4,
        "Abt me L5": aboutMeLine5,
        "EDU 1": educationLine1,
        "EDU 2": educationLine2,
        "EDU 3": educationLine3,
        "EDU 4": educationLine4,
        "EDU 5": educationLine5,
        "PREV EXP 1": previsousExperianceLine1,
        "PREV EXP 2": previsousExperianceLine2,
        "PREV EXP 3": previsousExperianceLine3,
    }];
    try {
        const pdf = await generate({
            templateBasic,
            inputs
        })
        console.log(pdf)
        // const resumeCreationResponse = await prisma.resume.create({
        //     data: {
        //         email,
        //         name
        //     }
        // })
        // return NextResponse.json({
        //     success: true,
        //     id: resumeCreationResponse.id
        // })
    }
    catch (err: any) {
        console.log(err)
        return NextResponse.json({
            success: false,
            error: err.message,
        }, { status: 500 })
    }

}
