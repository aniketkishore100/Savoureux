import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form'

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

function RenderComments({ selectedComments,addComment,dishId }) {
    if (selectedComments != null) {
        return (
            <div>
                <h4>Comments</h4>
                {
                    selectedComments.map((reviews) => {
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
                <CommentForm dishId ={dishId} addComment={addComment}/>
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
    const selectedComments = props.comment
    if (select != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{select.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                        <RenderDish select={select} />
                    </div>
                    <div className="col-12 col-md-5 m-1">

                        <RenderComments selectedComments={selectedComments} 
                        addComment = {props.addComment}
                        dishId = {props.dish.id}/>

                    </div>

                </div>

            </div>



        )

    }
    else {
        return (
            <div></div>
        )
    }
}
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
            commentModalOpen: !this.state.commentModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal()
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comment)

    }
    render() {
        const minLength = (len) => (val) => !(val) || val.length >= len
        const maxLength = (len) => (val) => (val) && val.length <= len
        return (
            <>
                <div className='container'>
                    <div>
                        <Button outline onClick={this.toggleModal}>
                            <span><i className='fa fa-pencil'></i> </span>
                            Submit Comment
                        </Button>
                    </div>
                    <Modal isOpen={this.state.commentModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => { this.handleSubmit(values) }}>
                                <Row className='form-group'>
                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model='.rating' name='rating' id='rating' className='form-control'>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col>
                                        <Label htmlFor='author'>Your Name</Label>
                                        <Control.text model=".author" name="author" id="author" className='form-control' validators=
                                            {{
                                                minLength: minLength(3), maxLength: maxLength(15)
                                            }} />
                                        <Errors
                                            className='text-danger' model='.author' show='touched'
                                            messages={{

                                                minLength: "Must be Greater than 2 characters",
                                                maxLength: "Must be 15 characters or Less"
                                            }} />
                                    </Col>

                                </Row>
                                <Row className='form-group'>
                                    <Col>
                                        <Label htmlFor='comment'>Comment</Label>
                                        <Control.textarea model='.comment' name='comment' id='comment' rows='6' className='form-control' />
                                    </Col>

                                </Row>
                                <Button type='submit' color='primary'>Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>

            </>
        )
    }
}


export default DishDetail