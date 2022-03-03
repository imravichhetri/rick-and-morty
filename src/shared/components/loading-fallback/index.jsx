/** `LoadingFallback` -Renders fallback UI for suspense */
const LoadingFallback = () => {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #fd5454b8, #FFBACD)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      Loading ...
    </section>
  );
};

export default LoadingFallback;
