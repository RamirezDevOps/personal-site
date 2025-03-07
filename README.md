# 🌐 Anderson Ramirez - Personal Portfolio 🚀

> **Live Site:** [andersonramirez.net](https://andersonramirez.net)

This is my **personal website**, showcasing expertise in **DevOps, SaaS security, IT automation, and nonprofit leadership**. Built with **SvelteKit, TypeScript, and TailwindCSS**, it serves as a hub for **technical projects, nonprofit initiatives, and personal work**.

---

## 📌 Features

- **Dynamic Portfolio** - Showcasing DevOps & SaaS projects  
- **SEO Optimization** - Rich metadata for better search visibility  
- **Resume Download** - Quick access to my latest CV  
- **Audio Archive** - A collection of preserved cultural recordings  
- **CI/CD Deployment** - Automated with GitHub Actions & Azure  

---

## 🏗 Tech Stack

- **SvelteKit** - Lightweight, fast frontend framework
- **TypeScript** - Strictly typed JavaScript for scalability
- **Tailwind CSS** - Utility-first CSS for styling
- **Vercel** - Fast and reliable deployment
- **GitHub Actions & Azure** - CI/CD automation
- **Google Workspace & Okta** - IAM & SaaS security

---

## 📂 Project Structure

```bash
📦 personal-site
├── 📂 src
│   ├── 📂 routes
│   │   ├── 📄 +layout.svelte  # Global layout with Header & Footer
│   │   ├── 📄 +page.svelte    # Main landing page
│   │   ├── 📂 cornell/amst2106/project2  # Audio archive project
│   │   ├── 📂 cornellAssets  # Static assets & media files
│   ├── 📂 components
│   │   ├── 📄 Header.svelte   # Navigation bar
│   │   ├── 📄 Footer.svelte   # Footer with contact links
│   │   ├── 📄 Step.svelte     # Project showcase component
│   ├── 📂 assets
│   │   ├── 🖼️ profile.png     # Profile picture
│   │   ├── 🖼️ favicon.svg     # Favicon
│   ├── 🎨 app.css             # Global styling
├── 📄 package.json            # Dependencies
├── 📄 README.md               # This file
```bash

---

## 🛠 Setup & Installation

### 1️⃣ Clone the repository  

```bashbash
git clone https://github.com/RamirezDevOps/personal-site.git
cd personal-site
```bash

### 2️⃣ Install dependencies  

```bashbash
npm install  # or yarn install or pnpm install
```bash

### 3️⃣ Run development server  

```bashbash
npm run dev
```bash

**Or start the server and open in a browser:**  

```bashbash
npm run dev -- --open
```bash

### 4️⃣ Build for production  

```bashbash
npm run build
```bash

### 5️⃣ Preview production build  

```bashbash
npm run preview
```bash

---

## 🌍 SEO & Performance

This project includes:

- **Structured Data (Schema.org)** for better search engine rankings
- **OpenGraph & Twitter Meta Tags** for optimized social media sharing
- **Lazy-loading & Code Splitting** for performance optimization
- **Mobile Responsive Design** using TailwindCSS

### 🔍 SEO Metadata (Inside `<svelte:head>`) 

```bashhtml
<title>Anderson Ramirez | DevOps Engineer & Tech Educator</title>
<meta name="description" content="DevOps Engineer & Tech Educator. Specializing in Python (Flask), SaaS security, and IT automation. Nonprofit leader at The Coding Initiative." />
<meta name="keywords" content="DevOps, IT Security, Python, Flask, SaaS, MFA, SSO, Automation, Nonprofit Tech, CI/CD" />
<meta name="author" content="Anderson Ramirez" />
```bash

### 📜 JSON-LD Structured Data (SEO Boost)

```bashhtml
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anderson Ramirez",
    "jobTitle": "DevOps Engineer & Tech Educator",
    "url": "https://andersonramirez.net/",
    "sameAs": [
        "https://www.linkedin.com/in/anderramirez/",
        "https://github.com/RamirezDevOps"
    ],
    "worksFor": [
        {
            "@type": "Organization",
            "name": "The Coding Initiative"
        },
        {
            "@type": "Organization",
            "name": "Cornell University"
        }
    ]
}
</script>
```bash

---

## 📌 Projects Featured on This Site

| Project Name | Description | Technologies |
|-------------|-------------|-------------|
| **Google Workspace & Office 365 Dual Delivery** | Administered dual delivery & calendar interop for 100+ accounts | Google Workspace, Microsoft 365, Dual Delivery, Calendar Interop, IAM |
| **Identity & Access Management (Okta)** | Implemented SSO, MFA, & automated user provisioning for SaaS apps | Okta SSO, SAML 2.0, MFA, User Provisioning, IAM |
| **The Coding Initiative Site** | Built CI/CD pipeline using Azure Static Web Apps & GitHub Actions | CI/CD, Azure, SvelteKit, GitHub Actions, Infrastructure as Code (IaC) |

---

## 📍 Roadmap & Future Enhancements

- Improve accessibility (ARIA roles, keyboard navigation)
- Blog integration for sharing DevOps insights & nonprofit work
- Performance improvements for Core Web Vitals

---

## 🤝 Connect With Me

- 📧 **Email:** [anderson.ramirez1@outlook.com](mailto:anderson.ramirez1@outlook.com)
- 💼 **LinkedIn:** [linkedin.com/in/anderramirez](https://www.linkedin.com/in/anderramirez/)
- 👨‍💻 **GitHub:** [github.com/RamirezDevOps](https://github.com/RamirezDevOps)

---

## 📜 License

This project is **MIT Licensed** – feel free to use, modify, and contribute!

💡 Built with passion for DevOps, automation, and technology education. 🚀
