import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col h-full">
      <header role="banner" className="flex justify-center align-center border">
        <h1 className="flex flex-col justify-center">Rick and Morty</h1>
      </header>
      <main role="main" className="flex-1 px-20 md:px-0">
        {children}
      </main>
      <footer role="contentinfo" className="text-center border">
        © Perseus 2022
      </footer>
    </section>
  );
};

export default Layout;
