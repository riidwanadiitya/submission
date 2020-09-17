class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: maroon;
                background-image: url("/src/script/view/gambar/1.png");
                background-size: 60px;
                background-repeat: no-repeat;
                background-position-x: 180px;
                color: white;
                box-shadow: 0 4px 8px 0 white;
            }
            h2 {
                padding: 16px;
            }
        </style>
        <h2>Let's Cooking</h2>`;
    }
}

customElements.define("app-bar", AppBar);