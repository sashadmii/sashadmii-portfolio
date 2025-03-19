import tabs from './constants';

const Navigation = () => {
  return (
    <nav className="bg-[#e43d12] p-4 sm:p-6 flex justify-center sm:justify-end">
      <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-12">
        {tabs.map((tab) => (
          <a
            className="navLink relative text-[#ebe9e1] cursor-pointer text-sm sm:text-base md:text-lg 
          no-underline after:content-[''] after:absolute after:bottom-[-2px] after:w-0 after:h-[0.1rem] 
          after:right-0 after:bg-[#ebe9e1] after:transition-all after:duration-700 after:ease-in-out 
          hover:after:w-full hover:after:left-0"
            key={tab}
            href={`#${tab.toLowerCase()}`}>
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
