import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { hot } from "react-hot-loader/root";
import { QueryClientProvider } from "react-query";
import { ToastProvider } from "react-toast-notifications";

/* Libs */
import queryClient from "@perseus/shared/lib/query-client";

/* Components */
import ErrorFallback from "@perseus-elements/error-fallback";
import LoadingFallBack from "@perseus-elements/loading-fallback";

/* Context */
import ApplicationProvider from "@perseus-shared/contexts/application";
import Layout from "@perseus-shared/components/layout";

/* Modules */
const Home = React.lazy(() =>
  import(/* webpackPrefetch: true */ "@perseus-modules/rick-and-morty")
);
function App() {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<LoadingFallBack />}>
        <ApplicationProvider>
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <BrowserRouter>
                <Switch>
                  <ToastProvider>
                    <Layout>
                      <Route
                        path={[
                          "/rick-and-morty/characters/:characterId",
                          "/rick-and-morty/characters",
                        ]}
                        component={Home}
                        exact
                      />
                    </Layout>
                  </ToastProvider>
                </Switch>
              </BrowserRouter>
            </ErrorBoundary>
          </QueryClientProvider>
        </ApplicationProvider>
      </React.Suspense>
    </React.StrictMode>
  );
}

export default hot(App);
