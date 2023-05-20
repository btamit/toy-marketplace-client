import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-slate-800">
      <div className="px-4 divide-y py-6 relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-6 lg:pb-1">
        <div className="md:flex gap-28">
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Company</h2>
            <p>Gallery </p>
            <p>Rewards Program</p>
            <p>Trade Program</p>
            <p>Diversity </p>
            <p>Accessbility</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Products</h2>
            <p>Popular products</p>
            <p>Simple products</p>
            <p>Plans & Pricing</p>
            <p>On sale</p>
            <p>Out of stocks</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Customers</h2>
            <p> Read Our Advice</p>
            <p>Get In Touch</p>
            <p>Online Store</p>
            <p>Terms & Conditions</p>
            <p> Ask Away</p>
          </div>
          <div className="text-white mb-8">
            <h2 className="font-bold text-xl mb-5">Contact</h2>
            <p>
              Monday to Friday <br /> 9 a.m. - 5 p.m.
            </p>
            <div className="flex gap-3">
              <img
                className="w-5 text-white"
                src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
                alt=""
              />
              <p>toy@shop.com</p>
            </div>
            <p>232, PL-Street, USA</p>
            <p>+3 543- 879 - 3245</p>
          </div>
          <div>
            <div className="flex gap-5">
              <img
                className="w-24 h-16"
                src="https://cdn5.vectorstock.com/i/1000x1000/82/74/toy-car-logo-template-for-branding-vector-3838274.jpg"
                alt=""
              />
              <h2 className="text-white text-2xl font-bold">Toy Shop</h2>
            </div>
            <p className="text-white my-5">
              Toy Shop is a platform that <br /> provides best products and try
              to <br /> innovate new products.
            </p>
            <div className="flex gap-5 mb-12">
              <Link to="https://web.facebook.com">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.linkedin.com">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/128/179/179330.png"
                  alt=""
                />
              </Link>
              <Link to="https://twitter.com/">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <img
                  className="h-12 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm  text-white font-bold  flex justify-between">
          <span>Powered by Toy Shop</span>
          <span>© 2023 Toy Shop. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
