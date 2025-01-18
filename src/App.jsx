import { Suspense } from "react";
import { ErrorBoundary, Loading } from "./components";
import PublicRouter from "./routes/PublicRouter";
import "./App.css";

// Todo:: Modal, 반응형, Project 데이터

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
