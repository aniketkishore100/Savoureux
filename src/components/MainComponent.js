import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
 
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            leader:LEADERS,
            promotions: PROMOTIONS,
            comments: COMMENTS
        };
    }


    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish)=>dish.featured===true)[0]}
                leader = {this.state.leader.filter((leader)=>leader.featured===true)[0]}
                promotion = {this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                    />)
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => {
                        return (
                            <Menu dishes={this.state.dishes} />
                        )
                    }} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;
