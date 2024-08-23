import Blog1 from "../../../assets/images/Blog 1.png";
import Blog2 from "../../../assets/images/Blog 2.png";
import blog3 from "../../../assets/images/Blog 3.png";

const LatestBlog = () => {
  return (
    <div className="mt-24">
      <section className="py-6 sm:py-12 ">
        <div className="container p-6  space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold">Latest Blog</h2>
            <p className="font-nunito ">
              Explore our latest blog posts for in-depth insights, expert
              advice, and the
              <br /> newest trends in website monitoring and performance
              optimization.
            </p>
          </div>
          <div className="flex w-2/3 gap-8  mx-auto justify-evenly ">
            <article className="flex flex-col  bg-white w-[23.563rem] h-[24.813rem]">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img alt="" className="object-cover w-full h-52 " src={Blog1} />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-default-600"
                >
                  30 Dec, 2023
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Starting your traveling blog with Vasco
                </h3>
                <p className="font-nunito">
                  Launch your travel blog effortlessly with Vasco intuitive,
                  user-friendly platform
                </p>
              </div>
            </article>
            <article className="flex flex-col  bg-white w-[23.563rem] h-[24.813rem]">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img alt="" className="object-cover w-full h-52 " src={Blog2} />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-default-600"
                >
                  30 Dec, 2023
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Top 5 Website Monitoring Tools You Need
                </h3>
                <p className="font-nunito">
                  Discover key tools to keep your website running smoothly and
                  efficiently.
                </p>
              </div>
            </article>
            <article className="flex flex-col  bg-white w-[23.563rem] h-[24.813rem]">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img alt="" className="object-cover w-full h-52 " src={blog3} />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-default-600"
                >
                  30 Dec, 2023
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Prevent Downtime with Real-Time Alerts
                </h3>
                <p className="font-nunito">
                  Learn how instant alerts can prevent issues and ensure website
                  uptime
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlog;
