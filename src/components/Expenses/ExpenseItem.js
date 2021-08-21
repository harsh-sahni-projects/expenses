import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// 1 Hooks always start from 'use' e.g. useState, useEffect
// 2 useState can only be called directly under the ExpenseItem()
//   not outside ExpenseItem() or inside JSX in 'return'
// 3 ExpenseItem is called 4 tiimes in Expenses.js but each expenseItem
//   has its own state (useState) for title. Tha's why changing title in
//   one ExpenseItem doesn't changes titels in all other ExpenseItems
//   
function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);
    // If 'key' for each ExpenseItem in Expenses.js file is not give,
    // then useState in this component will give shuffled data for the ExpenseItems

    const title = props.title;
    const date = props.date;
    const price = props.amount;

    return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${price}</div>
          </div>
        </Card>
      </li>
    );
}

export default ExpenseItem;