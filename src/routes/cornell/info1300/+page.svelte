<script>
    let projects = [
        { name: "Project 1", link: "info1300/project1", status: "complete" },
        { name: "Project 2", link: "info1300/project2", status: "in-progress" }
    ];
</script>

<div class="max-w-3xl mx-auto p-6">
    <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl mb-4">
        <span class="poppins text-violet-400">INFO 1300</span> Projects
    </h1>
    <p class="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
        Below are the projects I worked on in this course. Some may still be in progress.
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
                {#if project.status === "in-progress"}
                    <span class="text-sm text-violet-400">(In Progress)</span>
                {/if}
            </a>
        {/each}
    </div>
</div>
