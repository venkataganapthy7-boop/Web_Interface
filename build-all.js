/**
 * Build and bundle script for Web Projects Showcase
 * Builds all 8 Vite projects and copies all 10 projects into the /projects directory.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const projectsDir = path.join(rootDir, 'projects');

const viteProjects = [
  { name: 'Attendence_Tracker', target: 'attendance-tracker' },
  { name: 'Calculator', target: 'calculator' },
  { name: 'Form_Validation', target: 'form-validation' },
  { name: 'Hobbies', target: 'hobbies' },
  { name: 'Personal_Portfolio', target: 'personal-portfolio' },
  { name: 'Student Report Card Application', target: 'student-report-card' },
  { name: 'Student_Dashboard', target: 'student-dashboard' },
  { name: 'To-do List Application', target: 'todo-list' }
];

const htmlProjects = [
  { name: 'Counter_App', file: 'CounterApp.html', target: 'counter-app' },
  { name: 'Student_ProfileCard', file: 'StudentProfile.html', target: 'student-profile-card' }
];

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach((element) => {
    const srcPath = path.join(from, element);
    const destPath = path.join(to, element);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function injectHubNavigation(htmlFilePath) {
  if (!fs.existsSync(htmlFilePath)) return;
  let html = fs.readFileSync(htmlFilePath, 'utf8');
  
  const backSnippet = `
<script>
  if (window.self === window.top) {
    window.addEventListener('DOMContentLoaded', () => {
      const btn = document.createElement('a');
      btn.href = '../../index.html';
      btn.innerHTML = '← Back to Showcase Hub';
      btn.style.cssText = 'position:fixed;bottom:18px;right:18px;z-index:999999;background:#0f172a;color:#f8fafc;padding:10px 18px;border-radius:9999px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:13px;font-weight:600;text-decoration:none;box-shadow:0 8px 24px rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.2);display:inline-flex;align-items:center;transition:all 0.2s ease;cursor:pointer;';
      btn.onmouseover = () => { btn.style.background = '#2563eb'; btn.style.transform = 'translateY(-2px)'; };
      btn.onmouseout = () => { btn.style.background = '#0f172a'; btn.style.transform = 'none'; };
      document.body.appendChild(btn);
    });
  }
</script>
`;

  if (!html.includes('Back to Showcase Hub')) {
    if (html.includes('</body>')) {
      html = html.replace('</body>', `${backSnippet}\n</body>`);
    } else {
      html += backSnippet;
    }
    fs.writeFileSync(htmlFilePath, html, 'utf8');
  }
}

console.log('🚀 Starting Showcase Build Pipeline...');

// Ensure projects directory exists
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// 1. Build & copy Vite projects
for (const proj of viteProjects) {
  const projPath = path.join(rootDir, proj.name);
  const targetPath = path.join(projectsDir, proj.target);
  console.log(`\n📦 Building Vite project: ${proj.name}...`);
  
  try {
    const isWindows = process.platform === 'win32';
    const npmCmd = isWindows ? 'npm.cmd' : 'npm';
    execSync(`${npmCmd} run build`, { cwd: projPath, stdio: 'inherit' });

    const distPath = path.join(projPath, 'dist');
    if (fs.existsSync(distPath)) {
      if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true, force: true });
      }
      copyFolderSync(distPath, targetPath);
      injectHubNavigation(path.join(targetPath, 'index.html'));
      console.log(`✅ Copied & enhanced dist to projects/${proj.target}`);
    } else {
      console.error(`❌ Dist folder not found for ${proj.name}`);
    }
  } catch (err) {
    console.error(`❌ Build failed for ${proj.name}:`, err.message);
  }
}

// 2. Copy HTML projects
for (const proj of htmlProjects) {
  const sourcePath = path.join(rootDir, proj.name);
  const targetPath = path.join(projectsDir, proj.target);
  console.log(`\n📄 Copying static project: ${proj.name}...`);
  
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
  fs.mkdirSync(targetPath, { recursive: true });

  const htmlSource = path.join(sourcePath, proj.file);
  const htmlDest = path.join(targetPath, 'index.html');
  fs.copyFileSync(htmlSource, htmlDest);
  fs.copyFileSync(htmlSource, path.join(targetPath, proj.file));
  injectHubNavigation(htmlDest);
  console.log(`✅ Copied ${proj.file} -> projects/${proj.target}/index.html`);
}

console.log('\n✨ All 10 projects are ready in /projects!');
