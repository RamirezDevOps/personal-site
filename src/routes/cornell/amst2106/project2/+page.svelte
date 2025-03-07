<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let audio: HTMLAudioElement | null = null; // Allow audio to be null initially
  let currentTitle = '';
  let currentDescription = '';
  let isPlaying = false;
  let isLoading = false;
  let currentTime = 0;
  let duration = 0;
  let currentIndex = 0;

  const sequences = [
    {
      title: 'Staple Foods',
      description: 'A discussion about the essential foods they grew up eating in El Salvador',
      file: '/cornellAssets/amst2106/project2/audio/sequence1.mp3'
    },
    {
      title: 'A Day in El Salvador',
      description: 'A look into the daily routines of their childhood, painting a picture of life in El Salvador during their youth',
      file: '/cornellAssets/amst2106/project2/audio/sequence2.mp3'
    },
    {
      title: 'Celebrations and Festivals',
      description: 'Descriptions of the major holidays and cultural festivals they celebrated with their families in El Salvador',
      file: '/cornellAssets/amst2106/project2/audio/sequence3.mp3'
    },
    {
      title: 'A Taste of Salvadorian Music',
      description: 'Descriptions of the different music they grew up listening to.',
      file: '/cornellAssets/amst2106/project2/audio/sequence4.mp3'
    },
    {
      title: 'Adapting to a New Place',
      description: 'The challenges they faced due to their migration to The United States.',
      file: '/cornellAssets/amst2106/project2/audio/sequence5.mp3'
    },
    {
      title: 'Life Changes in America',
      description: 'They describe how their daily life has changed here in the USA.',
      file: '/cornellAssets/amst2106/project2/audio/sequence6.mp3'
    },
    {
      title: 'Cultural Mix',
      description: 'They discuss the traditions that they brought to America with them.',
      file: '/cornellAssets/amst2106/project2/audio/sequence7.mp3'
    },
    {
      title: 'Language Barriers',
      description: 'They mention how important it is to teach their children their native tounge.',
      file: '/cornellAssets/amst2106/project2/audio/sequence8.mp3'
    },
    {
      title: 'A Piece of Home in the US',
      description: 'They talk about the different things they would bring to the USA to feel more at home',
      file: '/cornellAssets/amst2106/project2/audio/sequence9.mp3'
    }
  ];

  onMount(() => {
    audio = new Audio(); // Initialize audio element here

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
      if (audio) duration = audio.duration; // Ensure audio is not null
    });

    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('timeupdate', updateProgress); // Cleanup events
      }
      audio = null; // Cleanup audio element
    };
  });

  function loadAudio(index: number) {
    const sequence = sequences[index];
    if (audio) {
      audio.src = sequence.file;
      currentTitle = sequence.title;
      currentDescription = sequence.description;
      currentIndex = index;
      isPlaying = false;
      currentTime = 0;
    }
  }

  function toggleAudio() {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play();
        isPlaying = true;
      }
    }
  }

  function nextSequence() {
    if (currentIndex < sequences.length - 1) {
      loadAudio(currentIndex + 1);
    }
  }

  function previousSequence() {
    if (currentIndex > 0) {
      loadAudio(currentIndex - 1);
    }
  }

  function updateProgress() {
    if (audio) {
      currentTime = audio.currentTime;
    }
  }

  function seekAudio(event: Event) {
    const seekTime = (event.target as HTMLInputElement).value;
    if (audio) {
      audio.currentTime = Number(seekTime);
    }
  }

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  onMount(() => {
    loadAudio(0); // Load the first audio on mount
  });
</script>


<svelte:head>
  <title>Project Two - Audio Archive</title>
  <link rel="icon" href="cornellAssets/amst2106/project2/project2.svg" type="image/x-icon">
</svelte:head>

<style>
  /* Existing CSS remains intact */

  header {
    background-color: #2c3e50;
    color: white;
    padding: 1.5rem;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 1px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  main {
    display: flex;
    flex-grow: 1;
    padding-bottom: 5rem;
  }

  .sidebar {
    width: 25%;
    background: white;
    padding: 1rem;
    overflow-y: auto;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .content {
    width: 75%;
    padding: 2rem;
    background: #f7f9fc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sequence-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sequence-list button {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    background: linear-gradient(135deg, #2980b9, #2c3e50);
    border-radius: 5px;
    color: white;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
  }

  .sequence-list button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  .details {
    margin-bottom: 2rem;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
  }

  .details h2 {
    font-size: 2rem;
    color: #333;
  }

  .details p {
    font-size: 1.2rem;
    color: #666;
  }

  .audio-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .controls {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
  }

  .controls button {
    padding: 0.75rem 1.5rem;
    border: none;
    background: #e74c3c;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  .controls button:hover {
    background: #c0392b;
  }

  .progress-bar {
    width: 100%;
    max-width: 400px;
    margin: 1rem 0;
  }

  .time {
    font-size: 0.9rem;
    color: #555;
  }

  .reflection {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    text-align: center;
  }

  .reflection p {
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 75%;
    padding: 2rem;
    background: #f7f9fc;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .content, .reflection {
    margin-bottom: 2rem;
    max-width: 100%;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: #2c3e50;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .logo img {
    height: 50px;
  }

  .project-info {
    color: white;
    text-align: right;
  }

  .project-info h1 {
    margin: 0;
    font-size: 1.8rem;
    letter-spacing: 1px;
  }

  .project-info p {
    margin: 0;
    font-size: 1.1rem;
    color: #ecf0f1;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .sidebar, .content {
      width: 100%;
      padding: 1rem;
    }

    .navbar {
      flex-direction: column;
      text-align: center;
    }

    .project-info {
      text-align: center;
    }
  }

  .footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1.5rem;
    /* Remove position fixed */
    margin-top: auto; /* Pushes the footer to the bottom of the page when there is little content */
    width: 100%;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  }

  .footer-content p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  .footer-links {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .footer-links li {
    display: inline;
  }

  .footer-links a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1rem;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
</style>

<header>
  <nav class="navbar">
    <div class="logo">
      <img src="/cornellAssets/amst2106/project2/project2.svg" alt="Project Logo">
    </div>
    <div class="project-info">
      <h1>Project Two - An Audio Archive</h1>
      <p>A collection of intimate family conversations, preserving heritage through sound.</p>
    </div>
  </nav>
</header>

<!-- Move reflection below the header -->
<div class="reflection">
  <p>
    These audio recordings capture intimate moments with my parents, offering a window into the cultural heritage, traditions, and stories that have shaped the identity of my family. Each sequence is not just a recording but a living narrative of our roots—from my parents' memories of growing up in rural El Salvador to their new life here in the United States. Through these sounds, I hope to preserve our family history and the richness of our Salvadoran-American experience for future generations.
  </p>
</div>

<main>
  <div class="sidebar">
    <ul class="sequence-list">
      {#each sequences as sequence, index}
        <button on:click={() => loadAudio(index)}>
          {sequence.title}
        </button>
      {/each}
    </ul>
  </div>

  <div class="main-content">
    <div class="content">
      {#if currentTitle}
        <div class="details">
          <h2>{currentTitle}</h2>
          <p>{currentDescription}</p>
        </div>

        <div class="audio-controls">
          <div class="controls">
            <button on:click={previousSequence}>Previous</button>
            <button on:click={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button on:click={nextSequence}>Next</button>
          </div>

          <input class="progress-bar" type="range" min="0" max="{duration}" step="0.1" value="{currentTime}" on:input={seekAudio} />

          <div class="time">
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
          </div>
        </div>

        {#if isLoading}
          <p class="loading">Loading...</p>
        {/if}
      {/if}
    </div>
  </div>
</main>

<footer class="footer">
  <div class="footer-content">
    <p>© 2024 Project Two - An Audio Archive.</p>
    <p>Created by Anderson Ramirez, ar2527</p>
    <ul class="footer-links">
      <li><a href="mailto:ar2527@cornell.edu">Contact Me</a></li>
    </ul>
  </div>
</footer>