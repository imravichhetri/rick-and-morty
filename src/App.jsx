import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { hot } from "react-hot-loader/root";
import { QueryClientProvider } from "react-query";

/* Libs */
import queryClient from "@perseus/shared/lib/query-client";

/* Components */
import ErrorFallback from "@perseus-elements/error-fallback";
import LoadingFallBack from "@perseus-elements/loading-fallback";

/* Context */
import AppStateProvider from "@perseus-shared/contexts/application";

/* Modules */
const Home = React.lazy(() =>
  import(/* webpackPrefetch: true */ "@perseus-modules/rick-and-morty")
);

function App() {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<LoadingFallBack />}>
        <AppStateProvider>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Home} />
                </Switch>
              </BrowserRouter>
            </ErrorBoundary>
          </QueryClientProvider>
        </AppStateProvider>
      </React.Suspense>
    </React.StrictMode>
  );
}

export default hot(App);
