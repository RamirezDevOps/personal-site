<script>
// @ts-nocheck

    import Step from "./Step.svelte"

    let steps = [
        {name: 'Google Workspace & Office 365 Dual Delivery', icon: 'fa-brands fa-google', skills: ['Google Workspace', 'Microsoft 365', 'Dual Delivery', 'Calendar Interop', 'User Administration'], href: 'https://support.google.com/a/answer/9228551?hl=en'},
        {name: 'Identity & Access Management (Okta)', icon: 'fa-solid fa-user-lock', skills: ['Okta SSO', 'SAML 2.0', 'MFA', 'User Provisioning', 'Identity Governance'], href: 'https://help.okta.com/en-us/content/topics/provisioning/lcm/con-okta-prov.htm#:~:text=Provisioning%20uses%20the%20SCIM%20protocol,privileges%20through%20the%20user%20lifecycle.'},
        {name: 'The Coding Initiative Site', icon: 'fa-solid fa-globe', skills: ['CI/CD', 'Azure', 'SvelteKit', 'GitHub Actions', 'Infrastructure as Code (IaC)'], href: 'https://codinginitiative.org/'}
    ]

    let benefits = [
        {name: 'DevOps & IT Operations', description: 'Experienced in managing SaaS platforms, implementing SSO & MFA, and streamlining IT operations.'},
        {name: 'Nonprofit Leadership', description: 'Board President & Director of IT for The Coding Initiative, dedicated to expanding tech education.'},
        {name: 'Higher Education & Tech', description: 'Information Science student at Cornell University with a passion for leveraging technology for impact.'},
    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi, I'm <span class="poppins text-violet-400">Anderson</span>, a <br> DevOps Engineer & Tech Educator.
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I love building with <span class="poppins text-violet-400">Python (Flask)</span> and leveraging technology to <span class="poppins text-violet-400">expand access to tech education</span>.  
                Through my nonprofit work, I help create opportunities for future innovators.
            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="#footer">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile.webp"} alt="Anderson Ramirez, DevOps Enginner, and Student at Cornell University" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
               Curious to <span class="poppins text-violet-400">see</span> my work? 
            </h3>
        </div>
        <a href="assets/Ramirez.Anderson.pdf" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
            <i class="fa-solid fa-file"></i>
            <p>Resume</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step steps={steps[0]}>
                <p>Administer <strong class="text-violet-400">dual delivery</strong> and <strong class="text-violet-400">calendar interop</strong> for 100+ accounts across Google Workspace and Microsoft Office 365, ensuring seamless communication between platforms.</p>
                <p class="text-sm text-slate-400">Skills: {steps[0].skills.join(', ')}</p>
            </Step>
            <Step steps={steps[1]}>
                <p>Managed <strong class="text-violet-400">identity access</strong> and <strong class="text-violet-400">automated user provisioning</strong> via Okta, implementing <strong class="text-violet-400">MFA and SSO</strong> for secure access across 10 applications, such as G Workspace, Microsoft 365, Atlassian Cloud.</p>
                <p class="text-sm text-slate-400">Skills: {steps[1].skills.join(', ')}</p>
            </Step>
            <Step steps={steps[2]}>
                <p>Developed a <strong class="text-violet-400">CI/CD pipeline</strong> utilizing <strong class="text-violet-400">Azure Static Web Apps</strong> alongside <strong class="text-violet-400">GitHub Actions</strong>, reducing deployment time by 80% for a <strong class="text-violet-400">SvelteKit web application</strong>.</p>
                <p class="text-sm text-slate-400">Skills: {steps[2].skills.join(', ')}</p>
            </Step>

        </div>
    </section>

    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index+1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
            {/each}
        </div>
        <p class="mx-auto">So why not invest?</p>
    </section>
</main>