import St from 'gi://St';
import Clutter from 'gi://Clutter';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';

const NAME = 'Test Menu';
const ROLE = 'TestMenu';

export default class Extension {
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
  const button = new PanelMenu.Button(0.5, NAME);

  const label = new St.Label({ text: NAME });
  label.clutter_text.y_align = Clutter.ActorAlign.CENTER;
  button.add_child(label);

  const item1 = new PopupMenu.PopupMenuItem("Item 1");
  button.menu.addMenuItem(item1);

  const item2 = new PopupMenu.PopupMenuItem("Item 2");
  button.menu.addMenuItem(item2);

  return button;
}
