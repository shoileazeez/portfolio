import { config } from 'dotenv';
import pool from './db';
import { initializeDatabase } from './schema';
import { personalInfo, education, certifications, experience, skills, projects, blogs } from '@/config/content';
import bcrypt from 'bcryptjs';

// Load environment variables
config({ path: '.env.local' });

export async function seedDatabase() {
  console.log('Seeding database...');
  
  try {
    // Initialize database tables
    await initializeDatabase();
    
    const client = await pool.connect();

    try {
      // Clear existing data
      await client.query('TRUNCATE personal_info, education, certifications, experience, skills, projects, blogs, admin_users RESTART IDENTITY CASCADE');

      // Seed personal info
      await client.query(`
        INSERT INTO personal_info (name, title, bio, intro, avatar, github, linkedin, email)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `, [
        personalInfo.name,
        personalInfo.title,
        personalInfo.bio,
        personalInfo.intro,
        personalInfo.avatar,
        personalInfo.github,
        personalInfo.linkedin,
        personalInfo.email
      ]);

      // Seed education
      for (const edu of education) {
        await client.query(`
          INSERT INTO education (degree, institution, status, description)
          VALUES ($1, $2, $3, $4)
        `, [edu.degree, edu.institution, edu.status, edu.description]);
      }

      // Seed certifications
      for (const cert of certifications) {
        await client.query(`
          INSERT INTO certifications (title, description, year)
          VALUES ($1, $2, $3)
        `, [cert.title, cert.description, cert.year]);
      }

      // Seed experience
      for (const exp of experience) {
        await client.query(`
          INSERT INTO experience (title, company, period, description, achievements, technologies)
          VALUES ($1, $2, $3, $4, $5, $6)
        `, [
          exp.title,
          exp.company,
          exp.period,
          exp.description,
          exp.achievements,
          exp.technologies
        ]);
      }

      // Seed skills
      for (const [category, skillList] of Object.entries(skills)) {
        await client.query(`
          INSERT INTO skills (category, skills)
          VALUES ($1, $2)
        `, [category, skillList]);
      }

      // Seed projects
      for (const project of projects) {
        await client.query(`
          INSERT INTO projects (title, description, tags, image, slug, link, year, live_demo, github, overview, challenge, solution, impact)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        `, [
          project.title,
          project.description,
          project.tags,
          project.image,
          project.slug,
          project.link,
          project.year,
          project.liveDemo,
          project.github,
          project.overview,
          project.challenge,
          project.solution,
          project.impact
        ]);
      }

      // Seed blogs
      for (const blog of blogs) {
        await client.query(`
          INSERT INTO blogs (title, description, excerpt, date, year, slug, link, cover_image, tags, read_time, content)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `, [
          blog.title,
          blog.description,
          blog.excerpt,
          blog.date,
          blog.year,
          blog.slug,
          blog.link,
          blog.coverImage,
          blog.tags,
          blog.readTime,
          blog.content
        ]);
      }

      // Create admin user
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const passwordHash = await bcrypt.hash(adminPassword, 10);

      await client.query(`
        INSERT INTO admin_users (email, password_hash)
        VALUES ($1, $2)
      `, [adminEmail, passwordHash]);

      console.log('Database seeded successfully!');
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seed if called directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('Seed completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seed failed:', error);
      process.exit(1);
    });
}