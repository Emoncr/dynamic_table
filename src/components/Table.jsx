import React from 'react'
import "../assets/CSS/table.css"



const Table = ({ tableData }) => {
    return (
        <div className='thead_container pt-10 pb-10'>
            {
                tableData.length !== 0 &&
                tableData.map((el, index) =>
                    el.active &&
                    // RENDERING TABLE HEAD ITEMS
                    <div key={index} className='thead'>
                        <h3 className='thead_text'>{el.name}</h3>
                        {
                            // RENDERING TABLE DATA ITEMS
                            el.info !== 0 && el.info.map((el, index) =>
                                <div className='table_content_container' key={index}>
                                    <p className='content_text'>{el}</p>
                                </div>
                            )
                        }
                    </div>

                )
            }
        </div>
    )
}

export default Table