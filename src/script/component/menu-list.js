import './menu-item.js';

class MenuList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set menus(menus) {
        this._menus = menus;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._menus.forEach(menu => {
            const menuItemElement = document.createElement("menu-item");
            menuItemElement.menu = menu;
            this.shadowDOM.appendChild(menuItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: white(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
           </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}


customElements.define("menu-list", MenuList);