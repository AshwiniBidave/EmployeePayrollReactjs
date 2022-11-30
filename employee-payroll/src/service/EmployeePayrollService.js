import config from "../config/config";
import AxiosService from "../AxiosService";
export default class EmployeeService{
    baseURL=config.baseUrl;
    

    addEmployee=(data)=> {
      //console.log(data);
      return AxiosService.postService(`${this.baseURL}employee`,data)
    
    };
    
    
   /* delete =(data) => {
      //return axios.delete(this.baseURL + 'delete/',data)
      return axios.delete(`${this.baseURL}/delete/${data}`);
    };
  
    getAllEmployee =() => {
return axios.get(this.baseURL + "/get/");
    };    
    getEmployeeById = (empId) => {
      axios.get(this.baseURL + `get/${empId}`);
    };
  
    updateEmployee =(empId, data) => {
      console.log(empId);
      return axios.put(this.baseURL + `/update/${empId}`, data);
    };*/
    
    }
    
