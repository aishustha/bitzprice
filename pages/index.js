import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'


const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

//fecthing
Index.getInitialProps = async function() {

  //res=reult
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  //when we fetch, return promise

  const data = await res.json();

  return {

    //bpi is response we get in api
    bpi: data.bpi
  };
}

export default Index;