// import Image from 'next/image'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">This Webpage is MODERN Looking. And this text is in GRADIENT Color</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus iure, dolorum voluptatum doloremque provident architecto vitae pariatur sunt ipsum eligendi obcaecati, iusto unde cum id totam impedit, ullam libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus iure</p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email..." />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <div className="gpt3__header-content__people-container">

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                        <img src="/img/img3.jpg" alt="people" className="gpt3__header-content__people-item" />

                    </div>
                    <p>6000 people already join for the last 24 hours</p>
                </div>

            </div>
            <div className="gpt3__header-image">
                <img src="/img/img3.jpg" alt="header-image" />
            </div>
        </div >
    )
}

export default Header
