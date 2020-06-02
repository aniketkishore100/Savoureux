import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImgOverlay, CardImg, CardText } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    onSelectDish(dish) {
        this.setState({ selectedDish: dish })
    }

    // renderDish(dish){
    //     if(dish != null){
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name}/>
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         )
    //     }
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onSelectDish(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu};
                </div>
                <DishDetail select_dish = {this.state.selectedDish}/>             
            </div>
        );
    }
}

export default Menu;