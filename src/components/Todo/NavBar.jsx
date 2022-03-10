import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <ul className="nav nav-pills todo-nav">
      <li
        role="presentation"
        className={`nav-item all-task ${location.pathname == '/' ? 'active' : ''}`}
      >
        <Link to="/" className="nav-link">All</Link>
      </li>

      <li
        role="presentation"
        className={`nav-item active-task ${location.pathname == '/active-task' ? 'active' : ''}`}
      >
        <Link to="/active-task" className="nav-link">Active</Link>
      </li>

      <li
        role="presentation"
        className={`nav-item completed-task ${location.pathname == '/complete-task' ? 'active' : ''}`}
      >
        <Link to="/complete-task" className="nav-link">Completed</Link>
      </li>
    </ul>
  );
}