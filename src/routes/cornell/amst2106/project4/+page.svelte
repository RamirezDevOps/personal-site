<script>
    // Paths to your video and PDF in the static folder
    const videoSrc = '/cornellAssets/amst2106/project4/video.mp4';
    const pdfSrc = '/cornellAssets/amst2106/project4/paper.pdf';
  </script>
  
  <style>
  
    .header {
      background-color: #444;
      color: #fff;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .header h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  
    .nav a {
      color: #fff;
      text-decoration: none;
      margin-left: 1.5rem;
      font-size: 1rem;
    }
  
    .nav a:hover {
      text-decoration: underline;
    }
  
    .container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      flex: 1;
    }
  
    h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.5rem;
    }
  
    video {
      width: 100%;
      max-height: 500px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 2rem;
      background-color: #000;
    }
  
    iframe {
      width: 100%;
      height: 1100px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }
  
    footer {
      background-color: #444;
      color: #fff;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
      font-size: 1rem;
    }
  
    @media (max-width: 768px) {
      iframe {
        height: 700px;
      }
    }
  </style>
  
  <header class="header">
    <h1>Project 4: Legacies</h1>
    <nav class="nav">
      <a href="#video">Interview</a>
      <a href="#paper">Commentary</a>
    </nav>
  </header>
  
  <div class="container">
    <h2 id="video">Interview</h2>
    <video controls>
      <source src={videoSrc} type="video/mp4" />
      <track kind="captions" srclang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  
    <h2 id="paper">Commentary</h2>
    <iframe src={pdfSrc} title="MLA Paper"></iframe>
  </div>
  
  <footer>
    <p>&copy; 2024 Anderson Ramirez, ar2527. All rights reserved. | Project 4: Legacies</p>
  </footer>
  