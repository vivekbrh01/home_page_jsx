import React from "react";
import articles from "../data";
function Articles() {
	return (
		<div>
            <h4>Articles Section</h4>
            {console.log(articles)}
            {articles.map(article => {
                return <div>{article.title}
                    <img src={article.urlToImage} />
                </div>

            })}
		</div>
	);
}
export default Articles;
