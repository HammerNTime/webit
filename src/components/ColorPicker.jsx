import React, { useState} from 'react'
import { SketchPicker } from "react-color"
import pickerStyles from "./pickerStyles.module.css"
import modalStyles from "./modalStyles.module.css"
import Modal from "react-modal"
function ColorPicker() {
    const [ color, setColor] = useState("#fff")
    const [ modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className={pickerStyles.container}>
            <SketchPicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
            <button className={pickerStyles.modal__button}onClick={() => setModalIsOpen(true)}>View Code</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
               <div className={modalStyles.modal__container}>
                   <div className={modalStyles.html__code}>This is the HTML code
                   <div className="html__code_text">
                   <pre>{`
               <div class="site__container"/>

       
{"<"}header{">"}
    {"<"}div class="logo"{">"}Logo{"<"}/div{">"}
    {"<"}nav{">"}
        {"<"}ul class="nav__links"{">"}
            {"<"}li{">"}Home{"<"}/li{">"}
            {"<"}li{">"}Pages{"<"}/li{">"}
            {"<"}li{">"}About Us{"<"}/li{">"}
        {"<"}/ul{">"}
    {"<"}/nav{">"}
    {"<"}a href=""{">"}{"<"}button class="nav__buton"{">"}Contact{"<"}/button{">"}{"<"}/a{">"}
{"<"}/header{">"}
{"<"}section class="search__container"{">"}
{"<"}input type="text" class="search__input" placeholder="Lorem Ipsum" /{">"}

{"<"}button type="submit" class="search__button"{">"}Search{"<"}/button{">"}

{"<"}/section{">"}
{"<"}section class="extra__links"{">"}
 {"<"}div class="extra__link_item"{">"}{"<"}p{">"}lorem{"<"}/p{">"}{"<"}/div{">"}
 {"<"}div class="extra__link_item"{">"}{"<"}p{">"}lorem{"<"}/p{">"}{"<"}/div{">"}
 {"<"}div class="extra__link_item"{">"}{"<"}p{">"}lorem{"<"}/p{">"}{"<"}/div{">"}
 {"<"}div class="extra__link_item"{">"}{"<"}p{">"}lorem{"<"}/p{">"}{"<"}/div{">"}
 {"<"}div class="extra__link_item"{">"}{"<"}p{">"}lorem{"<"}/p{">"}{"<"}/div{">"}
 
{"<"}/section{">"}
{"<"}section class="main__container"{">"}
    {"<"}div class="left__side"{">"}{"<"}/div{">"}
    {"<"}div class="right__side"{">"}
        {"<"}div class="right__info1"{">"}{"<"}/div{">"}
        {"<"}div class="right__info2"{">"}{"<"}/div{">"}
    {"<"}/div{">"}
{"<"}/section{">"}
{"<"}footer{">"}

{"<"}/footer{">"}
{"<"}/div{">"}
                    `} </pre>

                   </div>
                   </div>
                   <div className={modalStyles.css__code}>This is the CSS code</div>
               </div>
            </Modal>
        </div>
    )
}

export default ColorPicker
