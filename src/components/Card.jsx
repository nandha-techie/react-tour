import data from '../helpers/data.js';

const Card = () => {
    return(
        <div className="card_container">
            { data?.map(item => (
                <div className="card" key={item.id}>
                    <h2 className="card_title">{ item.title }</h2>
                    <div className="img_container">
                        <img src={item.image} alt={ item.title } />
                    </div>
                    <div className="card_desc card_hover">
                        <p>{item.desc}</p>
                    </div>
                </div>
                ))
            }
        </div>
        
    )
}
export default Card;