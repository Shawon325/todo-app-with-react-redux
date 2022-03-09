import { useDispatch, useSelector } from "react-redux";
import { changeNavbarButton } from "../../slices/todo/navbarSlice";

export default function NavBar() {
  const navButton = useSelector((state) => state.navbar.navButton);
  const dispatch = useDispatch();

  return (
    <ul className="nav nav-pills todo-nav">
      <li
        role="presentation"
        className={`nav-item all-task ${navButton == 1 ? 'active' : ''}`}
        onClick={() => dispatch(changeNavbarButton(1))}
      >
        <a href="#" className="nav-link">All</a>
      </li>
      <li
        role="presentation"
        className={`nav-item active-task ${navButton == 2 ? 'active' : ''}`}
        onClick={() => dispatch(changeNavbarButton(2))}
      >
        <a href="#" className="nav-link">Active</a>
      </li>
      <li
        role="presentation"
        className={`nav-item completed-task ${navButton == 3 ? 'active' : ''}`}
        onClick={() => dispatch(changeNavbarButton(3))}
      >
        <a href="#" className="nav-link">Completed</a>
      </li>
    </ul>
  );
}