import React from 'react';
import Filter from '../images/filter - FontAwesome.png'

const applyFilter = () => {
    return (
        <div className="applyFilter_button">
            <img src={Filter} alt="Filter Icon" />
            <span>APPLY FILTERS</span>
            <div>3</div>
        </div>
    )
}

export default applyFilter;