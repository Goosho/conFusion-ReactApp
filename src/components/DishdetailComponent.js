import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        const stg = "Comments"
        var commentDisplay;
        if(dish != null){
            commentDisplay = dish.comments.map((comt) => {
                return (
                    <div key={comt.id} >
                        <p>{comt.comment}</p>
                        <p>--{comt.author} , {comt.date}</p>
                    </div>
                );
            } );
        }
        if (dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h2>Comments</h2>
                        {commentDisplay}
                    </div>
                </div>
            );
        }
        else 
        {
            return (<div></div> );
        }
    }

    render(){
        return (
            <div className="container">
                {this.renderDish(this.props.dishSelected)}
            </div>
        );
    }
}

export default Dishdetail;