import React from 'react';

import { ThemeProvider } from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import Landing from '../components/Sections/Landing';
import Coops from '../components/Sections/Coops';
import Footer from '../components/Sections/Footer';
import Work from '../components/Sections/Work';
import theme from '../theme';
import GlobalStyles from '../theme/globalStyles';

const IndexPage: React.FC = () => (
  <ThemeProvider theme={theme}>
    <PageWrapper title={'Craig Lewis'}>
      <Landing />
      <Work/>
      <Coops />
      <Footer />
    </PageWrapper>
    <GlobalStyles />
  </ThemeProvider>
);
export default IndexPage;
