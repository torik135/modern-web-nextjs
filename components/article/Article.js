const Article = ({ blogImg, date, title }) => {
    return (
        <div className="gpt3__blog-container__article">
            <div className="gpt3__blog-container__article-image">
                <img src={blogImg} alt="blog-img" />
            </div>
            <div className="gpt3__blog-container__article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read More</p>
            </div>
        </div>
    )
}

export default Article
