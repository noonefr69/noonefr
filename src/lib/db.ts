import mongoose from "mongoose";

const cached = global as typeof global & {
  mongoose?: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
};

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not defined");

  if (cached.mongoose!.conn) return cached.mongoose!.conn;

  if (!cached.mongoose!.promise) {
    cached.mongoose!.promise = mongoose.connect(uri).then((m) => m.connection);
  }

  cached.mongoose!.conn = await cached.mongoose!.promise;
  return cached.mongoose!.conn;
}
