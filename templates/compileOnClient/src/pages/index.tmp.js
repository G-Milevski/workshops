import image from '../../asserts/Rectangle11.png';

export default `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="container">
    <div class="mobile-container">
        <header class="header">
            <img src="${image}" alt="rentagle">
        </header>
        <main class="main">
            <ul class="news-list">
                {{#each posts}}
                    <li>
                        {{> news-card this}}
                    </li>
                {{/each}}
            </ul>
            <button class="button-primary button-primary_loading">Показать еще 6</button>
        </main>
    </div>
</body>
</html>
`