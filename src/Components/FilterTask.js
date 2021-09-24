import React from 'react'
import {useDispatch}  from 'react-redux';
import { filter_task } from '../JS/Actions/action';

const FilterTask = () => {
    const dispatch = useDispatch()
    return (
        <div className="filter">
          <button className='f-btn' onClick={() => dispatch(filter_task("all"))
              
          }>All</button>
          <button className='f-btn' onClick={() => dispatch(filter_task("done"))
              
          }>Done</button>
          <button  className='f-btn' onClick={() => dispatch(filter_task("notDone"))
              
          }>NotDone</button>  
        </div>
    )
}

export default FilterTask