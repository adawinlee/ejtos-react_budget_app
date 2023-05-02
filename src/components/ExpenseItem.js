import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <div class="round IncButton" onClick={event=>increaseAllocation(props.name)}>
                    <div class="centered">+</div>
                </div>
            </td>
            <td>
                <div class="round DecButton" onClick={event=>handleDeleteExpense(props.name)}>
                    <div class="centered">-</div>
                </div>
            </td>
            <td>
                <TiDelete size="1.5em"></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;