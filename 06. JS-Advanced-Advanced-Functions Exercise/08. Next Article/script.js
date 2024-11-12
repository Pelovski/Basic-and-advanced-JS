function getArticleGenerator(articles) {

   let content = document.getElementById('content');
   let count = 0;
    
   return () => {
        if(count < articles.length){
        let articleElement = document.createElement('article');
        articleElement.textContent = articles[count];
        content.prepend(articleElement);
        count++;
    }
   } 
}
