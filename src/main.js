import './style.css'

document.querySelector('#app').innerHTML = `
<header>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<section id="about">
  <h1>My Portfolio</h1>
  <p>Welcome to my simple web portfolio. I am a passionate developer creating amazing web experiences.</p>
</section>
<section id="projects">
  <h2>Projects</h2>
  <div class="project">
    <h3>Project ARKA</h3>
    <p>A cool web application built with modern technologies.</p>
  </div>
  <div class="project">
    <h3>Project vschool</h3>
    <p>An innovative solution for everyday problems.</p>
  </div>
</section>
<section id="contact">
  <h2>Contact</h2>
  <p>Feel free to reach out at <a href="mailto:arjunselvakumar@outlook.com">arjunselvakumar@outlook.com</a></p>
</section>
<footer>
  <p>&copy; 2023 My Portfolio</p>
</footer>
`
