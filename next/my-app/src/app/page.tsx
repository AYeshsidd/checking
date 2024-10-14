import Image from "next/image";
import Link from "next/link";

import React from "react"

function App(){
  return(
  <>
  
  <h1 style={{background:"darkgreen",color:"whitesmoke"}}>HELLO PAKISTAN </h1>
  <br></br>
  <center><img src="https://t4.ftcdn.net/jpg/03/37/25/05/360_F_337250515_OM5JccbFGjxAlYI2Q0Fnv5ABnGFCoKP3.jpg" alt="My flag" title="Zindabad" width={400}/></center>
  <br></br>
  <h1 style={{backgroundColor:"red" ,color:"whitesmoke"}}>HELLO CHINA </h1>
  <br></br>

  <center><img src="https://media.istockphoto.com/id/878587072/photo/china-flag-a-series-of-flags-of-the-world.jpg?s=612x612&w=0&k=20&c=UaEuM-KRtk71BDDNTVpmTO-wJS2TsC1D0PGcMxJyeyA=" alt="chi-choo flag" title="Cheen" width={450}/></center>
  <br></br>

 
  {/* <p><iframe width="500" height="322" src="https://www.youtube.com/embed/X9X89l9D17o" title="Education, Business, &amp; Success: Insights for Future Leaders ft. Saqib Azhar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
   */}
  <br></br>
  <h1>
  <Link href="./Burger">Burger shop</Link>
        </h1>
        <h1>
          <Link href="./Pizza">Pizza shop</Link>
        </h1>
        <h1>
          <Link href="./BBQ">BBQ shop</Link>
        </h1>
  </>
  
  )

}
export default App;