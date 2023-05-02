import React, { useContext } from 'react';
import { AppContext, appContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (userInput) => {
        if (userInput >= 20000) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            return;
        };
        if (userInput < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: userInput
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    type="number"
                    step="10"
                    max="20000"
                    size="15"
                    onBlur={(event)=>{changeBudget(event.target.value)}}
                >
                </input>
            </span>
        </div>
    );
};

export default Budget;
