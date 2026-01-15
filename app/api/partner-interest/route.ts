import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { PrismaClient } = await import('@prisma/client');
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const { companyName, contactPerson, email, phone, productsInterest, message } = body;

    const submission = await prisma.partnerInterest.create({
      data: {
        companyName,
        contactPerson,
        email,
        phone,
        productsInterest,
        message,
      },
    });

    return NextResponse.json({ success: true, data: submission });
  } catch (error) {
    console.error('Partner API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
