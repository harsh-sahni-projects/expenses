import ExpensesList  from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import Chart from '../Chart/Chart';

import Card from '../UI/Card'
import './Expenses.css'

import { useState } from 'react';

function AllExpenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    // My sol 1 - for filtering the list
    // let [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
    
    const applyFilterHandler = (year) => {
            setFilterYear(year);

            // My sol 1 - for filtering the list
            // setFilteredExpenses(prevExpenses => {
            //   filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == year);
            //   return filteredExpenses;
            // })
    }

    // Sol 1 by author - for filtering the list
    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear
    })

    /*
      In my sol 1 - there is 1 bug:
      If I add a new expense, the list doesn't gets updated automatically.
      I have to change the filter year from dropdown - only then my new added 
      expense reflects in the list
    */

    return (
      <div>
        <Card className="expenses">

          {/* Controlled Component:
                Here ExpenseFilter is a 'Controlled component' because
                its value (year) and changes to the value (onFilterYear) are handled in 
                its parent component i.e. this Expenses.js file 
          */}
          <ExpenseFilter selectedYear={filterYear} onChangeFilter={applyFilterHandler} />

          <Chart expenses={filteredExpenses}/>

          <ExpensesList filteredExpenses={filteredExpenses} />
          {/* 
            When "iterating" for adding elements (as below), always use a unique key for each
            item. Otherwise it will cause issues. 
            See Udemy Video 65. for details

          {filteredExpenses.length == 0 && <p>No items found for this year</p>}
          {filteredExpenses.length > 0 && filteredExpenses.map(expense => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))
          }
        */}
        </Card>
      </div>
    );
}

export default AllExpenses;