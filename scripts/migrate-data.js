require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

/**
 * Data Migration Script for NordicTropics
 * 
 * Usage:
 * 1. Set OLD_DATABASE_URL in .env (current database)
 * 2. Set NEW_DATABASE_URL in .env (new database)
 * 3. Run: node scripts/migrate-data.js
 */

async function migrateData() {
  const oldDb = new PrismaClient({
    datasources: {
      db: {
        url: process.env.OLD_DATABASE_URL
      }
    }
  });

  const newDb = new PrismaClient({
    datasources: {
      db: {
        url: process.env.NEW_DATABASE_URL
      }
    }
  });

  try {
    console.log('🔄 Starting data migration...\n');

    // Migrate Contact Submissions
    console.log('📧 Migrating Contact Submissions...');
    const contacts = await oldDb.contactSubmission.findMany();
    console.log(`   Found ${contacts.length} records`);
    
    if (contacts.length > 0) {
      for (const contact of contacts) {
        await newDb.contactSubmission.create({
          data: {
            name: contact.name,
            email: contact.email,
            company: contact.company,
            message: contact.message,
            createdAt: contact.createdAt
          }
        });
      }
      console.log(`   ✅ Migrated ${contacts.length} contact submissions`);
    }

    // Migrate Partner Interest
    console.log('\n🤝 Migrating Partner Interest Submissions...');
    const partners = await oldDb.partnerInterest.findMany();
    console.log(`   Found ${partners.length} records`);
    
    if (partners.length > 0) {
      for (const partner of partners) {
        await newDb.partnerInterest.create({
          data: {
            companyName: partner.companyName,
            contactPerson: partner.contactPerson,
            email: partner.email,
            phone: partner.phone,
            productsInterest: partner.productsInterest,
            message: partner.message,
            createdAt: partner.createdAt
          }
        });
      }
      console.log(`   ✅ Migrated ${partners.length} partner interest submissions`);
    }

    console.log('\n✅ Migration completed successfully!');
    console.log(`\nSummary:`);
    console.log(`  - Contact Submissions: ${contacts.length}`);
    console.log(`  - Partner Interest: ${partners.length}`);
    console.log(`  - Total Records: ${contacts.length + partners.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await oldDb.$disconnect();
    await newDb.$disconnect();
  }
}

migrateData();