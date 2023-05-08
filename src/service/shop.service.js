import BaseService from "./base-service/base.service";
import axios from 'axios'
class ShopService extends BaseService{
  constructor() {
    super();
    this.controller = "Shop"
  }

  /**
   * thêm mới
   * @param {*} param 
   * @returns 
   */
  addShop(param) {    
    return axios
      .post(`${this.apiURL}/${this.controller}/addShop`, param,{headers: {
        'Content-Type': 'multipart/form-data'
      }});
  }

  
}



export default new ShopService();