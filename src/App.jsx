import "./App.css";
import { ErrorBoundary } from "./components";
import PublicRouter from "./routes/PublicRouter";

function App() {
  return (
    <ErrorBoundary>
      <PublicRouter />
    </ErrorBoundary>
  );
}

export default App;
