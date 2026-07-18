import { proxy } from "../../../../lib/proxy";
export const dynamic = "force-dynamic";
export async function GET(req: Request) { return proxy(req as any); }
export async function POST(req: Request) { return proxy(req as any); }
export async function PUT(req: Request) { return proxy(req as any); }
export async function DELETE(req: Request) { return proxy(req as any); }
export async function PATCH(req: Request) { return proxy(req as any); }
