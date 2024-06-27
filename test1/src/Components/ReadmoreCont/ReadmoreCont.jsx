import "./ReadmoreCont.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function ReadmoreCont() {
  return (
    <div className=".readmorecont">
    <h1 style={{textAlign:"center", marginTop:"100px",marginBottom:"50px"}}>Network of builders helping startup scale</h1>

    <div className="readmorewrap">
        <div className="readmore">
            <p style={{fontWeight:"500",fontSize:"24px", font:"matter", padding:"15px"}}>Work with service incubators to expedite your time-to-market</p>
            <p style={{fontWeight:"400",fontSize:"17px", font:"matter", lineHeight:"27,2px",padding:"15px"}}>Collaborate with our meticuliously choosen service partners, 
            each with a vested interest ensuring a shared commitment to success in the game of venture builing.</p>
            <p style={{fontWeight:"600",fontSize:"17px", font:"matter", lineHeight:"27,2px", padding:"15px", }}>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer
            to build the MVP of your app or web application and validate it </p>

            <div style={{width:"116.97px",height:"27px",gap:"4px"}}>
                <p><strong><u>Learn More</u></strong>  <FontAwesomeIcon icon={faArrowRight} size="20"/>
                </p>
                
            </div>
        </div>
        <div className="readmore">
        <p style={{fontWeight:"500",fontSize:"24px", font:"matter", padding:"15px"}}>Access funding after your mvp is validated</p>
            <p style={{fontWeight:"400",fontSize:"17px", font:"matter", lineHeight:"27,2px",padding:"15px"}}>startup that have build and validated their product can take advantage
            of their financial resources of the SNC investors network, elevating their potentials for success in the in the venture capital landscape.</p>
            <p style={{fontWeight:"600",fontSize:"17px", font:"matter", lineHeight:"27,2px", padding:"15px", }}>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months. </p>

            <div style={{width:"116.97px",height:"27px",gap:"4px"}}>
                <p><strong><u>Learn More</u></strong>  <FontAwesomeIcon icon={faArrowRight} size="20"/>
                </p>
                
            </div>
            
        </div>
        
    </div>

    </div>
  )
}

export default ReadmoreCont