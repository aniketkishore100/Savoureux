import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';


function RenderDish({ select }) {
    if (select != null) {
        return (
            <Card>
                <CardImg top src={select.image} alt={select.name} />
                <CardBody>
                    <CardTitle>{select.name}</CardTitle>
                    <CardText>{select.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({select}) {
    if (select != null) {
        return (
            <div>
                <h4>Comments</h4>
                {
                    select.comments.map((reviews) => {
                        return (
                            <div key={reviews.id}>

                                <ul className="list-unstyled">
                                    <li className="m-2">{reviews.comment}</li>
                                    <li></li>
                                    <p className="m-2">-- {reviews.author}, {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(reviews.date)))}</p>
                                </ul>
                            </div>
                        )

                    })
                }
            </div>

        )

    }
    else {
        return (
            <div></div>
        )

    }
}

const DishDetail = (props) => {
    const select = props.dish;
    if (select != null) {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                        <RenderDish select = {select}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">

                        <RenderComments select = {select}/>
                    </div>

                </div>

            </div>



        )

    }
    else{
        return(
            <div></div>
        )
    }

}


export default DishDetail