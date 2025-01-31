import { NextRequest, NextResponse } from "next/server";
import Component  from "@/models/components.model";
import { connectDb } from "@/config/dbConfig/dbConfig";
import rateLimit from "@/config/ratelimit/ratelimit";

type component = {
    code: string;
    title: string;
    tags: string[];
    description: string;
    author: string;
    installationGuide: string | null;
    usageGuide: string | null;
    props: string | null;
}


export  async function POST(req:NextRequest,res:NextResponse){
    try {

        if(rateLimit(req) === false){
            return NextResponse.json({message:"Too many request try after some time"},{status:429});
        }

        const reqBody = await req.json();
        if(!reqBody.code || !reqBody.title || !reqBody.tags || !reqBody.description || !reqBody.author){
            return NextResponse.json({message:"all fields are required"},{status:400});
        }

        //check if code is not malicous
        if(reqBody.code.length > 60 && reqBody.installationGuide.length <= 0 && reqBody.usageGuide.length <= 0){
            return NextResponse.json({message:"code is long so installion guide and usage guide is required"},{status:400});
        }

        const newComponent:component = {
            code:reqBody.code,
            title:reqBody.title,
            tags:reqBody.tags,
            description:reqBody.description,
            author:reqBody.author,
            installationGuide:reqBody.installationGuide || null,
            usageGuide:reqBody.usageGuide || null,
            props:reqBody.props || null
        }
        
        await connectDb();
        //save to db
        const savedComponent = await Component.create(newComponent);

        return NextResponse.json({message:"code is under review . it will take less than 24hr to review ",savedComponent},{status:201});


    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500});
        
    }
}