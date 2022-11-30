const axios=require('axios').default;
//import axios from 'axios';

class AxiosService{
    postService(url='',payload=null,tokenRequired=false,httpOption=null){
        return axios.post(url,payload,tokenRequired && httpOption );
    }
    getService(url = '') {
        let data = axios.get(url);
        //alert("From axios:" + data.toString())
        return data;
    }
}
module.exports=new AxiosService()
