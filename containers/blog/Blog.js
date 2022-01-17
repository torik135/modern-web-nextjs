// import components
import { Article } from "../../components"

// import article data
import articleData from "./ArticleData"

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening,<br />We are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__group">
                    {articleData.map((item, index) => (
                        <Article
                            blogImg={item.img}
                            date={item.date}
                            title={item.title}
                            key={item.title + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
