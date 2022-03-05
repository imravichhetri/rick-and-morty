import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen bg-primary-white">
      <header
        role="banner"
        className="flex justify-center align-center border-b border-stone-color md:sticky md:top-0 md:w-full md:bg-primary-white md:z-50"
      >
        <h1 className="flex flex-col justify-center">Rick and Morty</h1>
      </header>
      <main role="main" className="flex-1 px-20 md:px-0">
        {children}
      </main>
      <footer
        role="contentinfo"
        className="text-center fixed border-t border-stone-color bottom-0 w-full bg-primary-white "
      >
        © Perseus 2022
      </footer>
    </section>
  );
};

export default Layout;
