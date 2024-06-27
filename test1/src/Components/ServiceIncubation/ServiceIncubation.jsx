//import React from 'react'
import "./ServiceIncubation.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"



function ServiceIncubation() {
  return (
    <div className="ServiceIncubationwrap">
    <div className="wrap">
    <div className="topwrap">
    <h2>Our Service Incubation Model</h2>
    <p>The service incubation model is an alternate funding model for startup that allows proffesionals to offer their
    service to startup in return for a minute equity (usually between 0.5% to 15%) in the startup. As a service Incubator
    you will see your share grow as much as 1000% in 12 to 24 months as been first to invest
    </p>

    </div>

    </div>
    <div className="middlewrap">
    <div className="top">
    <h5>Hypothesis</h5>
    <h6>Just a few reasons we know its time for this model within the ecosystem</h6>
    </div>
        <div className="middlewrap1">
            <div className="middle"></div>
            <div className="middle"></div>
            <div className="middle"></div>
        </div>
        <div></div>
    </div>
    <div style={{width:"116.97px",height:"27px",gap:"4px"}}>
                <p><strong><u>Become a service Incubator</u></strong>  <FontAwesomeIcon icon={faArrowRight} size="20"/>
                </p>
                
    </div>

    </div>
  )
}

export default ServiceIncubation