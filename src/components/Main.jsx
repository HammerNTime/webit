import React, {useState} from 'react'
import mainStyles from "./mainStyles.module.css"

function Main({ pickedColor }) {
    const [isActive, setActive] = useState(false)

    const toggleActiveClass = () => {
        setActive(!isActive)
    }
  
   
  
    return (

        <>
            <div className={mainStyles.site__container}>
               

       
       <header style={{color: "black", backgroundColor:"transparent"}}>
           <div className={mainStyles.logo} style={{color: "black", backgroundColor: "transparent"}}>Logo</div>
           <nav>
               <ul className={mainStyles.nav__links } style={{backgroundColor: "transparent"}}>
                   <li  style={{color: "black", backgroundColor: "transparent"}}>Home</li>
                   <li style={{color: "black", backgroundColor: "transparent"}}>Pages</li>
                   <li style={{color: "black", backgroundColor: "transparent"}}>About Us</li>
               </ul>
           </nav>
           <a href="#"><button className={mainStyles.nav__button} style={{color: "black", backgroundColor: "transparent"}}>Contact</button></a>
       </header>
       <section className={mainStyles.search__container} style={{backgroundColor: "#ccc"}}>
       <input type="text" className={mainStyles.search__input} placeholder="Lorem Ipsum" />
      
      <button type="submit" className={mainStyles.search__button} style={{backgroundColor: "#000", color: "#fff"}}>Search</button>

       </section>
       <section className={mainStyles.extra__links}  style={{backgroundColor: "#ccc"}}>
        <div className={mainStyles.extra__link_item} style={{backgroundColor: "red"}}><p>HI</p></div>
        <div className={mainStyles.extra__link_item} style={{backgroundColor: "red"}}><p>HI</p></div>
        <div className={mainStyles.extra__link_item} style={{backgroundColor: "red"}}><p>HI</p></div>
        <div className={mainStyles.extra__link_item} style={{backgroundColor: "red"}}><p>HI</p></div>
        <div className={mainStyles.extra__link_item} style={{backgroundColor: "red"}}><p>HI</p></div>
        
       </section>
       <section className={mainStyles.main__container}>
           <div className={mainStyles.left__side} style={{backgroundColor: "red"}}></div>
           <div className={mainStyles.right__side}>
               <div className={mainStyles.right__info1} style={{backgroundColor: "rgb(36, 3, 3)"}}></div>
               <div className={mainStyles.right__info2} style={{backgroundColor: "rgb(183, 0, 255)"}}></div>
           </div>
       </section>
       <footer style={{backgroundColor: `${pickedColor}`}} >
Hi, I am the footer
                </footer>
                <div onClick={ toggleActiveClass} className={isActive ? mainStyles.selected : null} style={{width: "100%", height: "50px", backgroundColor: "red", cursor: "pointer"}}>
                    
                </div>
                
       </div>
</>

    )
}

export default Main
