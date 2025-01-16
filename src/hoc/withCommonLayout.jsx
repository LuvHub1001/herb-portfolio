import { Header } from "../components/";

function withCommonLayout(Component) {
  const WrappedComponent = () => {
    return (
      <div>
        <Header />
        <div style={{ height: "calc(100vh - 250px)" }}>
          <Component />
        </div>
      </div>
    );
  };

  return WrappedComponent;
}

export default withCommonLayout;
