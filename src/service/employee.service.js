import BaseService from "./base-service/base.service";
import axios from "axios";
import config from "../config/config.dev.json";
const API_URL = config.BASE_URL_API;
class EmployeeService extends BaseService{
  constructor() {
    super();
    this.controller = "Employee"
  }

  activeAccount(employee){
    return axios
      .post(`${API_URL}/${this.controller}/active`, employee,{
        headers: {
          'Content-Type': 'application/json' // content type bạn muốn sử dụng
        }
      });
  }

  deactiveAccount(employee){
    return axios
      .post(`${API_URL}/${this.controller}/deactive`, employee);
  }
}

export default new EmployeeService();