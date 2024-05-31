import axios from "axios";

const BASE_URL = import.meta.env?.VITE_BASE_URL;

const factorySupplier = {
  // Hàm để call api
  // eslint-disable-next-line no-unused-vars
  getListSample: async (payload) => {
    let url = `${BASE_URL}/supplier`;
    try {
      const response = await axios.get(url, {
        params: {},
      });
      return response.data; // Trả về dữ liệu từ phản hồi của Axios
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  // Hàm để tạo nhà cung cấp mới
  createSupplier: async (payload) => {
    let url = `${BASE_URL}/supplier`;
    try {
      const response = await axios.post(url, payload);
      return response.data;
    } catch (error) {
      console.error("Error creating supplier:", error);
      throw error;
    }
  },

  // Hàm để cập nhật thông tin nhà cung cấp
  updateSupplier: async (payload) => {
    let url = `${BASE_URL}/supplier/${payload.id}`;
    try {
      const response = await axios.put(url, payload.data);
      return response.data;
    } catch (error) {
      console.error("Error updating supplier:", error);
      throw error;
    }
  },

  // Hàm để xóa nhà cung cấp
  deleteSupplier: async (payload) => {
    let url = `${BASE_URL}/supplier/${payload}`;
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.error("Error deleting supplier:", error);
      throw error;
    }
  },

  // Hàm để call api supplier theo id
  getSupplierById: async (payload) => {
    let url = `${BASE_URL}/supplier/${payload.id}`;
    try {
      const response = await axios.get(url, {
        params: { payload },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching supplier by ID:", error);
      throw error;
    }
  },
};

export default factorySupplier;
