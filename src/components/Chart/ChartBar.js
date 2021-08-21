import './ChartBar.css';
// key={details.month}
// month={details.month}
// amount={details.totalExpenses}
// max={maxExpenseInAMonth}
function ChartBar(props) {

    const barHeight = (props.max > 0) ? ((props.amount/props.max)*100) + '%' : '0%';

    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill" style={{ height: barHeight }}></div>
        </div>
        <div className="chart-bar__label">{props.month}</div>
      </div>
    );
}

export default ChartBar;