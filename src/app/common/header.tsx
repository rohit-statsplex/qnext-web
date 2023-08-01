import "./header.css";

export function Header() {
  return (
    <nav className="relative hl w-full flex flex-wrap items-center shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid flex border-b-2 flex-wrap items-center justify-between px-2 sm:px-4 w-full sm:flex-initial">
        <a className="text-xl text-black" href="/">
          <img
            src="/logo.svg"
            className="mr-3 h-20 py-2 sm:h-full"
            alt="e-moksha Logo"
          />
        </a>
        <button
          className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>

        <div
          className="collapse navbar-collapse flex justify-around sm:justify-end rounded flex-grow bg-gray-50 sm:bg-white"
          id="navbarSupportedContent"
        >
          <a className="text-xl text-black" href="/">
            <img
              src="/logo.svg"
              className="mr-3 h-20 hidden sm:h-full"
              alt="e-moksha Logo"
            />
          </a>
          <ul className="flex flex-col rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a
                href="/"
                className="pb-4 text-gray-700 hover:text-orange-500 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 text-gray-700 hover:text-orange-500 rounded md:border-0 md:p-0"
              >
                SERVICES
              </a>
            </li>

            <div className="group sm:inline-block hidden z-100">
              <button
                aria-haspopup="true"
                aria-controls="menu"
                className="outline-none focus:outline-none bg-white rounded-sm flex items-center min-w-32"
              >
                <span className="pr-1 flex-1 hover:text-orange-500">
                  INDUSTRY
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </button>
              <ul
                id="menu"
                aria-hidden="true"
                className="bg-white border rounded-sm transform hidden absolute group-hover:block transition duration-150 ease-in-out origin-top min-w-32"
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-400">
                  <a href="/industry/career-tech/" rel="noopener noreferrer">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Career Tech</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </span>
                    </button>
                  </a>
                  <ul
                    id="menu-lang"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <a
                      href="/industry/career-tech/"
                      rel="noopener noreferrer"
                    ></a>
                    <a
                      href="/industry/career-tech/tracker"
                      rel="noopener noreferrer"
                    ></a>
                    <a
                      href="/industry/career-tech/tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                        Tracker
                      </li>
                    </a>
                    <a
                      href="/industry/career-tech/CTlytics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                        CTlytics
                      </li>
                    </a>
                  </ul>
                </li>

                <a
                  href="/industry/courts/county-courts"
                  rel="noopener noreferrer"
                >
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                    County Courts
                  </li>
                </a>
                <a href="/industry/supply-chain/" rel="noopener noreferrer">
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                    Supply Chain
                  </li>
                </a>
              </ul>
            </div>
            <div className="group sm:inline-block hidden z-100">
              <button
                aria-haspopup="true"
                aria-controls="menu"
                className="outline-none focus:outline-none bg-white rounded-sm flex items-center min-w-32"
              >
                <span className="pr-1 flex-1 hover:text-orange-500">
                  RESOURCES
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </button>
              <ul
                id="menu"
                aria-hidden="true"
                className="bg-white border rounded-sm transform hidden absolute group-hover:block transition duration-150 ease-in-out origin-top min-w-32"
              >
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-400">
                  <a href="/resources/testimonials/" rel="noopener noreferrer">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Testimonials</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </span>
                    </button>
                  </a>
                  <ul
                    id="menu-lang"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                  >
                    <a
                      href="/resources/testimonials/career-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                        Career Tech
                      </li>
                    </a>
                    <a
                      href="/resources/testimonials/county-courts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                        County Courts
                      </li>
                    </a>
                    <a
                      href="/resources/testimonials/supply-chain"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-400">
                        Supply Chain
                      </li>
                    </a>
                  </ul>
                </li>
              </ul>
            </div>
            <li>
              <a
                href="/get-started"
                className="block pb-2 text-gray-700 hover:text-orange-500 rounded md:border-0 md:p-0"
              >
                GET STARTED
              </a>
            </li>
            <li></li>
          </ul>
          <div className="sm:hidden mx-auto">
            INDUSTRY
            <ol className="border-l border-gray-300">
              <li>
                <div className="flex flex-start items-center">
                  <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-2"></div>
                  <a
                    href="/industry/career-tech/"
                    className="text-sm underline underline-offset-8"
                  >
                    Career Tech
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-start items-center pt-2">
                  <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-2"></div>
                  <a
                    href="/industry/courts/county-courts/"
                    className="text-sm underline underline-offset-8"
                  >
                    County Courts
                  </a>
                </div>
              </li>
              <li>
                <div className="flex flex-start items-center pt-2">
                  <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-2"></div>
                  <a href="/industry/supply-chain/" className="text-sm">
                    Supply Chain
                  </a>
                </div>
              </li>
            </ol>
          </div>
          <div className="sm:hidden">
            RESOURCES
            <ol className="border-l border-gray-300">
              <li>
                <div className="flex flex-start items-center">
                  <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-2"></div>
                  <a
                    href="/resources/testimonials/"
                    className="text-sm underline underline-offset-8"
                  >
                    Testimonials
                  </a>
                </div>
              </li>
              {/* <!-- <li>
            <div className="items-center pt-2">
              <img
                src="/linkedIn-logo.svg"
                alt="linkedIn logo"
                className="mx-auto pt-2"
              />
            </div>
          </li> --> */}
              {/* <!--  <li>
            <div className="flex flex-start items-center pt-2">
              <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
              <p className="text-sm">Case Study</p>
            </div>
          </li> --> */}
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
}
<script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>;
