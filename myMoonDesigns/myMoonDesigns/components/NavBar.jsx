
const Navbar = () => {

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={'../media/logo.jpeg'} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href='/'>
            Home
          </a>
        </li>
        <li>
        <a href='/gallery'>
            Gallery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;