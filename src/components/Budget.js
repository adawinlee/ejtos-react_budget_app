import React, { useContext } from 'react';
import { AppContext, appContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch } = useContext(AppContext);
    const changeBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: props.budget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £
                <input 
                    type="number" 
                    step="10" 
                    max="20000" 
                    onBlur={event=>changeBudget(event.target.value)}
                >
                </input>
                </span>
        </div>
    );
};

export default Budget;
