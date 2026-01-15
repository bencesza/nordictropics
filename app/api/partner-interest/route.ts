import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    const { companyName, contactPerson, email, phone, products, message } = body ?? {};

    if (!companyName || !contactPerson || !email || !phone || !products || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const submission = await prisma?.partnerInterest?.create?.({
      data: {
        companyName: companyName ?? '',
        contactPerson: contactPerson ?? '',
        email: email ?? '',
        phone: phone ?? '',
        products: products ?? '[]',
        message: message ?? '',
      },
    });

    return NextResponse.json(
      { success: true, id: submission?.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating partner interest:', error);
    return NextResponse.json(
      { error: 'Failed to submit partnership inquiry' },
      { status: 500 }
    );
  }
}
