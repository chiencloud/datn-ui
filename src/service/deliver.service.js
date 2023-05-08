import axios from 'axios';
import config from "../config/config.dev.json";
const API_URL = `${config.GHN_URL_API}`;
class LocationService {
  constructor() {
    this.controller = null,
    this.apiURL = API_URL
  }

  /**
   * Lấy danh sách thông tin tỉnh thành
   * @returns 
   */
  getDeliverPrice(param) {
    return axios
      .post(`${API_URL}/shiip/public-api/v2/shipping-order/fee`,param, {
        headers: {
            Token: '6e2adcde-d109-11ed-a3ed-eac62dba9bd9'
        }
       });
  }

  createShippingOrder(param) {
    return axios
      .post(`${API_URL}/shiip/public-api/v2/shipping-order/create`,param, {
        headers: {
            Token: '6e2adcde-d109-11ed-a3ed-eac62dba9bd9',
            ShopId: '3984218 - Chiến Nguyễn'
        }
       });
  }
}

export default new LocationService();