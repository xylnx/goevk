export class AppLayout extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = style + html;

    shadowRoot.appendChild(template.content.cloneNode(true));

    // React to clicks on footer links
    shadowRoot.querySelector('footer')!.addEventListener('click', (event) => {
      const footerLinks = shadowRoot.querySelectorAll('footer a');

      const linkClicked = Array.from(footerLinks).find(
        (fl) => fl === event.target,
      );

      if (linkClicked) {
        footerLinks.forEach((fl) => fl.classList.remove('active'));
        linkClicked.classList.add('active');
        this.emit({
          type: `click-${linkClicked.id}`,
          detail: { target: linkClicked.id },
        });
      }
    });
  }
  emit({ type = 'default', detail = {} }) {
    const event = new CustomEvent(`app-layout-${type}`, {
      bubbles: true,
      cancelable: true,
      detail,
    });
    return this.dispatchEvent(event);
  }
}

window.customElements.define('app-layout', AppLayout);

const IconTriangle = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
</svg>
`;

const IconCircle = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
`;

const IconSquare = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
</svg>
`;

const footerNav = `
<style></style>
<nav>
  <ul>
    <li>
      <a id="btn-1" class="active" href="#">
	${IconSquare}
	<span>Tab 1</span>
      </a>
    </li>
    <li>
      <a id="btn-2" href="#">
	${IconTriangle}
	<span>Tab 2</span>
      </a>
    </li>
    <li>
      <slot name="button-3">
      <a id="btn-3" href="#">
	${IconCircle}
	<span>Tab 3</span>
      </a>
      </slot>
    </li>
  </ul>
</nav>
`;

const html = `
<header part="header">
  <slot name="header">HEADER</slot>
</header>
<main part="main">
  <slot name="main">MAIN</slot>
</main>
<footer part="footer">
  <slot name="footer">${footerNav}</slot>
</footer>
`;
const style = `
<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  :host {

    display: flex;
    flex-direction: column;
    height: 100vh;
    /* Account for safari address bar */
    height: -webkit-fill-available;

    overflow-x: hidden;
    max-width: 840px;
    margin: auto !important;
  }
  main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--al-bg-main);
  }
  header, footer {
    background: var(--al-bg-header);
  }
  footer {
    background: var(--al-bg-footer, var(--al-bg-header));
  }


ul {
  display: flex;
  justify-content: space-between;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 33%;
}
a {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--al-text, inherit);
  text-decoration: none;
  padding: 8px;
  transition: color .4s ease;
}
a svg, a span { pointer-events: none; }
a span {
  width: 100%;
  display: flex;
  justify-content: center;
}
a.active {
  color: var(--al-active, red);
  transition: color .4s ease;
}

</style>
`;
