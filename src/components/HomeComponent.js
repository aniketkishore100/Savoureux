import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

// we can add the RenderCard component here itself as it will not be used anywhere else as a component only in this file hence we add the RenderCard comp here itself
function RenderCard({ item ,isLoading,errmess}) {
    if (isLoading) {
        return (
            <div className="container">
                <div className='row'>
                    <Loading />
                </div>
            </div>
        )
    }
    else if (errmess) {
        return (
            <div className="container">
                <div className='row'>
                    <h4>{errmess}</h4>
                </div>
            </div>
        )
    }
    else
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )

}


function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errmess = {props.dishesErrmess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errmess = {props.promoErrmess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
                {/* here all the props are named the same because all the props ie dish promotion and leader have the same file structure so we can use the same variable in a caseee where all the json files have diff structurewe should give different names to all three instead of item  */}
            </div>
        </div>
    )
}

export default Home;