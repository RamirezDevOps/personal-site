<script>
    let projects = [
        { name: "Project 1", link: "amst2106/project1" },
        { name: "Project 2", link: "amst2106/project2" },
        { name: "Project 3", link: "amst2106/project3" },
        { name: "Project 4", link: "amst2106/project4" }
    ];
</script>

<div class="max-w-3xl mx-auto p-6">
    <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl mb-4">
        <span class="poppins text-violet-400">AMST 2106</span> Projects
    </h1>
    <p class="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
        Below are the projects I completed in this course.
    </p>

    <div class="flex flex-col gap-4">
        {#each projects as project}
            <a href={project.link} 
                class="relative p-4 border border-gray-700 rounded-xl shadow-md hover:shadow-lg 
                    hover:border-violet-400 duration-200 group flex items-center gap-4">
                <i class="fa-solid fa-folder text-gray-400 group-hover:text-violet-400 text-xl"></i>
                <h2 class="text-lg sm:text-xl font-medium group-hover:text-violet-400">
                    {project.name}
                </h2>
            </a>
        {/each}
    </div>
</div>
