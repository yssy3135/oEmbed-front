import React,{useState} from 'react'
import { Layout} from 'antd';
import HeaderSection from './HeaderSection';
import ContentsSection from './ContentsSection';

const { Header, Content, Footer } = Layout;

function LadingPage() {

    const [OembedData, setOembedData] = useState({});
  

    const searchHandler = (data) => {
      setOembedData(data);
    }


    return (
        <Layout className="layout" style={{ minHeight:'100vh',backgroundColor:"#fff"}}>
          <Header  style={{ height:'20%',backgroundColor:"#fff" ,borderBottom:'2px solid black'}} >
            <HeaderSection getData = {searchHandler} />
          </Header>

          <Content style={{ minHeight:'100vh',padding: '0 25%' ,backgroundColor:'' }}>
            <ContentsSection OembedData={OembedData} ></ContentsSection>
          </Content>

      </Layout>
    )
}

export default LadingPage
