import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        username: "Suprakash Ballav",
        email: "supra998@gmail.com"
    })
}

export function POST() {
    return NextResponse.json({
         username: "Suprakash Ballav",
        email: "supra998@gmail.com"
    })
}

export function PUT() {
    return NextResponse.json({
         username: "Suprakash Ballav1",
        email: "supra998123@gmail.com"
    })
}

export function DELETE() {
    return NextResponse.json({
         message: "user is deleted",
    })
}