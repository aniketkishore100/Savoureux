import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';



class DishDetail extends Component {

    
    renderDish(select) {
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

    rendercomments(select) {
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
                                        <p className="m-2">-- {reviews.author},{reviews.date}</p>
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


    render() {
        const select = this.props.select_dish;

        return (
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(select)}
                </div>
                <div className="col-12 col-md-5 m-1">
                
                    {this.rendercomments(select)}
                </div>

            </div>

        )
    }

}

export default DishDetail