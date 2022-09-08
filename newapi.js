
const loadarticles = articlename => {
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-08&sortBy=publishedAt&apiKey=10515da3b4684614b2a8f3fb82c85b1c`;

        fetch(url)
                .then((res) => res.json())
                .then((data) => articlesdisplay(data.articles));


};

const articlesdisplay = articles => {

          const maindivcontainer =
				document.getElementById("maindivcontainer");
        articles.forEach((article) => {
                console.log(article);
                // console.log(article.author)
                // console.log(article.content);
              
                const div = document.createElement('div');
                div.innerHTML = `
                 <div class="card mb-3" style="">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${
						article.urlToImage
					}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                                        <h3>${article.title}</h3>
                    <h5 class="card-title">Author : ${article.author ? article.author:'Author name is not available'}</h5>
                    <p class="card-text">${article.content}</p>
                    <p class="card-text">${article.description}</p>
                    <p class="card-text">${article.publishedAt}</p>
                    <p class="card-text">Source : ${article.source.name} ,${
					article.source.id
						? article.source.id
						: "Id is not available"
				} <span></span></p>
                     <p class="card-text">  <a href="${article.url}">${
					article.url
				}</a></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
                
                
                `;

                maindivcontainer.appendChild(div);
        });

};
loadarticles()
        ;