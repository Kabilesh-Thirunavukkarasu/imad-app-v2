var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articleone={
    title:'Article-One|Kabilesh',
    heading:'Article-One',
    date:'Feb 19, 2017',
    content:`  
            <p>
                Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.
            </p>
            <p>
                Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.
            </p>
            <p>
                Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.Created the content for first Article.
            </p>
      `
};

function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="content">
                <a href='/'> Home </a>
                <hr/>
                <h1>${heading} </h1>
                <h4> ${date}</h4>
                ${content}
            </div>
        </body>
    </html>

`;
    return htmlTemplate;
}

app.get('/article-one',function(req,res) {
   res.send(createTemplate(articleone));
});

app.get('/article-two',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/5E8B2160-2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '5E8B2160-2.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
