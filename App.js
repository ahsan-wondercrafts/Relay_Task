import React from 'react';
import TopTabs from './src/Navigations/TopTabs';
import Custom_Header from './src/Components/Custom_Header';
import environment from './src/API/GraphQL/RelayEnvironment';
import { RelayEnvironmentProvider } from 'react-relay';
import { Loader } from './src/Components/Custom_Loader';

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <React.Suspense fallback={<Loader />}>
        <Custom_Header />
        <TopTabs />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
