import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
    return (
        <div className="row m-5 text-center">
            <div className="col-12 col-md m-3">
                <div className="bg-light">
                <img src={props.image} alt="500 x 325" className="img-fluid" />
                </div>
                <div>
                <h2>Card Tittle</h2>
                <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ducimus sequi? Laudantium fugit aliquid laborum quis quidem doloribus, explicabo, quasi beatae, molestiae aliquam veniam delectus unde quaerat voluptatem ipsum itaque.
                </p>
                </div>
            </div>
            <div className="col-12 col-md m-3">
                <div className="bg-light">
                <img src={props.image} alt="500 x 325" className="img-fluid" />
                </div>
                <div>
                <h2>Card Tittle</h2>
                <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ducimus sequi? Laudantium fugit aliquid laborum quis quidem doloribus, explicabo, quasi beatae, molestiae aliquam veniam delectus unde quaerat voluptatem ipsum itaque.
                </p>
                </div>
            </div>
            <div className="col-12 col-md m-3">
                <div className="bg-light">
                <img src={props.image} alt="500 x 325" className="img-fluid" />
                </div>
                <div>
                <h2>Card Tittle</h2>
                <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ducimus sequi? Laudantium fugit aliquid laborum quis quidem doloribus, explicabo, quasi beatae, molestiae aliquam veniam delectus unde quaerat voluptatem ipsum itaque.
                </p>
                </div>
            </div>
            <div className="col-12 col-md m-3">
                <div className="bg-light">
                <img src={props.image} alt="500 x 325" className="img-fluid" />
                </div>
                <div>
                <h2>Card Tittle</h2>
                <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ducimus sequi? Laudantium fugit aliquid laborum quis quidem doloribus, explicabo, quasi beatae, molestiae aliquam veniam delectus unde quaerat voluptatem ipsum itaque.
                </p>
                </div>
            </div>
        </div>
    )
}


Cards.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string
}

export default Cards;