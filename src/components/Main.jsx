import React, {useState} from 'react'
import mainStyles from "./mainStyles.module.css"

function Main({ pickedColor }) {
    const [isActive, setActive] = useState(false)
    const [backgrounds, setBackgrounds] = useState([])

    const toggleClass = () => {
        setActive(!isActive)
    }

    function changeColor(pickedColor, e){
        console.log(pickedColor)
        console.log(backgrounds[e.target.id])
        backgrounds[e.target.id] = pickedColor
        console.log(backgrounds)
        setBackgrounds(backgrounds)
        e.target.style.backgroundColor = pickedColor
        
    }
  
    return (

        <>
            <div className={mainStyles.site__container}>
               

       
       <header id="0" style={{color: "black", backgroundColor:backgrounds[0]}} onClick={(e) => changeColor(pickedColor, e)}>
           <div id="1" className={mainStyles.logo} style={{color: "black", backgroundColor: backgrounds[1]}} onClick={(e) => changeColor(pickedColor, e)}>Logo</div>
           <nav>
               <ul className={mainStyles.nav__links } style={{backgroundColor: "transparent"}}>
                   <li  style={{color: "black", backgroundColor: "transparent"}}>Home</li>
                   <li style={{color: "black", backgroundColor: "transparent"}}>Pages</li>
                   <li style={{color: "black", backgroundColor: "transparent"}}>About Us</li>
               </ul>
           </nav>
           <a href=""><button className={mainStyles.nav__button} style={{color: "black", backgroundColor: "transparent"}}>Contact</button></a>
       </header>
       <section id="1" className={mainStyles.search__container} onClick={(e) => changeColor(pickedColor, e)} style={{backgroundColor:backgrounds[2]}}>
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
           <div id="my_target" className={mainStyles.left__side} onClick={(e) => changeColor(pickedColor, e)} style={{backgroundColor: "blue"}}></div>
           <div className={mainStyles.right__side} onClick={(e) => changeColor(pickedColor, e)}>
               <div className={mainStyles.right__info1} style={{backgroundColor: "rgb(36, 3, 3)"}}></div>
               <div className={mainStyles.right__info2} style={{backgroundColor: "rgb(183, 0, 255)"}}></div>
           </div>
       </section>
       <footer style={{backgroundColor: `${pickedColor}`}} >
Hi, I am the footer
                </footer>
                
       </div>
</>

    )
}

export default Main
