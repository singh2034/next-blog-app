import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export const LoadDB = async () => {
  await connectDB();
};

export const GET = async (request) => {
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
};

export const POST = async (request) => {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
};

export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "EmailID Deleted" });
};
