import React,{useState} from 'react'
import Axios from 'axios';
import { Input ,Button} from 'antd';

const { Search } = Input;

function HeaderSection(props) {

    const [URL, setURL] = useState("");

    const searchHandler = (event) => {

        setURL(event.currentTarget.value);

    }

    const onSearch = () => {
        Axios.get(`/api?oembedUrl=${URL}`).then(response =>{
                if(response.status === 200){
    
                   props.getData(response.data);
                }else{
                    alert("글을 가져오는데 실패하였습니다.")
                }
            })
    }


    return (
        <div style ={{ height:'100%', }}>
            <div style ={{ display:'flex', justifyContent:'center',alignItems:'center'}}>
                <h1 style = {{fontSize:'xxx-large'}}>oEmbed TEST(이윤수)</h1>

            </div>
            <div style ={{ display:'flex', justifyContent:'center',alignItems:'center'}}>
                <div style= {{ width:'50%'}}>
                    <Search placeholder="URL을 입력해주세요" onChange={searchHandler} onSearch={onSearch} enterButton />
                </div>
           

            </div>

        </div>
    )
}

export default HeaderSection
