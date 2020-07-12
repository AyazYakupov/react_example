import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

function RenderDish ({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}
function RenderComments({comments}) {
    if (comments != null) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        let date = new Date(comment.date);
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
const DishDetail = (props) => {
    if (props.selectedDish != null){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1"><RenderDish dish={props.selectedDish}/></div>
                <div className="col-12 col-md-5 m-1"><RenderComments comments={props.selectedDish.comments}/></div>
            </div>
            )
    }
    else {
        return (<div></div>)
    }
}

export default DishDetail