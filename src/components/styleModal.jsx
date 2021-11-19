import React, { useState, useEffect } from "react"
import Prism from "prismjs"
import "./prism.css"
// import { SketchPicker } from "react-color"
import pickerStyles from "./pickerStyles.module.css"
import modalStyles from "./modalStyles.module.css"
import Modal from "react-modal"
// import styled from 'styled-components'

function StyleModal({ backgrounds, textColors }) {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [cssText, setCssText] = useState("")

	const copyCss = async () => {
		await navigator.clipboard.writeText(cssText)
		alert("Text copied")
	}
	const copyHtml = async () => {
		await navigator.clipboard.writeText(htmlText)
		alert("Text copied")
	}
  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll()
    }, 0);
  }, [cssText, modalIsOpen]);
	useEffect(() => {
		setCssText(`
                                	
    li,
    a,
    button {
      font-family: monospace;
      font-weight: 500;
      font-size: 16px;
      color: ${backgrounds[1]};
      text-decoration: none;
     
    }
    
    .site__container {
      max-width: 80vw;
      min-width: 80vw;
      padding: 0 10%;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 30px 10% */
      height: 5vh;
    }
    .logo {
      cursor: pointer;
    }
    
    .nav__links {
      list-style: none;
    }
    .nav__links li {
      display: inline-block;
      padding: 0px 20px;
      text-transform: capitalize;
    }
    
    .nav__button {
      padding: 9px 25px;
      background-color: yellow;
      border: none;
      border-radius: 50px;
    }
    
    .search__container {
      width: 100%;
      background: #ccc;
      margin: 0 auto;
      /*     padding: 16px; */
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-content: stretch;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      height: 5vh;
    }
    
    .extra__links {
      width: 100%;
      background: #ccc;
      height: 8vh;
      margin-bottom: 1rem;
    
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      grid-gap: 50px;
    }
    .extra__link_item {
      background-color: red;
      width: auto;
    }
    
    .extra__link_item p {
      opacity: 0;
    }
    .search__input {
      min-width: 60%;
      padding: 8px;
      margin: 0 4px 0 0;
      border: 1px solid #666;
      border-radius: 5px;
      order: 0;
      align-self: auto;
    }
    .search__button {
      padding: 8px 16px;
    
      min-width: 10px;
      word-wrap: nowrap;
      background: #000;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
      order: 4;
      flex: 0 1 auto;
      align-self: auto;
    }
    
    .main__container {
      display: flex;
      width: 100%;
      height: 63vh;
      /* padding: 30px 10% */
    }
    .left__side {
      background-color: red;
      width: 50%;
    }
    .right__side {
      width: 50%;
      background-color: blue;
      justify-content: space-between;
    }
    .right__info1 {
      background-color: rgb(36, 3, 3);
      height: 50%;
    }
    .right__info2 {
      background-color: rgb(183, 0, 255);
      height: 50%;
    }
    
    footer {
      background-color: black;
      width: 100%;
      height: 10vh;
    }
    
    `)
		Prism.highlightAll()
	}, [backgrounds, textColors])
	let htmlText = `
  <div class="site__container">
  <header>
    <div class="logo">Logo</div>
    <nav>
      <ul class="nav__links">
        <li>Home</li>
        <li>Pages</li>
        <li>About Us</li>
      </ul>
    </nav>
    <a href=""><button class="nav__buton">Contact</button></a>
  </header>
  <section class="search__container">
    <input type="text" class="search__input" placeholder="Lorem Ipsum" />

    <button type="submit" class="search__button">Search</button>
  </section>
  <section class="extra__links">
    <div class="extra__link_item"><p>HI</p></div>
    <div class="extra__link_item"><p>HI</p></div>
    <div class="extra__link_item"><p>HI</p></div>
    <div class="extra__link_item"><p>HI</p></div>
    <div class="extra__link_item"><p>HI</p></div>
  </section>
  <section class="main__container">
    <div class="left__side"></div>
    <div class="right__side">
      <div class="right__info1"></div>
      <div class="right__info2"></div>
    </div>
  </section>
  <footer></footer>
</div>
        `
	return (
		<div className={pickerStyles.container}>
			{/* <div style={{width: "200px", height: "200px", color: "white", background: `${color}` }}></div> */}

			{/* <SketchPicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} /> */}
			<button
				className={pickerStyles.modal__button}
				onClick={() => setModalIsOpen(true)}
			>
				View Code
			</button>

			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
				<div
					className={modalStyles.close__modal}
					onClick={() => setModalIsOpen(false)}
				>
					<i class="fas fa-times"></i>
				</div>
				<div className={modalStyles.recommended}>
					<h2>
						We strongly recommend you copy{" "}
						<span className={modalStyles.reset__link}>
							{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://piccalil.li/blog/a-modern-css-reset/"
							>
								THIS
							</a>{" "}
						</span>
						CSS Reset for general styling.{" "}
					</h2>
				</div>
				<div className={modalStyles.modal__container}>
					<div className={modalStyles.html__code}>
						{" "}
						<div className={modalStyles.css__title}>
							<h3>HTMLCode</h3>
							<h3
								className={modalStyles.copy__code}
								onClick={() => {
									copyHtml()
								}}
							>
								Copy
							</h3>
						</div>
						<div className="html__code_text">
							<pre>
								<code className="language-html">
									{`
  <div class="site__container">
    <header>
      <div class="logo">Logo</div>
      <nav>
        <ul class="nav__links">
          <li>Home</li>
          <li>Pages</li>
          <li>About Us</li>
        </ul>
      </nav>
      <a href=""><button class="nav__buton">Contact</button></a>
    </header>
    <section class="search__container">
      <input type="text" class="search__input" placeholder="Lorem Ipsum" />

      <button type="submit" class="search__button">Search</button>
    </section>
    <section class="extra__links">
      <div class="extra__link_item"><p>HI</p></div>
      <div class="extra__link_item"><p>HI</p></div>
      <div class="extra__link_item"><p>HI</p></div>
      <div class="extra__link_item"><p>HI</p></div>
      <div class="extra__link_item"><p>HI</p></div>
    </section>
    <section class="main__container">
      <div class="left__side"></div>
      <div class="right__side">
        <div class="right__info1"></div>
        <div class="right__info2"></div>
      </div>
    </section>
    <footer></footer>
</div>
                    `}{" "}
								</code>
							</pre>
						</div>
					</div>
					<div className={modalStyles.css__code}>
						<div className={modalStyles.css__title}>
							<h3>CSS Code</h3>
							<h3
								className={modalStyles.copy__code}
								onClick={() => {
									copyCss()
								}}
							>
								Copy
							</h3>
						</div>

						<div className="css__code-text">
							<pre>
								<code className="language-css">
									{`                      	
  li,
  a,
  button {
    font-family: monospace;
    font-weight: 500;
    font-size: 16px;
    color: ${backgrounds[1]};
    text-decoration: none; 
  }
  
  .site__container {
    max-width: 80vw;
    min-width: 80vw;
    padding: 0 10%;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 30px 10% */
    height: 5vh;
  }
  .logo {
    cursor: pointer;
  }
  
  .nav__links {
    list-style: none;
  }
  .nav__links li {
    display: inline-block;
    padding: 0px 20px;
    text-transform: capitalize;
  }
  
  .nav__button {
    padding: 9px 25px;
    background-color: yellow;
    border: none;
    border-radius: 50px;
  }
  
  .search__container {
    width: 100%;
    background: #ccc;
    margin: 0 auto;
    /*     padding: 16px; */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 5vh;
  }
  
  .extra__links {
    width: 100%;
    background: #ccc;
    height: 8vh;
    margin-bottom: 1rem;
  
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    grid-gap: 50px;
  }
  .extra__link_item {
    background-color: red;
    width: auto;
  }
  
  .extra__link_item p {
    opacity: 0;
  }
  .search__input {
    min-width: 60%;
    padding: 8px;
    margin: 0 4px 0 0;
    border: 1px solid #666;
    border-radius: 5px;
    order: 0;
    align-self: auto;
  }
  .search__button {
    padding: 8px 16px;
  
    min-width: 10px;
    word-wrap: nowrap;
    background: #000;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    order: 4;
    flex: 0 1 auto;
    align-self: auto;
  }
  
  .main__container {
    display: flex;
    width: 100%;
    height: 63vh;
    /* padding: 30px 10% */
  }
  .left__side {
    background-color: red;
    width: 50%;
  }
  .right__side {
    width: 50%;
    background-color: blue;
    justify-content: space-between;
  }
  .right__info1 {
    background-color: rgb(36, 3, 3);
    height: 50%;
  }
  .right__info2 {
    background-color: rgb(183, 0, 255);
    height: 50%;
  }
  
  footer {
    background-color: black;
    width: 100%;
    height: 10vh;
  }
  
                                `}
								</code>
							</pre>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default StyleModal
