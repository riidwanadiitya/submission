class MenuItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set menu(menu) {
        this._menu = menu;
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
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 white;
                   border-radius: 10px;
                   overflow: hidden;
                   color: white;

               }
              
               .gambar-menu {
                   width: 100%;
                   max-height: 200px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .menu-info {
                   padding: 24px;
               }
              
               .menu-info > h2 {
                   font-weight: lighter;
               }
              
               .menu-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 20; /* number of lines to show */
               }
           </style>
           <a href="${this._menu.strMealThumb}" target="_blank"><img class="gambar-menu" src="${this._menu.strMealThumb}" alt="Gambar"></a>
           <div class="menu-info">
               <h1>${this._menu.strMeal} from ${this._menu.strArea} </h1>
               <h4><a href="${this._menu.strYoutube}" target="_blank">Click for video</a></h4>
               <p>${this._menu.strInstructions}</p>
           </div>`;
    }
}

customElements.define("menu-item", MenuItem);