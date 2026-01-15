import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { PrismaClient } = await import('@prisma/client');
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    const submission = await prisma.contactSubmission.create({
      data: { name, email, company, message },
    });

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
