const { St, Clutter } = imports.gi;
const {
  main: Main,
  panelMenu: PanelMenu,
  popupMenu: PopupMenu
} = imports.ui;

const NAME = 'Test Menu';
const ROLE = 'TestMenu';

function init() {
  return new Extension();
}

class Extension {
  enable() {
    this.menu = buildMenu();
    Main.panel.addToStatusArea(ROLE, this.menu);
    log(`${NAME} enabled`);
  }

  disable() {
    this.menu.destroy();
    this.menu = null;
    log(`${NAME} disabled`);
  }
}

function buildMenu() {
  const button = new PanelMenu.Button(0, NAME);

  const label = new St.Label({ text: NAME });
  label.clutter_text.y_align = Clutter.ActorAlign.CENTER;
  button.add_child(label);

  const item1 = new PopupMenu.PopupMenuItem("Item 1");
  button.menu.addMenuItem(item1);

  const item2 = new PopupMenu.PopupMenuItem("Item 2");
  button.menu.addMenuItem(item2);

  return button;
}
