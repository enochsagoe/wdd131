:root {
  --purple: #3b0764;
  --purple-light: #5b21b6;
  --ink: #1f1f1f;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Lato", Arial, sans-serif;
  color: var(--ink);
  background: var(--white);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header and hamburger menu */
.site-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--purple);
  color: var(--white);
  padding: 0.75rem 1rem;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
}

.menu-toggle {
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}

.nav-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  background: var(--purple);
  z-index: 10;
}

.nav-menu.open {
  display: flex;
}

.nav-menu a {
  display: block;
  padding: 0.9rem 1rem;
  color: var(--white);
  text-decoration: none;
  font-weight: 700;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  background: var(--purple-light);
}

.menu-toggle:focus-visible,
.nav-menu a:focus-visible {
  outline: 3px solid var(--white);
  outline-offset: 2px;
}

/* Main content */
main {
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

main h1 {
  text-align: center;
  font-size: 1.25rem;
  margin: 1rem 0;
}

/* One column in mobile view */
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

figure {
  margin: 0;
  text-align: center;
}

figure img {
  display: block;
  width: 100%;
  height: auto;
}

figcaption {
  margin-top: 0.4rem;
  color: var(--purple);
  font-size: 0.95rem;
}

/* Footer */
footer {
  background: var(--purple);
  color: var(--white);
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}

footer p {
  margin: 0.25rem 0;
}