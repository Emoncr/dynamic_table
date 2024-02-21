import React from 'react'
import "../assets/CSS/controlbar.css"


const Controlbar = ({ tableData }) => {
    const { data, setData } = tableData; // DESTRUCTURE DATA 


    // == FUNCTION FOR HANDLE ITEM SELECTION == //
    const handleChange = (currentItemId) => {

        const updatedAry = data.map(el => {
            if (el.id === currentItemId) {
                el.active = !el.active // MANUPILATE CLICKED ITEM ACTIVE STATUS HERE
            }
            return el
        }
        );
        setData(updatedAry); // SET MANUPILATED DATA
    }


    return (
        <div className='controlbar_cotainer'>
            {
                data?.map((el, index) =>
                    <div key={index} className='controler_checkbox'>
                        <label >
                            <input
                                onChange={(e) => handleChange(el.id)}  // HANDLING ITEM SELECTION CHANGE 
                                checked={el.active}
                                className="checkbox__input"
                                type="checkbox"
                                id="checkbox"
                            />
                            <span className="checkbox__label">
                                {el.name} 
                            </span>
                        </label>
                    </div>
                )
            }
        </div>
    )
}

export default Controlbar