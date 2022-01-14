import Feature from '../../components/feature/Feature'

const title1 = 'What is GPT-3'
const text1 = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'

const title2 = 'Chatbots'
const text2 = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'

const title3 = 'Knowledgebase'
const text3 = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'

const title4 = 'Education'
const text4 = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'


const GPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="gpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title={title1} text={text1} />
            </div>

            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>

            <div className="gpt3__whatgpt3-container">
                <Feature title={title2} text={text2} />
                <Feature title={title3} text={text3} />
                <Feature title={title4} text={text4} />
            </div>
        </div>
    )
}

export default GPT3
