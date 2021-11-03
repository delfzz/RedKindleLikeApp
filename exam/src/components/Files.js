import React,{useState}from 'react'
import FirstBook from '../textFiles/sample_book 1.txt'
import SecondBook from '../textFiles/sample_book 2'
import ShowFileDatas from './ShowFileDatas'

const Files = () => {


  const [fileData, setFileData ] = useState('')
  const [show, setShow] = useState(false)
  const [backBtn,setBackBtn] = useState(false)

const readTextFileSecond=(file)=>
{
    var fileContent = new XMLHttpRequest();
    fileContent.open("GET", file, false);
    fileContent.onreadystatechange = function ()
    {
        if(fileContent.readyState === 4)
        {
            if(fileContent.status === 200 || fileContent.status === 0)
            {
                var allText = fileContent.responseText;
               setFileData(allText)
               setShow(true)
               setBackBtn(true)
            }
        }
    }
    fileContent.send(null);
   
}
const backButton =()=>{

  setBackBtn(false)
  setShow(false)

}
    return <div>

              <div>
                  { backBtn &&<div style={{backgroundColor:'grey',justifyContent:'flex-start',display:'flex'}} onClick={()=>backButton()}> 
                  
                     <div style={{padding:20}}>Back</div>
                     
                    </div>
                  }
              </div>
                  { 
                  !show && <div style={{display:'flex',justifyContent:'space-around',margin:180}}>
                    <div style={{backgroundColor:'grey',borderRadius:5}} onClick={()=>readTextFileSecond(FirstBook)}>
                       <div style={{margin:100, marginTop:10}}> BOOK 1</div>
                      </div>
                      <div style={{backgroundColor:'blue',borderRadius:5}} onClick={()=>readTextFileSecond(SecondBook)}>
                       <div style={{margin:100, marginTop:10}}> BOOK 2</div>
                      </div>
                  </div>
                  }
              
                <div>
                    {show && <ShowFileDatas fileData = {fileData}/>}
                </div>
            </div>
}

export default Files