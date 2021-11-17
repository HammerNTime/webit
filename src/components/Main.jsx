import React from 'react'
import mainStyles from "./mainStyles.module.css"

function Main() {
    return (
        <>
        <div className={mainStyles.site__container}>

       
       <header>
           <div className={mainStyles.logo}>Logo</div>
           <nav>
               <ul className={mainStyles.nav__links}>
                   <li>Home</li>
                   <li>Pages</li>
                   <li>About Us</li>
               </ul>
           </nav>
           <a href=""><button className={mainStyles.nav__buton}>Contact</button></a>
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
