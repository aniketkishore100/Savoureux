import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';

function RenderLeader({ leader }) {
    return (
            <Media>
            <Media tag='li'>
                <Media left middle>
                    <Media object src={baseUrl + leader.image} alt={leader.name} className='my_image'/>
                </Media>
                <Media body className='ml-5'>
                    <Media heading>{leader.name}</Media>
                    <Media sub>{leader.designation}</Media>
                    <br />
                    <p>{leader.description}</p>
                </Media>
            </Media>  
            </Media>  
    )
}



function About(props) {
    let leaders = '';
    if(props.isLoading){
        leaders = <Loading/>
    }
    else{
    leaders = props.leaders.map((leader) => {
        return (
            <Fade in>
            <RenderLeader leader={leader} />
            </Fade>
        )
    })}

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2007, Savoureux quickly established itself as a culinary icon par excellence in France. With its unique cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in France.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Pixar</em>, a successful chain started by our CEO, Mr. Remy.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">29 June. 2007</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Pixar</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">4</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better take help of a rat than to just fix the dish without any knowledge.</p>
                                <footer className="blockquote-footer">Remy,
                                <cite title="Source Title">The Ratatouille,2007</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className='col-12'>
                    <Stagger in>{leaders}</Stagger>
                </div>
            </div>
        </div>
    );
}

export default About;    