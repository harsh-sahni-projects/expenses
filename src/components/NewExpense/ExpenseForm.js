import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    // Method 1
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    // Method 2 & 3
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const hideForm = () => {
        props.onHideForm();
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        setTitle('');
        setAmount('');
        setDate('');

        // Passing the data in this manner is called "Lifting the state up"
        props.onSaveExpenseData(data);
        props.onHideForm();
    }
    
    const titleChangeHandler = (event) => {
        // Method 1
        setTitle(event.target.value);

        /*
            Method 3 is better & more reliable than 2 because React schedules
            the state updates & doesn't perform them instantly. If there are lots of state updates then we could
            get some older state in M2. But M3 makes sure that it always provides
            the latest state snap shots.

            Method 1 is best out of these 3 methods
        */

        // Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value;
        // });

        // Method 3
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value;
        //     }
        // })
    }
    
    const amountChangeHandler = (event) => {
        // Method 1
        setAmount(event.target.value);

        // Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value;
        // });

        // Method 3
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value;
        //     }
        // })
    }
    
    const dateChangeHandler = (event) => {
        // Method 1
        setDate(event.target.value);

        // Method 2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value;
        // });

        // Method 3
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value;
        //     }
        // })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                           value={enteredTitle}
                           onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label  >
                    <input type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            value={enteredDate}
                            onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                {/* we added type=button so that it doesn't trigger the form submit  */}
                <button type="button" onClick={hideForm}>Cancel</button> 
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;