import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes())
});

class Main extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchDishes()
    }


    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured === true)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrmess={this.props.dishes.errmess}
                    leader={this.props.leaders.filter((leader) => leader.featured === true)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                />)
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errmess={this.props.dishes.errmess}
                    comment={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment} />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => {
                        return (
                            <Menu dishes={this.props.dishes} />
                        )
                    }} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Route exact path='/aboutus' component={() => {
                        return (
                            <About leaders={this.props.leaders} />
                        )
                    }} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
