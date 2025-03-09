<script>
    let classes = [
        { code: "AMST 2106", name: "Introduction to Latinx Studies", link: "/cornell/amst2106/" },
        { code: "INFO 1300", name: "Introduction to Web Development", link: "/cornell/info1300/" },
    ];
</script>

<div class="max-w-4xl mx-auto p-6">
    <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl mb-4">
        My <span class="poppins text-violet-400">Cornell</span> Courses
    </h1>
    <p class="text-base sm:text-lg md:text-xl text-gray-400 mb-10">
        A list of the courses I’ve taken, each linking to their respective page with projects.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each classes as cls}
            <a href={cls.link} 
                class="relative p-6 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg 
                    hover:border-violet-400 duration-200 group flex flex-col gap-3">
                <h2 class="text-xl sm:text-2xl font-semibold group-hover:text-violet-400">
                    {cls.code}
                </h2>
                <p class="text-gray-400">{cls.name}</p>
            </a>
        {/each}
    </div>
</div>
