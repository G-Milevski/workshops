import hbs from 'handlebars';

const template = `
<a class="news-card news-card_blue" href="./post.hbs">
    <div>
        {{#each tags}}
            <div class="tag tag_blue">{{this}}</div>
        {{/each}}
    </div>
    <h2 class="news-card__title">{{title}}</h2>
    <div>13 dec 2020</div>
</a>
`

hbs.registerPartial('news-card', template);