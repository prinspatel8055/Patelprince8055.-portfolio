# Prince Patel (@patelprince8055) - Production Portfolio Website

A modern, high-performance, responsive single-page portfolio website engineered with **pure HTML5, CSS3, and vanilla JavaScript (zero build tools, zero dependencies, zero npm/framework overhead)**.

Designed with a futuristic glassmorphic dark theme, light-mode switch, 60fps micro-interactions, 3D mouse tilt, live GitHub REST API integration, and all verified projects from **Ganpat University** and software tools.

---

## 🌟 Live Demo & Target Subdomains
When deployed, your portfolio will be live at:
- **Netlify**: `https://patelprince8055.netlify.app`
- **Vercel**: `https://patelprince8055.vercel.app`
- **GitHub Pages**: `https://prinspatel8055.github.io`

---

## 📁 File Structure

```text
d:\portfolio\
├── index.html                  # Accessible semantic HTML5 architecture
├── style.css                   # Futuristic dark & light theme CSS design system
├── script.js                   # Pure vanilla JS engine with single CONFIG object
├── README.md                   # Complete deployment & customization manual
└── assets/
    ├── profile.jpg             # High-res profile photograph (from user image)
    ├── resume.pdf              # Prince Patel's official resume
    └── projects/               # High-res preview mockups for all live portals
        ├── convocation.jpg     # https://convocation.guni.ac.in/
        ├── atcnn.jpg           # https://atcnn.guni.ac.in/
        ├── am-portal.jpg       # https://am.guni.ac.in/
        ├── ict-courses.jpg     # https://www.ganpatuniversity.ac.in/courses/ict
        ├── icedmam.jpg         # https://www.ganpatuniversity.ac.in/icedmam/home-icedmam
        ├── digital-health-tech.jpg # https://www.ganpatuniversity.ac.in/about/digitalhealthtech-home
        ├── maritime-games.jpg  # https://nationalmaritimegames.org/
        ├── gcsrs.jpg           # https://www.ganpatuniversity.ac.in/gcsrs/gcsrs-home
        ├── maritime-conclave.jpg # https://www.ganpatuniversity.ac.in/maritimeskillconclave/mtsc-home
        ├── antigravity-ai.jpg  # AI Agentic Workflow Studio
        ├── matrix-cosec.jpg    # Matrix COSEC Biometric IoT Hub
        └── phoneinfoga.jpg     # OSINT Phone Investigation Framework
```

---

## 🚀 How to Deploy Online for Free (Step-by-Step)

### પદ્ધતિ ૧: Netlify Drop (સૌથી સહેલું – ફક્ત ૧ મિનિટમાં Live)
તમારે કોઈપણ કોડિંગ કમાન્ડ રન કરવાની જરૂર નથી:
1. તમારા બ્રાઉઝરમાં **[app.netlify.com/drop](https://app.netlify.com/drop)** ખોલો (જો એકાઉન્ટ ન હોય તો મફતમાં સાઈન અપ કરો).
2. તમારા કમ્પ્યુટરમાંથી `D:\portfolio` વાળું આખું ફોલ્ડર માઉસથી પકડીને ત્યાં **Drag & Drop** કરો.
3. ૧૦ સેકન્ડમાં વેબસાઇટ લાઇવ થઈ જશે!
4. URL નું નામ `patelprince8055` રાખવા માટે:
   - **Site configuration** પર ક્લિક કરો.
   - **Change site name** પસંદ કરો.
   - ત્યાં `patelprince8055` લખીને Save કરો.
   - તમારી સાઇટ હવે **`https://patelprince8055.netlify.app`** પર લાઈવ થઈ જશે!

---

### પદ્ધતિ ૨: Vercel (Super Fast Global CDN)
1. **[vercel.com](https://vercel.com)** પર જાઓ અને તમારા GitHub એકાઉન્ટ (`prinspatel8055`) વડે Log in કરો.
2. તમારા GitHub પર નવું રિપોઝીટરી બનાવો (દા.ત. `portfolio` અથવા `patelprince8055`) અને આ ફાઇલો Push કરો:
   ```bash
   git init
   git add .
   git commit -m "Prince Patel Production Portfolio"
   git branch -M main
   git remote add origin https://github.com/prinspatel8055/portfolio.git
   git push -u origin main
   ```
3. Vercel ડેશબોર્ડમાં જઈને **"Add New Project"** પર ક્લિક કરો અને તમારી રિપોઝીટરી પસંદ કરો.
4. Framework Preset: **Other** (No build step required).
5. **Deploy** પર ક્લિક કરો.
6. Project Settings -> Domains માં જઈને `patelprince8055.vercel.app` નામ આપી દો.

---

### પદ્ધતિ ૩: GitHub Pages (સીધું તમારા GitHub પરથી)
1. તમારા GitHub એકાઉન્ટ પર **`prinspatel8055.github.io`** નામે એક નવી Public Repository બનાવો.
2. આ `D:\portfolio` ફોલ્ડરની તમામ ફાઇલો એ રિપોઝીટરીમાં અપલોડ કરો:
   ```bash
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/prinspatel8055/prinspatel8055.github.io.git
   git push -u origin main
   ```
3. GitHub રિપોઝીટરીના **Settings** -> **Pages** મેનુમાં જાઓ.
4. **Branch**: `main` અને Folder: `/ (root)` સિલેક્ટ કરીને **Save** કરો.
5. ૨ મિનિટમાં તમારી સાઈટ **`https://prinspatel8055.github.io/`** પર લાઇવ થઈ જશે!

---

## 🛠️ Customization Guide (સરળતાથી વિગતો કેવી રીતે બદલવી)

તમારે કોડ શોધવાની કોઈ જરૂર નથી. **`script.js` ની સૌથી પહેલી ૧૦૦ લાઈનમાં એક જ `CONFIG` ઓબ્જેક્ટ છે**, જેમાં તમે નીચે મુજબ બધું એડિટ કરી શકો છો:

```javascript
const CONFIG = {
  owner: {
    name: "Prince Patel",
    username: "patelprince8055",
    githubUsername: "prinspatel8055",
    role: "Full Stack Web Developer | UI/UX Designer | Cybersecurity Learner",
    organization: "Ganpat University",
    email: "prinspatel8055@gmail.com",
    typingWords: [
      "Full Stack Developer",
      "UI/UX Designer",
      "Landing Page Specialist",
      "Cybersecurity Enthusiast",
      "Server & Hosting Specialist"
    ]
  },
  socialLinks: {
    github: "https://github.com/prinspatel8055",
    instagram: "https://www.instagram.com/patelprince__8055/",
    facebook: "https://www.facebook.com/prince.patel.388565/",
    linkedin: "https://www.linkedin.com/in/patelprince8055"
  },
  // Formspree setup (optional):
  contactForm: {
    formspreeEndpoint: "" // e.g. "https://formspree.io/f/your_form_id"
  },
  // Adding a new project:
  projects: [
    {
      id: "my-new-site",
      title: "My New Portal Name",
      url: "https://example.com",
      category: "University", // "University", "Events", or "Education"
      description: "Brief summary of the live portal...",
      tags: ["HTML5", "CSS3", "JavaScript"],
      image: "assets/projects/my-new-site.jpg"
    }
  ]
};
```

---

## 🎨 Key Features & Technical Highlights

1. **Clean Code Architecture**:
   - Pure HTML5, CSS3, and Vanilla JavaScript.
   - Zero compilation, zero build dependencies, 100% standard web specifications.

2. **Futuristic Glassmorphic Design**:
   - Background `#0b1020`, glass surfaces `rgba(255, 255, 255, 0.05)`, primary violet `#7c5cff`, cyan `#00d4ff`, pink `#ff5ca8`.
   - Dynamic Dark / Light theme toggle with automatic persistence via `localStorage`.
   - Typography: Google Fonts **Space Grotesk** (headings) & **Inter** (body).

3. **Performance & 60fps Micro-Interactions**:
   - Custom trailing cursor physics with smooth lerp interpolation.
   - 3D mouse tilt on portrait frame, live project cards, and timeline cards.
   - Interactive canvas particle constellation reacting to mouse movement.
   - Smooth button ripple animation and magnetic attraction.

4. **11 Categorized Skill Cards**:
   - Complete coverage of all 11 disciplines: Programming, Frontend, Backend, Database, UI/UX & Design, Cybersecurity (Fundamentals), Networking, Tools, Web & CMS, Creative/AI, and Professional Practice.
   - Interactive category filter tabs and glowing chips.

5. **Live Work / Projects Showcase**:
   - 9 Live Ganpat University & National Event portals + 4 Antigravity AI & System projects.
   - Interactive category filters: *All, University Portals, Conferences & Events, Education*.
   - Direct "Visit Live Site" and "Live Preview" triggers.

6. **Interactive Resume Modal**:
   - Built-in PDF reader modal loading `assets/resume.pdf` with direct download fallback and zero viewport ghosting.

7. **Live GitHub Section**:
   - Directly interfaces `https://api.github.com/users/prinspatel8055` for live profile stats, followers, and public repository cards.
   - Embeds annual commit contribution graph.
   - Automatic fallback protection against GitHub API rate-limits.

---

## 📄 License
Designed and developed for **Prince Patel (@patelprince8055)**. All rights reserved © 2026.
