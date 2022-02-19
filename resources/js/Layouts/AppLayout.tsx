// @ts-ignore
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';
import useRoute from '@/Hooks/useRoute';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import Search from '@/Components/Search';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import DropdownMenuResponsive from '@/Components/DropdownMenuResponsive';
import { Toaster } from 'react-hot-toast';
import useTypedPage from '@/Hooks/useTypedPage';
import ApplicationLogo from '@/Components/ApplicationLogo';

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <div>
      <Head title={title} />

      <Banner />
      <Toaster position="bottom-right" />
      <div className="min-h-screen">
        <section className="flex justify-center px-4 py-2 text-base text-center text-white bg-primary-500">
          <a
            className="md:flex md:items-center"
            href="https://github.com/antowirantoIO/programify"
            target="_blank"
            rel="noopener"
          >
            <svg
              className="inline w-4 h-4 mr-2 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>{' '}
            Support the ongoing development of Programify →
          </a>
        </section>
        <nav className="bg-white border-b border-gray-100">
          {/* <!-- Primary Navigation Menu --> */}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-7">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* <!-- Logo --> */}
                <div className="flex items-center flex-shrink-0 ml-0 md:ml-2">
                  <InertiaLink href={route('welcome')}>
                    <ApplicationLogo className="mr-0.5 inline text-gray-900"></ApplicationLogo>
                  </InertiaLink>
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden sm:-my-px sm:ml-7 sm:flex">
                  <NavLink
                    href={route('welcome')}
                    active={route().current('welcome')}
                  >
                    Home
                  </NavLink>
                  <NavLink href={'#'}>Series</NavLink>
                  <NavLink href={'#'}>Topics</NavLink>
                  <NavLink className="hidden md:block" href={'#'}>
                    Articles
                  </NavLink>
                  <NavLink className="hidden md:block" href={'#'}>
                    Forum
                  </NavLink>
                  <NavLink href={'#'}>Premium</NavLink>
                </div>
              </div>

              <div className="flex items-center">
                <Search />
                {/* <!-- Navigation Menu --> */}
                {page.props.user ? (
                  <div className="relative hidden ml-3 sm:flex sm:items-center">
                    <DropdownMenu />
                  </div>
                ) : (
                  <div className="hidden pl-4 sm:flex">
                    <InertiaLink
                      className="text-gray-500 hover:text-gray-600 focus:outline-none font-medium hover:border-gray-400/50 lg:mx-0.5 flex items-center gap-x-2 relative tracking-tight py-2 px-2 rounded-lg transition-colors duration-200"
                      href={route('login')}
                    >
                      Login
                    </InertiaLink>
                    <InertiaLink
                      className="hidden text-gray-500 hover:text-gray-600 focus:outline-none font-medium hover:border-gray-400/50 lg:mx-0.5 lg:flex items-center gap-x-2 relative tracking-tight py-2 rounded-lg transition-colors duration-200"
                      href={route('register')}
                    >
                      Register
                    </InertiaLink>
                  </div>
                )}
                <DropdownMenuResponsive />
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Page Heading --> */}
        {renderHeader ? (
          <header className="bg-white shadow-xl shadow-primary-300/30">
            <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              {renderHeader()}
            </div>
          </header>
        ) : null}

        {/* <!-- Page Content --> */}
        <main>{children}</main>

        <footer className="py-6 mt-5 text-sm border-t border-gray-200 footer-wrap print:hidden lg:mt-10 md:py-8 lg:py-16">
          <div className="px-4 md:w-4/5 lg:w-[40rem] mx-auto text-center md:pb-20 font-cabin">
            <div>
              <h1 className="mb-8 text-2xl font-medium tracking-tight text-white md:text-3xl">
                Want us to email you occasionally with Programify news?
              </h1>
            </div>
            <div>
              <form action="">
                <div className="flex flex-col justify-center max-w-sm mx-auto mb-6 md:flex-row lg:mb-0 lg:max-w-full lg:mx-0">
                  <input
                    type="text"
                    className="md:w-[22rem] rounded-2xl px-4 md:py-4 mb-4 md:mb-0 text-center md:text-left text-md md:text-sm md:-mr-8"
                    placeholder="Email Address"
                  />
                  <button className="btn btn-primary py-5 md:py-4 md:w-32 !text-white">
                    Subcribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="max-w-screen-lg px-4 mx-auto lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
            <div className="grid sm:grid-cols-12 gap-x-0 gap-y-10 lg:gap-x-10">
              <div className="col-span-full sm:col-span-8 lg:col-span-3">
                <div className="text-sm leading-relaxed text-gray-200">
                  <div>
                    <svg
                      className="mr-0.5 inline text-white"
                      width="130"
                      height="28"
                      viewBox="0 0 338 71"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.04 28.5H22.03C23.92 28.5 25.5883 28.1383 27.035 27.415C28.505 26.6683 29.6483 25.5483 30.465 24.055C31.2817 22.5617 31.69 20.66 31.69 18.35C31.69 16.0633 31.165 14.3483 30.115 13.205C29.0883 12.0617 27.42 11.49 25.11 11.49H13.035L17.76 7.535L9.71 53H0.82L9.43 4H26.09C29.3567 4 32.0983 4.56 34.315 5.68C36.5317 6.8 38.2 8.38667 39.32 10.44C40.44 12.47 41 14.8733 41 17.65C41 20.8 40.4983 23.5767 39.495 25.98C38.515 28.3833 37.115 30.39 35.295 32C33.4983 33.61 31.3633 34.835 28.89 35.675C26.4167 36.4917 23.6867 36.9 20.7 36.9H9.57L11.04 28.5ZM40.2322 53L46.3922 18H54.6522L53.2172 28.57L48.8422 53H40.2322ZM52.7272 29.795L53.7072 22.235C54.1739 21.5583 54.9205 20.8467 55.9472 20.1C56.9739 19.3533 58.1405 18.7233 59.4472 18.21C60.7772 17.6967 62.1189 17.44 63.4722 17.44H65.9222L62.8422 25.63H59.5522C58.5722 25.63 57.6272 25.8167 56.7172 26.19C55.8072 26.5633 55.0022 27.065 54.3022 27.695C53.6022 28.325 53.0772 29.025 52.7272 29.795ZM78.7327 53.7C75.4894 53.7 72.7944 53.0233 70.6477 51.67C68.5011 50.2933 66.8911 48.4733 65.8177 46.21C64.7677 43.9233 64.2427 41.4033 64.2427 38.65C64.2427 35.8967 64.7444 33.26 65.7477 30.74C66.7511 28.1967 68.1627 25.9333 69.9827 23.95C71.8027 21.9433 73.9611 20.3567 76.4577 19.19C78.9544 18.0233 81.6961 17.44 84.6827 17.44C87.9261 17.44 90.6211 18.1283 92.7677 19.505C94.9144 20.8583 96.5127 22.6783 97.5627 24.965C98.6361 27.2283 99.1727 29.7367 99.1727 32.49C99.1727 35.2433 98.6711 37.8917 97.6677 40.435C96.6644 42.955 95.2527 45.2183 93.4327 47.225C91.6127 49.2083 89.4544 50.7833 86.9577 51.95C84.4611 53.1167 81.7194 53.7 78.7327 53.7ZM79.9227 46.56C81.9527 46.56 83.7377 45.9417 85.2777 44.705C86.8411 43.4683 88.0544 41.835 88.9177 39.805C89.7811 37.7517 90.2127 35.5233 90.2127 33.12C90.2127 30.46 89.6411 28.3717 88.4977 26.855C87.3777 25.3383 85.7094 24.58 83.4927 24.58C81.4861 24.58 79.7011 25.1867 78.1377 26.4C76.5977 27.6133 75.3844 29.235 74.4977 31.265C73.6344 33.295 73.2027 35.5233 73.2027 37.95C73.2027 40.61 73.7627 42.71 74.8827 44.25C76.0027 45.79 77.6827 46.56 79.9227 46.56ZM115.401 45.02C111.644 45.02 108.786 43.9933 106.826 41.94C104.889 39.8633 103.921 37.0633 103.921 33.54C103.921 30.74 104.586 28.115 105.916 25.665C107.269 23.215 109.159 21.2317 111.586 19.715C114.012 18.1983 116.871 17.44 120.161 17.44C123.637 17.44 126.414 18.4083 128.491 20.345C130.591 22.2817 131.641 25.0933 131.641 28.78C131.641 30.9033 131.267 32.9333 130.521 34.87C129.774 36.8067 128.689 38.545 127.266 40.085C125.866 41.6017 124.162 42.8033 122.156 43.69C120.149 44.5767 117.897 45.02 115.401 45.02ZM116.521 38.65C118.084 38.65 119.414 38.2417 120.511 37.425C121.607 36.585 122.436 35.4767 122.996 34.1C123.579 32.7233 123.871 31.23 123.871 29.62C123.871 27.7533 123.474 26.3183 122.681 25.315C121.887 24.3117 120.651 23.81 118.971 23.81C117.407 23.81 116.077 24.23 114.981 25.07C113.907 25.91 113.091 27.0183 112.531 28.395C111.971 29.7717 111.691 31.2767 111.691 32.91C111.691 34.73 112.076 36.1417 112.846 37.145C113.616 38.1483 114.841 38.65 116.521 38.65ZM112.601 70.5C109.171 70.5 106.406 70.0567 104.306 69.17C102.206 68.3067 100.677 67.175 99.7207 65.775C98.7407 64.375 98.2507 62.8933 98.2507 61.33C98.2507 59.93 98.5774 58.67 99.2307 57.55C99.8607 56.43 100.747 55.415 101.891 54.505C103.034 53.595 104.352 52.755 105.846 51.985L111.551 54.295C110.571 54.575 109.614 54.9483 108.681 55.415C107.771 55.8817 107.012 56.465 106.406 57.165C105.822 57.8883 105.531 58.7633 105.531 59.79C105.531 61.2133 106.184 62.3217 107.491 63.115C108.821 63.9317 110.687 64.34 113.091 64.34C114.841 64.34 116.451 64.13 117.921 63.71C119.414 63.29 120.604 62.695 121.491 61.925C122.377 61.1783 122.821 60.3033 122.821 59.3C122.821 58.1567 122.342 57.305 121.386 56.745C120.452 56.185 119.227 55.765 117.711 55.485C116.217 55.205 114.631 54.9483 112.951 54.715C111.271 54.4817 109.672 54.1433 108.156 53.7C106.662 53.28 105.437 52.6383 104.481 51.775C103.547 50.8883 103.081 49.64 103.081 48.03C103.081 46.6767 103.501 45.545 104.341 44.635C105.204 43.7017 106.394 42.885 107.911 42.185L112.566 44.46C112.146 44.5533 111.807 44.74 111.551 45.02C111.317 45.2767 111.201 45.6033 111.201 46C111.201 46.7933 111.889 47.3533 113.266 47.68C114.666 48.0067 116.521 48.3333 118.831 48.66C119.951 48.8233 121.187 49.0567 122.541 49.36C123.894 49.6633 125.189 50.1417 126.426 50.795C127.662 51.425 128.677 52.3117 129.471 53.455C130.264 54.5983 130.661 56.1033 130.661 57.97C130.661 60.3267 129.937 62.45 128.491 64.34C127.067 66.23 125.002 67.7233 122.296 68.82C119.612 69.94 116.381 70.5 112.601 70.5ZM130.171 23.635L127.161 19.715C127.767 19.295 128.759 18.91 130.136 18.56C131.536 18.1867 133.087 18 134.791 18H137.171L135.701 23.46H132.411C132.177 23.46 131.862 23.4717 131.466 23.495C131.069 23.495 130.637 23.5417 130.171 23.635ZM136.072 53L142.232 18H150.492L149.057 28.57L144.682 53H136.072ZM148.567 29.795L149.547 22.235C150.014 21.5583 150.76 20.8467 151.787 20.1C152.814 19.3533 153.98 18.7233 155.287 18.21C156.617 17.6967 157.959 17.44 159.312 17.44H161.762L158.682 25.63H155.392C154.412 25.63 153.467 25.8167 152.557 26.19C151.647 26.5633 150.842 27.065 150.142 27.695C149.442 28.325 148.917 29.025 148.567 29.795ZM173.239 53.7C170.533 53.7 168.211 53.07 166.274 51.81C164.338 50.55 162.856 48.8233 161.829 46.63C160.803 44.4367 160.289 41.94 160.289 39.14C160.289 36.41 160.733 33.7617 161.619 31.195C162.529 28.605 163.836 26.2717 165.539 24.195C167.266 22.1183 169.343 20.4733 171.769 19.26C174.196 18.0467 176.926 17.44 179.959 17.44C181.569 17.44 182.958 17.6383 184.124 18.035C185.291 18.4317 186.329 19.0033 187.239 19.75C188.173 20.4733 189.048 21.3483 189.864 22.375L186.574 24.195L189.059 18H196.619L192.559 41.94C192.373 43.06 192.279 43.9467 192.279 44.6C192.279 45.58 192.524 46.1517 193.014 46.315C193.528 46.4783 194.426 46.56 195.709 46.56L193.749 53.7C191.556 53.7 189.841 53.6067 188.604 53.42C187.368 53.2567 186.411 52.9417 185.734 52.475C185.058 51.985 184.474 51.2967 183.984 50.41C183.494 49.5 182.899 48.3333 182.199 46.91L185.104 48.205C184.241 48.9983 183.273 49.8267 182.199 50.69C181.126 51.53 179.866 52.2417 178.419 52.825C176.973 53.4083 175.246 53.7 173.239 53.7ZM176.179 46.56C178.116 46.56 179.703 46.0933 180.939 45.16C182.176 44.2267 183.133 43.025 183.809 41.555C184.486 40.085 184.953 38.5567 185.209 36.97C185.489 35.36 185.629 33.89 185.629 32.56C185.629 30.11 185.139 28.1733 184.159 26.75C183.179 25.3033 181.569 24.58 179.329 24.58C177.346 24.58 175.596 25.1867 174.079 26.4C172.586 27.6133 171.419 29.2467 170.579 31.3C169.739 33.33 169.319 35.57 169.319 38.02C169.319 40.5633 169.856 42.6283 170.929 44.215C172.026 45.7783 173.776 46.56 176.179 46.56ZM200.398 53L206.558 18H213.698L213.733 26.89L209.078 53H200.398ZM221.468 53C222.145 49.1733 222.705 45.965 223.148 43.375C223.615 40.7617 223.988 38.6383 224.268 37.005C224.548 35.3483 224.758 34.0533 224.898 33.12C225.062 32.1633 225.167 31.4283 225.213 30.915C225.283 30.4017 225.318 29.97 225.318 29.62C225.318 27.59 224.747 26.2483 223.603 25.595C222.483 24.9183 221.258 24.58 219.928 24.58C218.505 24.58 217.268 24.8717 216.218 25.455C215.168 26.0383 214.165 26.855 213.208 27.905L213.383 21.01C214.34 20.1233 215.67 19.3067 217.373 18.56C219.077 17.8133 220.885 17.44 222.798 17.44C224.292 17.44 225.75 17.72 227.173 18.28C228.62 18.84 229.845 19.7383 230.848 20.975C231.875 22.2117 232.493 23.845 232.703 25.875L234.383 28.395L230.078 53H221.468ZM242.398 53C243.122 48.8933 243.705 45.51 244.148 42.85C244.615 40.19 244.977 38.0783 245.233 36.515C245.513 34.9517 245.712 33.7733 245.828 32.98C245.945 32.1633 246.015 31.58 246.038 31.23C246.085 30.88 246.108 30.5767 246.108 30.32C246.108 28.01 245.688 26.4817 244.848 25.735C244.008 24.965 242.865 24.58 241.418 24.58C239.692 24.58 238.303 24.93 237.253 25.63C236.227 26.3067 235.445 27.17 234.908 28.22C234.395 29.2467 234.045 30.2967 233.858 31.37L231.443 24.16C231.35 23.5067 231.817 22.655 232.843 21.605C233.893 20.5317 235.363 19.575 237.253 18.735C239.167 17.8717 241.372 17.44 243.868 17.44C247.648 17.44 250.425 18.525 252.198 20.695C253.972 22.8417 254.858 25.6533 254.858 29.13C254.858 29.4567 254.835 29.8533 254.788 30.32C254.765 30.7633 254.683 31.44 254.543 32.35C254.427 33.2367 254.228 34.52 253.948 36.2C253.668 37.8567 253.295 40.05 252.828 42.78C252.385 45.4867 251.802 48.8933 251.078 53H242.398ZM258.914 53L265.074 18H273.754L267.594 53H258.914ZM266.054 12.68L267.524 4H276.274L274.734 12.68H266.054ZM285.457 9.67C285.737 8.15333 286.25 6.695 286.997 5.295C287.744 3.895 288.887 2.75166 290.427 1.865C291.99 0.954996 294.114 0.499996 296.797 0.499996C297.637 0.499996 298.605 0.546663 299.702 0.639998C300.822 0.709999 301.884 0.803332 302.887 0.919999L300.857 8.13C300.087 7.99 299.527 7.89666 299.177 7.85C298.827 7.80333 298.454 7.78 298.057 7.78C296.867 7.78 295.98 7.97833 295.397 8.375C294.837 8.74833 294.44 9.34333 294.207 10.16C293.974 10.9533 293.74 11.98 293.507 13.24L286.507 53H277.827L285.457 9.67ZM278.107 25.14L280.137 18H299.877L298.617 25.14H278.107ZM298.614 69.94L311.459 47.19L310.444 54.61L301.204 18H310.864L315.974 44.495L313.244 44.04L327.874 18H337.534L307.224 69.94H298.614Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-300 dark:text-white">™</span>
                  </div>
                  <p className="mb-4 capitalize md:pt-5 md:mb-6 lg:mb-12">
                    <strong className="font-semibold">Programify</strong> adalah
                    platform pembelajaran online yang berbentuk screencast yang
                    ditujukan untuk para pengembang web. Melalui seri-seri
                    seperti Laravel, Reactjs, Vuejs, Inertiajs, Html, Bootstrap,
                    Tailwind CSS, dan Banyak lagi.
                  </p>
                </div>
              </div>
              <div className="col-span-full sm:col-span-6 lg:col-span-3">
                <h1 className="mb-4 font-semibold text-white uppercase">
                  Ready to binge
                </h1>
                <div className="space-y-2 md:space-y-4">
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="https://parsinta.com/series/belajar-laravel-8-dari-awal-ign7z"
                  >
                    Laravel 8 Dari Awal
                  </a>
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="/series/belajar-tailwind-css-2-jyijbo"
                  >
                    Belajar Tailwind CSS 2
                  </a>
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="/series/test-driven-laravel-ysggm"
                  >
                    Test Driven Laravel - TDD
                  </a>
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="/series/menyelami-breeze-lebih-dalam-jwilh/2"
                  >
                    Implementasi Laravel Queue
                  </a>
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="/series/mari-kita-belajar-basic-react-js-1598047011"
                  >
                    Mari Kita Belajar Basic React JS
                  </a>
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="/series/datatable-dengan-laravel-inertia-1ta3l"
                  >
                    Datatable Dengan Laravel Inertia
                  </a>
                  <a
                    className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                    href="/series/realtime-dengan-laravel-echo-pusher-mrbr7"
                  >
                    Realtime Dengan Laravel Echo &amp; Pusher
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 col-span-6 gap-x-1">
                <div>
                  <h1 className="mb-4 font-semibold text-white uppercase">
                    Explore
                  </h1>
                  <div className="space-y-2 md:space-y-4">
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/paths"
                    >
                      Paths
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/series"
                    >
                      Series
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/skills/laravel"
                    >
                      Topics
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/premium"
                    >
                      Premium
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/series?filter=pro"
                    >
                      Pro Series
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/series?filter=popular"
                    >
                      Popular All Time
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/series?filter=popular-this-week"
                    >
                      Popular This Week
                    </a>
                  </div>
                </div>
                <div>
                  <h1 className="mb-4 font-semibold text-white uppercase">
                    Social
                  </h1>
                  <div className="space-y-2 md:space-y-4">
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/github"
                    >
                      github
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/twitter"
                    >
                      twitter
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/discord"
                    >
                      discord
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/youtube"
                    >
                      youtube
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/telegram"
                    >
                      telegram
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/facebook"
                    >
                      facebook
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/instagram"
                    >
                      instagram
                    </a>
                  </div>
                </div>
                <div>
                  <h1 className="mb-4 font-semibold text-white uppercase">
                    Extras
                  </h1>
                  <div className="space-y-2 md:space-y-4">
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/faq"
                    >
                      FAQ
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/articles"
                    >
                      Blog
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/#package"
                    >
                      Price
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="https://assets.parsinta.com"
                    >
                      Assets
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/#testimonials"
                    >
                      Testimonials
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/ads"
                    >
                      Advertisement
                    </a>
                    <a
                      target="_blank"
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="http://saweria.co/irsyadadl"
                    >
                      Saweria (Donate)
                    </a>
                    <a
                      className="block text-gray-300 capitalize transition duration-200 hover:text-white focus:text-white"
                      href="/terms"
                    >
                      Terms &amp; Condition
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 mt-16 border-t border-gray-200/30 md:-mb-8">
            <div className="flex items-center justify-center max-w-screen-lg px-4 mx-auto lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
              <svg
                className="mr-0.5 inline text-white"
                width="130"
                height="28"
                viewBox="0 0 338 71"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.04 28.5H22.03C23.92 28.5 25.5883 28.1383 27.035 27.415C28.505 26.6683 29.6483 25.5483 30.465 24.055C31.2817 22.5617 31.69 20.66 31.69 18.35C31.69 16.0633 31.165 14.3483 30.115 13.205C29.0883 12.0617 27.42 11.49 25.11 11.49H13.035L17.76 7.535L9.71 53H0.82L9.43 4H26.09C29.3567 4 32.0983 4.56 34.315 5.68C36.5317 6.8 38.2 8.38667 39.32 10.44C40.44 12.47 41 14.8733 41 17.65C41 20.8 40.4983 23.5767 39.495 25.98C38.515 28.3833 37.115 30.39 35.295 32C33.4983 33.61 31.3633 34.835 28.89 35.675C26.4167 36.4917 23.6867 36.9 20.7 36.9H9.57L11.04 28.5ZM40.2322 53L46.3922 18H54.6522L53.2172 28.57L48.8422 53H40.2322ZM52.7272 29.795L53.7072 22.235C54.1739 21.5583 54.9205 20.8467 55.9472 20.1C56.9739 19.3533 58.1405 18.7233 59.4472 18.21C60.7772 17.6967 62.1189 17.44 63.4722 17.44H65.9222L62.8422 25.63H59.5522C58.5722 25.63 57.6272 25.8167 56.7172 26.19C55.8072 26.5633 55.0022 27.065 54.3022 27.695C53.6022 28.325 53.0772 29.025 52.7272 29.795ZM78.7327 53.7C75.4894 53.7 72.7944 53.0233 70.6477 51.67C68.5011 50.2933 66.8911 48.4733 65.8177 46.21C64.7677 43.9233 64.2427 41.4033 64.2427 38.65C64.2427 35.8967 64.7444 33.26 65.7477 30.74C66.7511 28.1967 68.1627 25.9333 69.9827 23.95C71.8027 21.9433 73.9611 20.3567 76.4577 19.19C78.9544 18.0233 81.6961 17.44 84.6827 17.44C87.9261 17.44 90.6211 18.1283 92.7677 19.505C94.9144 20.8583 96.5127 22.6783 97.5627 24.965C98.6361 27.2283 99.1727 29.7367 99.1727 32.49C99.1727 35.2433 98.6711 37.8917 97.6677 40.435C96.6644 42.955 95.2527 45.2183 93.4327 47.225C91.6127 49.2083 89.4544 50.7833 86.9577 51.95C84.4611 53.1167 81.7194 53.7 78.7327 53.7ZM79.9227 46.56C81.9527 46.56 83.7377 45.9417 85.2777 44.705C86.8411 43.4683 88.0544 41.835 88.9177 39.805C89.7811 37.7517 90.2127 35.5233 90.2127 33.12C90.2127 30.46 89.6411 28.3717 88.4977 26.855C87.3777 25.3383 85.7094 24.58 83.4927 24.58C81.4861 24.58 79.7011 25.1867 78.1377 26.4C76.5977 27.6133 75.3844 29.235 74.4977 31.265C73.6344 33.295 73.2027 35.5233 73.2027 37.95C73.2027 40.61 73.7627 42.71 74.8827 44.25C76.0027 45.79 77.6827 46.56 79.9227 46.56ZM115.401 45.02C111.644 45.02 108.786 43.9933 106.826 41.94C104.889 39.8633 103.921 37.0633 103.921 33.54C103.921 30.74 104.586 28.115 105.916 25.665C107.269 23.215 109.159 21.2317 111.586 19.715C114.012 18.1983 116.871 17.44 120.161 17.44C123.637 17.44 126.414 18.4083 128.491 20.345C130.591 22.2817 131.641 25.0933 131.641 28.78C131.641 30.9033 131.267 32.9333 130.521 34.87C129.774 36.8067 128.689 38.545 127.266 40.085C125.866 41.6017 124.162 42.8033 122.156 43.69C120.149 44.5767 117.897 45.02 115.401 45.02ZM116.521 38.65C118.084 38.65 119.414 38.2417 120.511 37.425C121.607 36.585 122.436 35.4767 122.996 34.1C123.579 32.7233 123.871 31.23 123.871 29.62C123.871 27.7533 123.474 26.3183 122.681 25.315C121.887 24.3117 120.651 23.81 118.971 23.81C117.407 23.81 116.077 24.23 114.981 25.07C113.907 25.91 113.091 27.0183 112.531 28.395C111.971 29.7717 111.691 31.2767 111.691 32.91C111.691 34.73 112.076 36.1417 112.846 37.145C113.616 38.1483 114.841 38.65 116.521 38.65ZM112.601 70.5C109.171 70.5 106.406 70.0567 104.306 69.17C102.206 68.3067 100.677 67.175 99.7207 65.775C98.7407 64.375 98.2507 62.8933 98.2507 61.33C98.2507 59.93 98.5774 58.67 99.2307 57.55C99.8607 56.43 100.747 55.415 101.891 54.505C103.034 53.595 104.352 52.755 105.846 51.985L111.551 54.295C110.571 54.575 109.614 54.9483 108.681 55.415C107.771 55.8817 107.012 56.465 106.406 57.165C105.822 57.8883 105.531 58.7633 105.531 59.79C105.531 61.2133 106.184 62.3217 107.491 63.115C108.821 63.9317 110.687 64.34 113.091 64.34C114.841 64.34 116.451 64.13 117.921 63.71C119.414 63.29 120.604 62.695 121.491 61.925C122.377 61.1783 122.821 60.3033 122.821 59.3C122.821 58.1567 122.342 57.305 121.386 56.745C120.452 56.185 119.227 55.765 117.711 55.485C116.217 55.205 114.631 54.9483 112.951 54.715C111.271 54.4817 109.672 54.1433 108.156 53.7C106.662 53.28 105.437 52.6383 104.481 51.775C103.547 50.8883 103.081 49.64 103.081 48.03C103.081 46.6767 103.501 45.545 104.341 44.635C105.204 43.7017 106.394 42.885 107.911 42.185L112.566 44.46C112.146 44.5533 111.807 44.74 111.551 45.02C111.317 45.2767 111.201 45.6033 111.201 46C111.201 46.7933 111.889 47.3533 113.266 47.68C114.666 48.0067 116.521 48.3333 118.831 48.66C119.951 48.8233 121.187 49.0567 122.541 49.36C123.894 49.6633 125.189 50.1417 126.426 50.795C127.662 51.425 128.677 52.3117 129.471 53.455C130.264 54.5983 130.661 56.1033 130.661 57.97C130.661 60.3267 129.937 62.45 128.491 64.34C127.067 66.23 125.002 67.7233 122.296 68.82C119.612 69.94 116.381 70.5 112.601 70.5ZM130.171 23.635L127.161 19.715C127.767 19.295 128.759 18.91 130.136 18.56C131.536 18.1867 133.087 18 134.791 18H137.171L135.701 23.46H132.411C132.177 23.46 131.862 23.4717 131.466 23.495C131.069 23.495 130.637 23.5417 130.171 23.635ZM136.072 53L142.232 18H150.492L149.057 28.57L144.682 53H136.072ZM148.567 29.795L149.547 22.235C150.014 21.5583 150.76 20.8467 151.787 20.1C152.814 19.3533 153.98 18.7233 155.287 18.21C156.617 17.6967 157.959 17.44 159.312 17.44H161.762L158.682 25.63H155.392C154.412 25.63 153.467 25.8167 152.557 26.19C151.647 26.5633 150.842 27.065 150.142 27.695C149.442 28.325 148.917 29.025 148.567 29.795ZM173.239 53.7C170.533 53.7 168.211 53.07 166.274 51.81C164.338 50.55 162.856 48.8233 161.829 46.63C160.803 44.4367 160.289 41.94 160.289 39.14C160.289 36.41 160.733 33.7617 161.619 31.195C162.529 28.605 163.836 26.2717 165.539 24.195C167.266 22.1183 169.343 20.4733 171.769 19.26C174.196 18.0467 176.926 17.44 179.959 17.44C181.569 17.44 182.958 17.6383 184.124 18.035C185.291 18.4317 186.329 19.0033 187.239 19.75C188.173 20.4733 189.048 21.3483 189.864 22.375L186.574 24.195L189.059 18H196.619L192.559 41.94C192.373 43.06 192.279 43.9467 192.279 44.6C192.279 45.58 192.524 46.1517 193.014 46.315C193.528 46.4783 194.426 46.56 195.709 46.56L193.749 53.7C191.556 53.7 189.841 53.6067 188.604 53.42C187.368 53.2567 186.411 52.9417 185.734 52.475C185.058 51.985 184.474 51.2967 183.984 50.41C183.494 49.5 182.899 48.3333 182.199 46.91L185.104 48.205C184.241 48.9983 183.273 49.8267 182.199 50.69C181.126 51.53 179.866 52.2417 178.419 52.825C176.973 53.4083 175.246 53.7 173.239 53.7ZM176.179 46.56C178.116 46.56 179.703 46.0933 180.939 45.16C182.176 44.2267 183.133 43.025 183.809 41.555C184.486 40.085 184.953 38.5567 185.209 36.97C185.489 35.36 185.629 33.89 185.629 32.56C185.629 30.11 185.139 28.1733 184.159 26.75C183.179 25.3033 181.569 24.58 179.329 24.58C177.346 24.58 175.596 25.1867 174.079 26.4C172.586 27.6133 171.419 29.2467 170.579 31.3C169.739 33.33 169.319 35.57 169.319 38.02C169.319 40.5633 169.856 42.6283 170.929 44.215C172.026 45.7783 173.776 46.56 176.179 46.56ZM200.398 53L206.558 18H213.698L213.733 26.89L209.078 53H200.398ZM221.468 53C222.145 49.1733 222.705 45.965 223.148 43.375C223.615 40.7617 223.988 38.6383 224.268 37.005C224.548 35.3483 224.758 34.0533 224.898 33.12C225.062 32.1633 225.167 31.4283 225.213 30.915C225.283 30.4017 225.318 29.97 225.318 29.62C225.318 27.59 224.747 26.2483 223.603 25.595C222.483 24.9183 221.258 24.58 219.928 24.58C218.505 24.58 217.268 24.8717 216.218 25.455C215.168 26.0383 214.165 26.855 213.208 27.905L213.383 21.01C214.34 20.1233 215.67 19.3067 217.373 18.56C219.077 17.8133 220.885 17.44 222.798 17.44C224.292 17.44 225.75 17.72 227.173 18.28C228.62 18.84 229.845 19.7383 230.848 20.975C231.875 22.2117 232.493 23.845 232.703 25.875L234.383 28.395L230.078 53H221.468ZM242.398 53C243.122 48.8933 243.705 45.51 244.148 42.85C244.615 40.19 244.977 38.0783 245.233 36.515C245.513 34.9517 245.712 33.7733 245.828 32.98C245.945 32.1633 246.015 31.58 246.038 31.23C246.085 30.88 246.108 30.5767 246.108 30.32C246.108 28.01 245.688 26.4817 244.848 25.735C244.008 24.965 242.865 24.58 241.418 24.58C239.692 24.58 238.303 24.93 237.253 25.63C236.227 26.3067 235.445 27.17 234.908 28.22C234.395 29.2467 234.045 30.2967 233.858 31.37L231.443 24.16C231.35 23.5067 231.817 22.655 232.843 21.605C233.893 20.5317 235.363 19.575 237.253 18.735C239.167 17.8717 241.372 17.44 243.868 17.44C247.648 17.44 250.425 18.525 252.198 20.695C253.972 22.8417 254.858 25.6533 254.858 29.13C254.858 29.4567 254.835 29.8533 254.788 30.32C254.765 30.7633 254.683 31.44 254.543 32.35C254.427 33.2367 254.228 34.52 253.948 36.2C253.668 37.8567 253.295 40.05 252.828 42.78C252.385 45.4867 251.802 48.8933 251.078 53H242.398ZM258.914 53L265.074 18H273.754L267.594 53H258.914ZM266.054 12.68L267.524 4H276.274L274.734 12.68H266.054ZM285.457 9.67C285.737 8.15333 286.25 6.695 286.997 5.295C287.744 3.895 288.887 2.75166 290.427 1.865C291.99 0.954996 294.114 0.499996 296.797 0.499996C297.637 0.499996 298.605 0.546663 299.702 0.639998C300.822 0.709999 301.884 0.803332 302.887 0.919999L300.857 8.13C300.087 7.99 299.527 7.89666 299.177 7.85C298.827 7.80333 298.454 7.78 298.057 7.78C296.867 7.78 295.98 7.97833 295.397 8.375C294.837 8.74833 294.44 9.34333 294.207 10.16C293.974 10.9533 293.74 11.98 293.507 13.24L286.507 53H277.827L285.457 9.67ZM278.107 25.14L280.137 18H299.877L298.617 25.14H278.107ZM298.614 69.94L311.459 47.19L310.444 54.61L301.204 18H310.864L315.974 44.495L313.244 44.04L327.874 18H337.534L307.224 69.94H298.614Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-gray-300 dark:text-white">™</span>
            </div>
            <div className="flex items-center justify-center max-w-screen-lg px-4 pt-4 mx-auto text-gray-200 lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
              Programify is a Trademark of Anto Wiranto. Copyright © 2021 -{' '}
              {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="flex justify-center max-w-screen-lg px-4 pt-2 mx-auto text-gray-200 lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
              Proudly inspired design by
              <a
                href="https://parsinta.com"
                target="_blank"
                className="px-1 font-semibold text-white"
              >
                {'Parsinta.'}
              </a>
              And
              <a
                href="https://laracasts.com"
                target="_blank"
                className="pl-1 font-semibold text-white"
              >
                {'Laracasts.'}
              </a>
            </div>
            <div className="flex items-center justify-center max-w-screen-lg px-4 pt-2 mx-auto text-gray-200 lg:max-w-screen-2xl xl:max-w-screen-xl lg:px-8 xl:px-4">
              Proudly hosted with
              <a
                href="https://digitalocean.com"
                target="_blank"
                className="pl-1 font-semibold text-white"
              >
                {'DigitalOcean.'}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
