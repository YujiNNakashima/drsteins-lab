import styled from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component

// import NxWelcome from './nx-welcome';
import { Suspense } from 'react';
import ReactMFE from 'ReactMFE/Module';

// import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="react-app-shell" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      {/* <br />
      <hr />
      <br /> */}
      <h1>APP shell</h1>
      <ErrorBoundary fallback={<div>Custom error message or component</div>}>
        <Suspense fallback={<div>Loading Microfrontend...</div>}>
          <ReactMFE />
        </Suspense>
      </ErrorBoundary>
      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes> */}
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
