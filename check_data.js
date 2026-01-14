require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkData() {
  try {
    const contacts = await prisma.contactSubmission.findMany();
    const partners = await prisma.partnerInterest.findMany();
    
    console.log('=== CURRENT DATABASE DATA ===\n');
    console.log(`Contact Submissions: ${contacts.length}`);
    console.log(`Partner Interest Submissions: ${partners.length}`);
    console.log('\n--- Contact Submissions ---');
    console.log(JSON.stringify(contacts, null, 2));
    console.log('\n--- Partner Interest Submissions ---');
    console.log(JSON.stringify(partners, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();
