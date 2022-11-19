import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-sky-500 text-white'>
      <ul>
        <li>
          <Link to=''>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
