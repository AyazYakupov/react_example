import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent'
import About from './AboutComponent'
import { addComment, fetchDishes, fetchComments, fetchPromotions } from '../redux/ActionCreators'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {actions} from 'react-redux-form'


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments: state.comments
  }
};
const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromotions: () => dispatch(fetchPromotions()),
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});


class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromotions();
    this.props.fetchComments();
  }

  render () {
    const HomePage = () => {
      return (
        <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotionsLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}/>
      )
    }
    const DishWithId = ({match}) => {
      return (
        <DishDetail 
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          addComment={this.props.addComment}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          commentsLoading={this.props.promotions.isLoading}
          commentErrMess={this.props.comments.errMess}
          />
      )
    }
    return (
        <div>
            <Header />
            <Switch>
              <Route path='/home' component={HomePage}/>
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
              <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
              <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
