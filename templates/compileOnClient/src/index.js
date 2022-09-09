import hbs from 'handlebars';
import pageIndex from './pages/index.tmp'
import './patrials/news-card.tmp';

const data = {
    posts: [
        {
            cardtemplate: 'blue',
            title: 'news 1',
            tags: [
                'car',
                'bmw'
            ]
        },
        {
            title: 'news 2',
            tags: [
                'people'
            ]
        },
        {
            title: 'news 3',
            tags: [
                'home',
                'house',
                'flat'
            ]
        }
    ]
}

const templateIndexPage = hbs.compile(pageIndex);
const indexPage = templateIndexPage(data);

const rootNode = document.getElementById('root');
rootNode.innerHTML = indexPage;

