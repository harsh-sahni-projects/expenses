import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

    const monthwiseExpenses = [
        {month: 'Jan', totalExpenses: 0},
        {month: 'Feb', totalExpenses: 0},
        {month: 'Mar', totalExpenses: 0},
        {month: 'Apr', totalExpenses: 0},
        {month: 'May', totalExpenses: 0},
        {month: 'Jun', totalExpenses: 0},
        {month: 'Jul', totalExpenses: 0},
        {month: 'Aug', totalExpenses: 0},
        {month: 'Sep', totalExpenses: 0},
        {month: 'Oct', totalExpenses: 0},
        {month: 'Nov', totalExpenses: 0},
        {month: 'Dec', totalExpenses: 0}
    ];

    props.expenses.forEach(expense => {
        const month = expense.date.getMonth();
        const amount = expense.amount;
        monthwiseExpenses[month]['totalExpenses'] += amount;
    });
    
    const allExpenses = monthwiseExpenses.map(details => details.totalExpenses);
    const maxExpenseInAMonth = Math.round(Math.max(...allExpenses))

    return (
        <div className="chart">
            {monthwiseExpenses.map(details => (
                <ChartBar
                    key={details.month}
                    month={details.month}
                    amount={details.totalExpenses}
                    max={maxExpenseInAMonth}
                />
            ))}
        </div>
    )
}   

export default Chart;