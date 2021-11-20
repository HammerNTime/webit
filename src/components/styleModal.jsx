import React, { useState, useEffect } from "react"
import { Snackbar } from "./misc/snackbar/snackbar"
import { useSnackbar } from "./misc/snackbar/useSnackbar"
import Prism from "prismjs"
import "./prism.css"
// import { SketchPicker } from "react-color"
import pickerStyles from "./pickerStyles.module.css"
import modalStyles from "./modalStyles.module.css"
import Modal from "react-modal"
// import styled from 'styled-components'

function StyleModal({ backgrounds, textColors, targetId }) {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [cssText, setCssText] = useState("")
  const [htmlText, setHtmlText] = useState("")
	const { isActive, message, openSnackBar } = useSnackbar()
	const _showSnackbarHandler = () => {
		openSnackBar("Copied")
	}
	const copyCss = async () => {
		_showSnackbarHandler()
		await navigator.clipboard.writeText(cssText)
		// alert("Text copied")
	}
	const copyHtml = async () => {
		_showSnackbarHandler()
		await navigator.clipboard.writeText(htmlText)
		// alert("Text copied")
	}
	useEffect(() => {
		setTimeout(() => {
			Prism.highlightAll()
		}, 0)
	}, [cssText, modalIsOpen])
	useEffect(() => {
    setHtmlText(`  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="temp.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
    
        <title>Document</title>
      </head>
      <body>
        <div class="full_site_container">
          <div class="main_site">
            <nav>
              <div class="logo">Logo</div>
              <input type="checkbox" id="checkbox" />
              <label for="checkbox" id="icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <ul>
                <li><a id="link1" href="#" class="active">Link</a></li>
                <li><a id="link2" href="#">Link2</a></li>
                <li><a id="link3" href="#">Link3</a></li>
                <li><a id="link4" href="#">Link4</a></li>
                <li><a id="link5" href="#">Link5</a></li>
              </ul>
            </nav>
            <header class="wrapper">
              <h3>Banner Title Text Here</h3>
              <div class="header_container">
                <div id="header_section1 class="header_section">
                  <i class="fas fa-question-circle"></i>
                  <h3>Some Text Here.</h3>
                </div>
                <div id="header_section2 class="header_section">
                  <i class="fas fa-question-circle"></i>
                  <h3>Some Text Here.</h3>
                </div>
                <div id="header_section3 class="header_section">
                  <i class="fas fa-question-circle"></i>
                  <h3>Some Text Here.</h3>
                </div>
                <div id="header_section4 class="header_section">
                  <i class="fas fa-question-circle"></i>
                  <h3>Some Text Here.</h3>
                </div>
              </div>
            </header>
            <main class="wrapper section_wrapper">
              <section class="section_left"></section>
              <section class="section_right"></section>
            </main>
            <footer>
              <svg
                viewBox="0 -20 700 110"
                width="100%"
                height="150"
                preserveAspectRatio="none"
              >
                <path
                  transform="translate(0, -20)"
                  d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
                  fill=${targetId === -1 ? backgrounds[26] : backgrounds[26]}
                />
                <path
                  d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
                  fill=${targetId === -1 ? backgrounds[27] : backgrounds[27]}
                />
              </svg>
            </footer>
          </div>
        </div>
      </body>
    </html>`)
		setCssText(
    `    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      height: 100vh;
      background: ${backgrounds[0]};
      font-family: "Roboto", sans-serif;
    }
    nav {
      display: flex;
      justify-content: space-between;
      padding: 15px 5%;
      align-items: center;
      background: ${backgrounds[1]};
      max-height: 80px;
    }
    .logo {
      background-color: ${backgrounds[2]};
      color: ${textColors[2]};
      font-size: 22px;
    }
    ul {
      list-style: none;
    }
    ul li {
      display: inline-block;
    }
    ul li a {
      text-decoration: none;
      color: #8291a5;
      padding: 8px 30px;
      border-radius: 7px;
      transition: all 0.3s ease;
    }
    #link1 {
      background-color: ${backgrounds[3]};
      color: ${textColors[3]};
    }
    #link2 {
      background-color: ${backgrounds[4]};
      color: ${textColors[4]};
    }
    #link3 {
      background-color: ${backgrounds[5]};
      color: ${textColors[5]};
    }
    #link4 {
      background-color: ${backgrounds[6]};
      color: ${textColors[6]};
    }
    #link5 {
      background-color: ${backgrounds[7]};
      color: ${textColors[7]};
    }
    ul li a:hover,
    ul li a.active {
      color: #fff;
      background: #0075ff;
    }
    #icon {
      background-color: #0075ff;
      padding: 5px 7px 3px 7px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    #icon svg {
      color: #fff;
      height: 28px;
      transition: all 0.3s ease;
    }
    #icon:hover {
      background: #fff;
    }
    #icon:hover svg {
      color: #0075ff;
    }
    #checkbox,
    #icon {
      display: none;
    }
    
    @media screen and (max-width: 768px) {
      nav {
        border-bottom: 1px solid #455468;
      }
      ul {
        position: absolute;
        width: 100%;
        height: calc(100vh - 71px);
        background-color: #18283b;
        left: 0;
        top: 0;
        text-align: center;
        display: none;
        margin-top: 71px;
      }
    
      ul li {
        display: block;
        padding: 10px 15px;
      }
      ul li a {
        display: block;
        padding: 10px 0;
      }
      #icon {
        display: block;
      }
      #checkbox:checked ~ ul {
        display: block;
      }
    }
    
    /*  header*/
    .wrapper {
      width: 97%;
      max-width: 1200px;
      margin: 0 auto;
      float: none;
      margin-top: 1rem;
    }
    .full_site_container {
      display: flex;
    }
    .main_site {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    header {
      background: ${backgrounds[8]};
    
      margin-top: 1rem;
      text-align: center;
    }
    header h3 {
      color: white;
      margin: 1rem 0;
    }
    .header_section {
      height: 200px;
      background: white;
      margin: 1rem 1rem;
    }
    .header_section h3 {
      color: black;
    }
    .header_section i {
      font-size: 5rem;
      color: rgb(194, 194, 3);
    }
    .section_wrapper section {
      width: 100%;
      min-height: 30vh;
      margin: 1rem 0;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    .section_left {
      background: rgb(255, 255, 255);
    }
    .section_right {
      background: rgb(255, 255, 255);
    }
    footer {
      display: none;
    }
    /* Desktop screen service */
    @media only screen and (min-width: 768px) {
      header {
        background: ${backgrounds[8]};
        width: 100%;
        height: 30vh;
        margin-top: 1rem;
        text-align: center;
      }
      header h3 {
        color: ${textColors[9]};
        background-color: ${backgrounds[9]};
        margin: 1rem 0;
      }
      .header_container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .header_section {
        width: 300px;
        height: 200px;
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      #header_section1 {
        background: ${backgrounds[11]};
      }
      #header_section2 {
        background: ${backgrounds[14]};
      }
      #header_section3 {
        background: ${backgrounds[17]};
      }
      #header_section4 {
        background: ${backgrounds[20]};
      }
      #header_section1 h3 {
        color: ${textColors[13]};
        background: ${backgrounds[13]};
      }
      #header_section2 h3 {
        color: ${textColors[16]};
        background: ${backgrounds[16]};
      }
      #header_section3 h3 {
        color: ${textColors[19]};
        background: ${backgrounds[19]};
      }
      #header_section4 h3 {
        color: ${textColors[22]};
        background: ${backgrounds[22]};
      }
      .header_section i {
        font-size: 5rem;
      }
      #header_section1 i {
        color: ${textColors[12]};
        background: ${backgrounds[11]};
      }
      #header_section2 i {
        color: ${textColors[15]};
        background: ${backgrounds[14]};
      }
      #header_section3 i {
        color: ${textColors[18]};
        background: ${backgrounds[17]};
      }
      #header_section4 i {
        color: ${textColors[21]};
        background: ${backgrounds[20]};
      }
      .section_wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: ${backgrounds[23]};
      }
      .section_wrapper section {
        width: 49%;
        height: 50vh;
        margin: 1rem 0;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
      .section_left {
        background: ${backgrounds[24]};
      }
      .section_right {
        background: ${backgrounds[25]};
      }
      footer {
        position: absolute;
        width: 100%;
        height: 130px;
        bottom: 0;
        overflow: hidden;
        display: block;
      }
    }`
		)
		Prism.highlightAll()
	}, [backgrounds, textColors, modalIsOpen])

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
								<code className="language-html">{htmlText} </code>
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
								<code className="language-css">{modalIsOpen ? cssText : cssText}</code>
							</pre>
						</div>
					</div>
				</div>
			</Modal>
			<Snackbar isActive={isActive} message={message} />
		</div>
	)
}

export default StyleModal
