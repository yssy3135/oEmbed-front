import React,{useState} from 'react'
import { Descriptions} from 'antd';

function ContentsSection(props) {

   
    
    const contentInfo = Object.entries(props.OembedData).map( entry=> {
        if(entry[0] === "html"){
            let value = entry[1];
            let html = {__html: value}
            return  <Descriptions.Item span={3} label={entry[0]}> 
                        {value}
                    <div dangerouslySetInnerHTML={html}></div>
            </Descriptions.Item>
        }else if( entry[0] === "thumbnail_url"){
            let value = entry[1];
            return <Descriptions.Item span={3} label={entry[0]}>
                    <img src={value}></img>
                 </Descriptions.Item>

        }else{
            return <Descriptions.Item span={3} label={entry[0]}> {entry[1]}</Descriptions.Item>
        }

        
    })



    


    return (
        <div style={{backgroundColor:'white' ,height:'100%'}}>
             <Descriptions  bordered style = {{width:'100%'}}>
                {contentInfo}
            </Descriptions>
        </div>
    )
}

export default ContentsSection
