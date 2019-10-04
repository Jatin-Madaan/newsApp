console.log("This is my project file");
let source = 'the-hindu';
let apiKey = 'c8a8565ff38c4cc2856301cff553b022'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function() {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let result = "";
        articles.forEach((element,index) => {
            result +=  `<div class="card">
            <div class="card-header bg-primary" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed bg-primary text-white" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <br><a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;

        });
        newsAccordion.innerHTML = result;
    }
    else{
        console.error("error while loading");
    }
};

xhr.send();
