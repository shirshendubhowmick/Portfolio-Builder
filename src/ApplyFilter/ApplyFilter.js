import React from 'react';
import Filter from '../images/filter - FontAwesome.png'
import classes from './ApplyFilter.css'

const applyFilter = () => {
    return (
        <div className={classes.applyFilter_button}>
            <img src={Filter} alt="Filter Icon" />
            <span>APPLY FILTERS</span>
            <div>3</div>
        </div>
    )
}

export default applyFilter;