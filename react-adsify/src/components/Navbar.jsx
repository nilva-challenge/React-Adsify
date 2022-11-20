import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-sky-500 text-white -mt-4 text-lg mb-6'>
      <ul>
        <li className='px-4 hover:bg-sky-400 hover:text-black'>
          <Link to=''>Home</Link>
        </li>
        <li className='px-4 hover:bg-sky-400 hover:text-black'>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
