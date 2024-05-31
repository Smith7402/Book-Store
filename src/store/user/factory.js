import axios from "axios";

const BASE_URL = import.meta.env?.VITE_BASE_URL;
const factoryUser = {
  // eslint-disable-next-line no-unused-vars
  getListSample: async (payload) => {
    let url = `${BASE_URL}/supplier/${payload.id}`;
    try {
      const response = await axios.get(url, {
        params: { payload },
      });
      return response.data; // Trả về dữ liệu từ phản hồi của Axios
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

export default factoryUser;
