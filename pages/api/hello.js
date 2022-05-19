import { dbconnect } from "../../component/Database/dbconnect";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  await dbconnect();
  res.status(200).json({ name: "John Doe" });
}
