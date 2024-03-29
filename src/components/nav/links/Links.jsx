

import { Link } from "react-router-dom";



const Links =()=>{

    return(
        <>
         <div className= "linksLogs">
             <div className= "logs">
                <div id="img"><img src="C:\Users\HELEN\Desktop\NavLink\src\assets\p3.jpg" alt="" /></div>

                 <div className= "btn">
                      <button>Login</button>
                      <button>Login</button>
                 </div>
             </div>
             <div className= "links">
                   <Link to ='/'>Home</Link>
                   <Link to ='/about'>About</Link>
                   <Link to ='/contact'>Contact</Link>
                   <Link to ='/settings'>Settings</Link>
              </div>
          </div>
        </>
    )
}

export default Links;

