import './app-info.css';

const AppInfo = ({employees, awarded}) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in the Finca company</h1>
            <hr />
            <h2>Total number of employees: {employees}</h2>
            <h2>The award will be received: {awarded}</h2>
        </div>
    )
}

export default AppInfo;