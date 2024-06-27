import "./Sincwithus.css"
//import Program_1 from "../../assets/Program_1.jpg";
//import Program_2 from "../../assets/Program_2.jpg";
import goodnessweb5 from "../../assets/goodnessweb5.png";



const Sincwithus = () => {
  return (
    <div className="programs" style={{background:"#FFFFFF"}}>
    <div id="scroll1" className="program" style={{paddingLeft:"30px"}}>
          <h2>SINC Partners is a service icubation company</h2>
          <p>Connecting exparts in product development and growth marketing willing to offer their services to amaizing
          startups in exchange for minute equity (usually 0.5%, 0.2%)</p>
         
          <button className='btn btn2' style={{marginTop:"20px"}}>SINC With us</button>
    </div>

    <div className="program">
        <img id="scroll2" src={goodnessweb5} alt=""/>
        <div className="caption">
            
        </div>
    </div>

    <div className="program">
        <img id="scroll3" src={goodnessweb5} alt=""/>
        <div className="caption">
            
        </div>
    </div>
    <div className="scrollwrap">
    <a href="#scroll1"></a>
    <a href="#scroll2"></a>
    <a href="#scroll3"></a>
    </div>
    

    </div>
  )
}

export default Sincwithus