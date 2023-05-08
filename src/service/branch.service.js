import BaseService from "./base-service/base.service";
import axios from 'axios'
class BranchService extends BaseService{
  constructor() {
    super();
    this.controller = "Branch"
  }

  /**
   * thêm mới
   * @param {*} param 
   * @returns 
   */
  getBrancByUser(param) {    
    return axios
      .post(`${this.apiURL}/${this.controller}/getBrancByUser`, param);
  }

  getAllDataByShop(param){
    return axios
      .get(`${this.apiURL}/${this.controller}/getAllDataByShop?idshop=${param}`, {
        headers: {
          'Content-Type': 'application/json' // content type bạn muốn sử dụng
        }
      });
  }
}



export default new BranchService();