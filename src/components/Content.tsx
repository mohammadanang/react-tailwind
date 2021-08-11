import Img1 from '../images/egg-crispy.jpg';
import Img2 from '../images/egg-salad.jpg';

function Content() {
  return (
    <>
      <div className="menu-card">
        <img src={Img1} alt="img1" className="h-full rounded mb-12 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Crispy</h2>
          <p className="mb-2">Crispy, delicious, and nutritious.</p>
          <span>IDR 25.000</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={Img2} alt="img2" className="h-full rounded mb-12 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Veggies, delicious, and nutritious.</p>
          <span>IDR 21.000</span>
        </div>
      </div>
    </>
  );
}

export default Content;
