# 🌐 Web Projects Showcase — Interactive Multi-Project Hub

A modern, unified web portfolio and application launcher created by **Venkata Ganapathy P**. This showcase hosts **10 complete, interactive web applications** built with React, Vite, JavaScript, HTML5, and CSS3.

Visitors first see an interactive **Project Hub** where they can search, filter by category, and launch each application either in an embedded responsive preview (with desktop, tablet, and mobile device frames) or directly full-screen in a new tab.

---

## 🚀 Live Demo & Deployment

- **Live URL:** [https://venkataganapthy7-boop.github.io/Web_Interface/](https://venkataganapthy7-boop.github.io/Web_Interface/)
- **Repository:** [https://github.com/venkataganapthy7-boop/Web_Interface](https://github.com/venkataganapthy7-boop/Web_Interface)

---

## 📂 Projects Included

| # | Project Name | Category | Tech Stack | Description |
|---|---|---|---|---|
| 1 | **[Student Attendance Tracker](projects/attendance-tracker/index.html)** | React • Academic | React, Vite, CSS3 | Real-time classroom attendance tracker with 20-student roster, Present/Absent toggles, and live stats. |
| 2 | **[Interactive Calculator](projects/calculator/index.html)** | React • Utility | React, Vite, CSS Grid | Responsive digital calculator with touch keypad, operator precedence, instant evaluations, and clear controls. |
| 3 | **[Digital Counter App](projects/counter-app/index.html)** | Vanilla JS • Utility | HTML5, CSS3, JavaScript | Clean, responsive numeric counter with increment (+1), decrement (-1), and instant reset. |
| 4 | **[Registration Form & Validation](projects/form-validation/index.html)** | React • Security & Forms | React, Vite, CSS3 | Multi-field user registration form featuring real-time client-side regex validation, password matching, and error states. |
| 5 | **[Personal Interests & Hobbies](projects/hobbies/index.html)** | React • Showcase | React, Vite, CSS3 | Animated card showcase highlighting personal passions: cricket, music, coding, and cinema. |
| 6 | **[Developer Portfolio Website](projects/personal-portfolio/index.html)** | React • Portfolio | React, Vite, CSS3 | Developer portfolio for Venkata Ganapathy highlighting cybersecurity expertise, technical skills, and contact gateway. |
| 7 | **[Student Report Card App](projects/student-report-card/index.html)** | React • Academic | React, Vite, CSS3 | Academic scoring calculator for 5 subjects with total sum, percentage calculation, and Pass/Fail status. |
| 8 | **[Student Dashboard](projects/student-dashboard/index.html)** | React • Dashboard | React, Vite, CSS3 | Component-based dashboard displaying student credentials, enrolled courses, department info, and attendance metric. |
| 9 | **[Student Profile Badge](projects/student-profile-card/index.html)** | Vanilla JS • Academic | HTML5, CSS3, JavaScript | Two-stage student identity card that converts form input into a generated avatar badge with letter grades. |
| 10 | **[To-Do List Application](projects/todo-list/index.html)** | React • Productivity | React, Vite, CSS3 | Streamlined task organizer with instant task creation, strikethrough completion toggling, and deletion. |

---

## 🛠️ Repository Architecture

```
WEB PROJECT/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── projects/                       # Production-ready built applications
│   ├── attendance-tracker/
│   ├── calculator/
│   ├── counter-app/
│   ├── form-validation/
│   ├── hobbies/
│   ├── personal-portfolio/
│   ├── student-dashboard/
│   ├── student-profile-card/
│   ├── student-report-card/
│   └── todo-list/
├── Attendence_Tracker/             # Source code (React + Vite)
├── Calculator/                     # Source code (React + Vite)
├── Counter_App/                    # Source code (HTML5 + CSS + JS)
├── Form_Validation/                # Source code (React + Vite)
├── Hobbies/                        # Source code (React + Vite)
├── Personal_Portfolio/             # Source code (React + Vite)
├── Student Report Card Application/# Source code (React + Vite)
├── Student_Dashboard/              # Source code (React + Vite)
├── Student_ProfileCard/            # Source code (HTML5 + CSS + JS)
├── To-do List Application/         # Source code (React + Vite)
├── index.html                      # Root Project Hub & Interactive Launcher
├── build-all.js                    # Automated build & packaging script
├── package.json                    # Root scripts & configuration
└── .gitignore                      # Excludes node_modules across all folders
```

---

## 💻 Local Development

### 1. Preview Directly
Simply open `index.html` in any web browser, or run a local static web server:
```bash
npx serve .
```

### 2. Rebuilding Applications
To rebuild all 8 Vite projects and regenerate the `/projects` directory:
```bash
npm run build
# OR
node build-all.js
```

---

## ⚙️ How Deployment Works

1. **Root Hub (`index.html`):** Served as the primary landing page when visiting the deployed domain.
2. **Subpath Projects (`/projects/<app>/`):** Every project is built with relative base paths (`./`) so they function seamlessly in iframes, subdirectories, or standalone tabs.
3. **GitHub Actions Workflow (`.github/workflows/deploy.yml`):** Automatically builds and publishes the latest versions directly to GitHub Pages on every push to `main`.
4. **Direct Branch Serving:** The pre-built `/projects` folder is also committed, allowing GitHub Pages to serve without any waiting time even when configured for classic branch deployment.

---

## 👤 Author

**Venkata Ganapathy P**
- GitHub: [@venkataganapthy7-boop](https://github.com/venkataganapthy7-boop)
- Department: B.E. Cyber Security
