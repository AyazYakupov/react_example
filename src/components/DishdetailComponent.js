import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

class DishDetail extends Component {
    renderDish () {
        return (
            <Card>
                <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                <CardBody>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    renderComments() {
        if (this.props.selectedDish.comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.props.selectedDish.comments.map((comment) => {
                            let date = new Date(Date(comment.date));
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {date.toLocaleDateString("en-US", {month: 'short', day: 'numeric', year: 'numeric'})}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    render () {
        if (this.props.selectedDish != null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
                    <div className="col-12 col-md-5 m-1">{this.renderComments()}</div>
                </div>
                )
        }
        else {
            return (<div></div>)
        }
    }
}

export default DishDetail