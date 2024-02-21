import React, { useState } from 'react'
import "../assets/CSS/home.css" 
import Table from './Table'
import { fakeData } from '../lib/data' //=== LOAD ALL FAKE DATA 
import Controlbar from './Controlbar'
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";




const Home = () => {
    const [data, setData] = useState(fakeData) // STORE ALL DATA IN A STATE

    const [isMenuOpen, setIsMenuOpen] = useState(false) // MENU OPTION STATE


    return (
        <section className='table_section'>
            <div className="container">
                <div className="table_container">
                    <div className="table_wrapper">
                        <div className='items_between pl-20 pr-20 controler_container'>
                            <h2 className='head_text'>Dynamic Table</h2>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)} // HANDLING MENU BTN CLICKED
                                className='menu_btn'
                            >
                                {
                                    // CHECKING MENU BUTTON CONDITION
                                    isMenuOpen ?
                                        <GrClose className='cross' /> // CLOSE ICON
                                        :
                                        <IoMenu /> // HUMBURGER ICON
                                }
                            </button>
                            {
                                //====== SHOWING CONTROLBAL WHEN isMenuOpen STATE TRUE 
                                isMenuOpen && <Controlbar tableData={{ data, setData }} />

                            }
                        </div>
                        <div className='mt-30'>
                            {/* ====== DECLEARING TABLE COMPONENTS HERE */}
                            <Table tableData={data} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home