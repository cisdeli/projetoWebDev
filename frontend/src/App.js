import React, {
  Component
} from 'react';

import Main from './main'
import Header from './components/header-footer/header'
import Footer from './components/header-footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
