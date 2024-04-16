export class AppDrawer extends HTMLElement {
  // Register observedAttributes,
  // otherwise `attributeChangedCallback` will not pick them up
  static observedAttributes = ['collapsed'];
  private shadow;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = style + html;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadow
      ?.getElementById('closeBtn')
      ?.addEventListener('click', () => this.toggleIsCollapsed());
  }

  attributeChangedCallback(name: string, oldValue: string) {
    // Prevent attribute initialization to trigger actions;
    if (!oldValue) return;

    if (name == 'collapsed') {
      this.toggleIsCollapsed();
    }
  }

  toggleIsCollapsed() {
    this.shadow.querySelector('.app-drawer')?.classList.toggle('collapsed');
  }
}

window.customElements.define('app-drawer', AppDrawer);

const html = `
  <div class="app-drawer collapsed" part="app-drawer">
    <div id="closeBtn" class="app-drawer__close part="app-drawer-close">
      <button class="app-drawer__close__btn" type="button" part="app-drawer-close-btn">&times</button>
    </div>
    <div part="app-drawer-body">
      <slot name="default">DEFAULT SLOT<slot>
    </div>
  </div>
`;

const style = `
<style>
.app-drawer {
  --app-drawer-height: 48vh;
  position: fixed;
  flex-direction: column;
  background: var(--card-background-color);
  padding: calc(var(--td-gap) * 2);

  border: var(--td-border);
  border-color: orange;
  border-radius: var(--border-radius);

  height: var(--app-drawer-height);
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;

  transition: .4s bottom;
  background: orangered;
}

.app-drawer.collapsed {
  bottom: calc(var(--app-drawer-height) * -1);
  transition: .4s bottom;
}

.app-drawer__close {
  display: flex;
  justify-content: end;
}

.app-drawer__close__btn {
  background: transparent;
  box-shadow: none;
  border: 0;
  color: inherit;
  font-size: 24px;
  width: 40px;
  height: 40px;
}

</style>
`;
