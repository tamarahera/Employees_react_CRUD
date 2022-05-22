import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {name: 'Alex S.', salary: 950, increase: true, id:"1"},
        {name: 'Jack K.', salary: 3000, increase: false, id:"2"},
        {name: 'George O.', salary: 1980, increase: true, id:"3"},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>

        </div>
    );
}

export default App;