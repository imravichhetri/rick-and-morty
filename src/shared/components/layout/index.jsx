import React from "react";

import LogoUrl from "@perseus-shared/assets/logo.png";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen bg-primary">
      <header
        role="banner"
        className="flex justify-center border-b border-stone-color flex-col items-center bg-primary md:sticky md:top-0 md:w-full md:z-50 "
      >
        <div>
          <img
            src={LogoUrl}
            alt="R&M Logo"
            height="100"
            className="h-20 md:h-15"
          />
        </div>
        <h1 className="flex flex-col justify-center block md:hidden">
          Characters
        </h1>
      </header>
      <main role="main" className="flex-1 px-20 md:px-0 py-5">
        {children}
      </main>
      <footer
        role="contentinfo"
        className="text-center fixed border-t border-stone-color bottom-0 w-full bg-primary "
      >
        © Perseus 2022
      </footer>
    </section>
  );
};

export default Layout;
