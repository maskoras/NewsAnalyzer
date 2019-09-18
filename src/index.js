import "./style.css";
import Requests from './requests';
import NewsCardList from './news-card-list';

const newsCardList = new NewsCardList();
// новости я так и не почитал,
// ошибка Uncaught TypeError: Cannot read property 'totalResults' of null

if (JSON.parse(localStorage.getItem('data')).totalResults !== 0) {
    newsCardList.processing(JSON.parse(localStorage.getItem('data')));
    document.forms.search.elements.keywords.value = `${localStorage.getItem('keywords')}`
}

document.forms.search.addEventListener('submit', buttonClick);

function buttonClick(event) {
    event.preventDefault();
    const keywords = document.forms.search.elements.keywords.value;
    newsCardList.remove();
    new Requests().news(keywords, newsCardList.startPreloader, newsCardList.addToStorage, newsCardList.stopPreloader, newsCardList.renderError);
    newsCardList.connect();
    localStorage.setItem('keywords', keywords);
}
// нужна пошаговая инструкция как запустить проект 