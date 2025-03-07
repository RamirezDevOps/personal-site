<script>
    import "../app.css";
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';

    let y = 0;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<svelte:head>

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
                    "@type": "EducationalOrganization",
                    "name": "Cornell University"
                }
            ]
        }
    </script>

    <title>Anderson Ramirez | DevOps Engineer & Tech Educator</title>
    <meta name="description" content="DevOps Engineer & Tech Educator. Specializing in Python (Flask), SaaS security, and IT automation. Nonprofit leader at The Coding Initiative." />
    <meta name="keywords" content="DevOps, IT Security, Python, Flask, SaaS, MFA, SSO, Automation, Nonprofit Tech, CI/CD" />
    <meta name="author" content="Anderson Ramirez" />
    
    <!-- OpenGraph Meta (For LinkedIn, Facebook) -->
    <meta property="og:title" content="Anderson Ramirez | DevOps Engineer & Tech Educator" />
    <meta property="og:description" content="Specializing in Python (Flask), IT security, SaaS platforms, and nonprofit tech education." />
    <meta property="og:image" content="/images/profile.png" />
    <meta property="og:url" content="https://andersonramirez.net/" />
    <meta property="og:type" content="website" />

    <!-- Twitter Meta -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Anderson Ramirez | DevOps Engineer & Tech Educator" />
    <meta name="twitter:description" content="Specializing in Python (Flask), IT security, SaaS platforms, and nonprofit tech education." />
    <meta name="twitter:image" content="/images/profile.png" />

    <!-- Favicon -->
    <link rel="icon" href="/favicon.svg" type="image/x-icon">
</svelte:head>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
        y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}>

        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button on:click={goTop} class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer ">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
        </button>
    </div>
    <Header y={y}/>
    <slot />
    <Footer/>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
