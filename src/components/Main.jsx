import React from 'react'
import mainStyles from "./mainStyles.module.css"

function Main() {
    return (
        <>
        <div className={mainStyles.site__container}>

       
       <header style={{color: "black", backgroundColor:"transparent"}}>
           <div className={mainStyles.logo} style={{color: "black", backgroundColor: "transparent"}}>Logo</div>
           <nav>
               <ul className={mainStyles.nav__links} style={{backgroundColor: "transparent"}}>
                   <li  style={{color: "black", backgroundColor: "transparent"}}>Home</li>
                   <li style={{color: "black", backgroundColor: "transparent"}}>Pages</li>
                   <li style={{color: "black", backgroundColor: "transparent"}}>About Us</li>
               </ul>
           </nav>
           <a href=""><button className={mainStyles.nav__button} style={{color: "black", backgroundColor: "transparent"}}>Contact</button></a>
       </header>
       <section className={mainStyles.search__container}>
       <input type="text" className={mainStyles.search__input} placeholder="Lorem Ipsum" />
      
      <button type="submit" className={mainStyles.search__button}>Search</button>

       </section>
       <section className={mainStyles.extra__links}>
        <div className={mainStyles.extra__link_item}><p>HI</p></div>
        <div className={mainStyles.extra__link_item}><p>HI</p></div>
        <div className={mainStyles.extra__link_item}><p>HI</p></div>
        <div className={mainStyles.extra__link_item}><p>HI</p></div>
        <div className={mainStyles.extra__link_item}><p>HI</p></div>
        
       </section>
       <section className={mainStyles.main__container}>
           <div className={mainStyles.left__side}></div>
           <div className={mainStyles.right__side}>
               <div className={mainStyles.right__info1}></div>
               <div className={mainStyles.right__info2}></div>
           </div>
       </section>
       <footer>

       </footer>
       </div>
</>

    )
}

export default Main
