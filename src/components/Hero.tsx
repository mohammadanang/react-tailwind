import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">HAPPY SHOPPING!</h1>
      <Link className="py-5 px-9 bg-yellow-500 rounded-full text-2xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce" to="/menu">
        Explore&nbsp;
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </Link>
    </div>
  );
}

export default Hero;
