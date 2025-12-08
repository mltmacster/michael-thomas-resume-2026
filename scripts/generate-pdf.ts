import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { resumeData } from '../client/src/lib/resume-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  console.log('Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Create HTML content for the PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Michael L. Thomas - Resume</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
          color: #1a1a1a;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }
        
        h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #000;
        }
        
        .header {
          border-bottom: 2px solid #000;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        
        .title {
          font-size: 18px;
          color: #4b5563;
          margin-bottom: 12px;
        }
        
        .contact-info {
          font-size: 14px;
          color: #4b5563;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        
        .section {
          margin-bottom: 24px;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 8px;
          margin-bottom: 16px;
          color: #000;
        }
        
        .experience-item {
          margin-bottom: 16px;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        
        .role {
          font-weight: 700;
          font-size: 16px;
        }
        
        .company {
          font-weight: 600;
          color: #4b5563;
        }
        
        .period {
          font-size: 14px;
          color: #6b7280;
          font-family: monospace;
        }
        
        ul {
          margin: 8px 0;
          padding-left: 20px;
        }
        
        li {
          font-size: 14px;
          margin-bottom: 4px;
          color: #374151;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .skill-category h3 {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #374151;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .skill-tag {
          font-size: 12px;
          background-color: #f3f4f6;
          padding: 2px 8px;
          border-radius: 4px;
          color: #1f2937;
        }
        
        .project-item {
          margin-bottom: 16px;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        
        .project-title {
          font-weight: 700;
          font-size: 15px;
        }
        
        .project-desc {
          font-size: 14px;
          color: #374151;
          margin-bottom: 8px;
        }
        
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        .cert-item {
          font-size: 13px;
        }
        
        .cert-name {
          font-weight: 600;
          color: #111827;
        }
        
        .cert-meta {
          font-size: 12px;
          color: #6b7280;
        }
        
        .education-item {
          margin-bottom: 12px;
        }
        
        a {
          color: #2563eb;
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${resumeData.personal.name}</h1>
        <div class="title">${resumeData.personal.title}</div>
        <div class="contact-info">
          <span>${resumeData.personal.email}</span>
          <span>${resumeData.personal.phone}</span>
          <span>${resumeData.personal.location}</span>
          <span>linkedin.com/${resumeData.personal.linkedin}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Summary</div>
        <p style="font-size: 14px; color: #374151;">${resumeData.personal.summary}</p>
      </div>

      <div class="section">
        <div class="section-title">Core Competencies</div>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Technical Skills</h3>
            <div class="skill-tags">
              ${resumeData.skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="skill-category">
            <h3>Soft Skills</h3>
            <div class="skill-tags">
              ${resumeData.skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Projects</div>
        ${resumeData.projects.map(project => `
          <div class="project-item">
            <div class="project-header">
              <span class="project-title">${project.title}</span>
              ${project.link && project.link !== '#' ? `<a href="${project.link}" style="font-size: 12px;">View Project</a>` : ''}
            </div>
            <p class="project-desc">${project.description}</p>
            ${project.challenges ? `
              <div style="margin-top: 8px;">
                <div style="font-size: 13px; font-weight: 600; margin-bottom: 4px;">Key Challenges Overcome:</div>
                <ul>
                  ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            <div class="skill-tags" style="margin-top: 8px;">
              ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <div class="section-title">Professional Experience</div>
        ${resumeData.experience.map(job => `
          <div class="experience-item">
            <div class="job-header">
              <div>
                <span class="role">${job.role}</span>
                <span style="margin: 0 8px; color: #9ca3af;">|</span>
                <span class="company">${job.company}</span>
              </div>
              <span class="period">${job.period}</span>
            </div>
            <div style="font-size: 13px; color: #6b7280; margin-bottom: 4px;">${job.location}</div>
            <ul>
              ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="section">
        <div class="section-title">Certifications</div>
        <div class="cert-grid">
          ${resumeData.certifications.map(cert => `
            <div class="cert-item">
              <div class="cert-name">${cert.name}</div>
              <div class="cert-meta">
                ${cert.date} • ID: ${cert.id}
                ${cert.link ? `<br><a href="${cert.link}" target="_blank">Verify Credential</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Education</div>
        ${resumeData.education.map(edu => `
          <div class="education-item">
            <div style="font-weight: 700; font-size: 15px;">${edu.school}</div>
            <div style="font-size: 14px;">${edu.degree} in ${edu.major}</div>
            <div style="font-size: 13px; color: #6b7280;">${edu.location} • ${edu.year}</div>
            <div style="font-size: 13px; margin-top: 2px;">${edu.details}</div>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  const pdfPath = path.join(__dirname, '../client/public/Michael_Thomas_Resume_2026.pdf');
  const distPdfPath = path.join(__dirname, '../dist/public/Michael_Thomas_Resume_2026.pdf');
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });

  // Also copy to dist if it exists
  if (fs.existsSync(path.dirname(distPdfPath))) {
    fs.copyFileSync(pdfPath, distPdfPath);
    console.log(`PDF copied to dist: ${distPdfPath}`);
  }
  
  console.log(`PDF generated successfully at: ${pdfPath}`);
  
  await browser.close();
}

generatePDF().catch(console.error);
