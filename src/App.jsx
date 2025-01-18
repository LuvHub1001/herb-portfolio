import { Suspense } from "react";
import { ErrorBoundary, Loading } from "./components";
import PublicRouter from "./routes/PublicRouter";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <PublicRouter />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
