import axios from "axios";
import { useState } from "react";


const ApiHandler = () => {

    const [data , setData] = useState([])
    const addPostData = async () => {
        try {
            const response = await axios.get('https://mockstorageapi.vercel.app/post')
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="max-w-[600px] w-full bg-gray-200 p-5 rounded-xl my-4">
        <p className="text-lg w-full break-words pb-3">fetch('https://mockstorageapi.vercel.app/post')</p>
        <p className="text-center -ml-16">.then(res=&gt;res.json())</p>
        <p className="text-center ">.then(json=&gt;console.log(json))</p>
      </div>
      <button onClick={addPostData} className="btn">
        Fetch data
      </button>
      <div className="max-w-[600px] w-full bg-gray-200 p-5 rounded-xl my-4 h-[300px] overflow-scroll">
        {data?.map((item , index)=>{
            return(
                <p key={index}>{JSON.stringify(item)}</p>
            )
        })}
      </div>
    </div>
  )
}

export default ApiHandler
