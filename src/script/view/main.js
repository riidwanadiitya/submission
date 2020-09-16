import '../component/menu-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const menuListElement = document.querySelector("menu-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchMenu(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        menuListElement.menus = results;
    };

    const fallbackResult = message => {
        menuListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;