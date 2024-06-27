import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='container'>
        
        
            
        <ul>
            <li>
            <div style={{borderWidth:"1px", borderStyle:"solid",padding:"5px",textAlign:"center"}}>S|NC</div>
            <h5>PARTNERS</h5>
            </li>
            <li>About</li>
            <li>SIP</li>
            <li>Studio</li>
            <li>SEEQ</li>
            <li>Platforms</li>
            <li>Innitiatives</li>
            <li>More</li>
            </ul>
        
        
        
      
      <ul>
          <li><button className='btn btn1'>SINC With Us</button></li>
          <li><button className='btn btn2'>Apply to SIP 1.0</button></li>
        </ul>
     
    </nav>
  )
}

export default Navbar