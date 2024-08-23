

const NewsLetter = () => {
    return (
        <div className="bg-white h-[20rem] mt-48">
            <div>
                <h2 className="text-4xl pt-12 font-bold text-center">Subscribe our Newsletter</h2>

                <p className="font-nunito pt-2 text-center">Subscribe to our newsletter for the latest updates, expert tips, exclusive
                    <br /> features, and special offers directly to your inbox.</p>
            </div>
            <div className="flex mx-auto w-[61rem] h-[4rem] mt-12 rounded-xl bg-gray-100">
              <input
                type="Email"
                name="Email"
                id="Email"
                placeholder="Enter Your Email"
                className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
              />
              <button className="bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] w-[12rem] rounded-xl text-white">Subscribe</button>
            </div>
            
        </div>
    );
};

export default NewsLetter;