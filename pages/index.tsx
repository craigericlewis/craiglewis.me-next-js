import React from 'react';

import { ThemeProvider } from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Landing from '../components/Sections/Landing';
import Work from '../components/Sections/Work';
import Footer from '../components/Sections/Footer';
import theme from '../theme';
import GlobalStyles from '../theme/globalStyles';

const IndexPage: React.FC = () => (
  <ThemeProvider theme={theme}>
    <PageWrapper title={'Craig Lewis'}>
      <Landing />
      <Work />
      <Footer />
    </PageWrapper>
    <GlobalStyles />
  </ThemeProvider>
);
export default IndexPage;
