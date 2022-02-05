import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <img class="book-logo" src="assets/images/book logo.jpg" />
            <div class="navbar-burger" data-target="app-navbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="app-navbar" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="./index.html">
                Home
              </a>
              <a class="navbar-item" href="./myactivities.html">
                My Activities
              </a>
              <a class="navbar-item" href="./aboutus.html">
                About Us
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main class="container" id="main-container">
        <div id="modal-container"></div>
        <div class="mx-3" id="joke-container"></div>

        <div id="notification-container"></div>
        <div id="card-container" class="card-container"></div>

        <div class="choices-container" id="choices-container">
          <div class="buttons-container ml-3 mr-3">
            <button
              data-category="social"
              class="category-btn button is-large is-fullwidth no-border"
            >
              Social
              <i data-category="social" class="fas fa-users ml-3"></i>
            </button>
            <button
              data-category="education"
              class="category-btn button is-large is-fullwidth no-border"
            >
              Educational
              <i data-category="education" class="fas fa-book-reader ml-3"></i>
            </button>
            <button
              data-category="recreational"
              class="category-btn button is-large is-fullwidth no-border"
            >
              Recreational
              <i data-category="recreational" class="fas fa-video ml-3"></i>
            </button>
            <button
              data-category="relaxation"
              class="category-btn button is-large is-fullwidth no-border"
            >
              Relaxation
              <i data-category="relaxation" class="fas fa-couch ml-3"></i>
            </button>
            <button
              data-category="music"
              class="category-btn button is-large is-fullwidth no-border"
            >
              Music
              <i data-category="music" class="fas fa-music ml-3"></i>
            </button>
            <button
              data-category="random"
              class="category-btn button is-large is-fullwidth no-border"
            >
              Random
              <i data-category="random" class="fas fa-random ml-3"></i>
            </button>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="logo-container" id="logo-container">
          <img src="./assets/images/gifs/bored-as-showreel.gif" />
        </div>
        <div class="content has-text-centered">
          <p>
            <strong>Bored As Book made by </strong>
            <a href="./aboutus.html">a bunch of boring losers</a>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
