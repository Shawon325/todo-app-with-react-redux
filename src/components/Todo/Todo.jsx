import './Todo.css';

import { Route, Routes } from 'react-router-dom';

import Tasks from './Tasks';
import CreateUpdate from './CreateUpdate';
import ActiveTasks from './ActiveTasks';
import NavBar from './NavBar';
import CompleteTasks from './CompleteTasks';

export default function Todo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">

              <CreateUpdate />

              <NavBar />

              <Routes>
                <Route path='/' element={<Tasks />} />
                <Route path='/active-task' element={<ActiveTasks />} />
                <Route path='/complete-task' element={<CompleteTasks />} />
              </Routes>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
