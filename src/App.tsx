import Layout from 'antd/es/layout';
import './App.css';
import Header from './components/Header/Header';
import RightDrawer from './components/RightDrawer/RightDrawer';

function App() {
  return (
    <Layout>
      <Layout>
        <Header />
      </Layout>
      <RightDrawer />
   </Layout>
  );
}

export default App;
