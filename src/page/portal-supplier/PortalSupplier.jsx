import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./PortalSupplier.module.scss";
import { TbAdjustmentsHeart } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import CustomSelect from "../../components/custom-select/CustomSelect";
import CustomButton from "../../components/custom-button/CustomButton";
import { IoSettingsOutline } from "react-icons/io5";
import { RxTrash } from "react-icons/rx";
import { RiQuillPenLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import actionSupplier from "../../store/supplier/action";
import { toast } from "sonner";

function PortalSupplier() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [suppliers, setSuppliers] = useState([]);
  const [isFormDelOpen, setIsFormDelOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState({});
  const [isOpenState, setIsOpenState] = useState({});

  const handleFormDelOpen = () => {
    setIsFormDelOpen(!isFormDelOpen);
  };

  const handleFormDelClose = () => {
    setIsFormDelOpen(false);
  };

  const supplierData = useSelector((state) => state.supplier);
  // console.log("Log user", supplierData?.user?.[0]);
  const supApi = supplierData?.supplier;

  const getListSupplier = () => {
    dispatch({
      type: actionSupplier.FETCH_SUPPLIER_REQUEST,
      payload: {},
    });
  };

  useEffect(() => {
    getListSupplier();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Kiểm tra nếu supApi là một mảng (dữ liệu thực sự)
    if (Array.isArray(supApi)) {
      // Gán giá trị của supApi cho suppliers
      setSuppliers(supApi);
    }
  }, [supApi]);

  const handleActionClick = (index) => {
    setExpandedMenu((prevExpandedMenu) => {
      // Đảm bảo tất cả các menu đều được đóng trước khi mở menu mới
      const updatedMenu = {};
      for (const key in prevExpandedMenu) {
        updatedMenu[key] = false;
      }
      // Mở menu của nhà cung cấp tương ứng
      updatedMenu[index] = !prevExpandedMenu[index];
      return updatedMenu;
    });
  };

  const handleStateClick = (index) => {
    setIsOpenState((prevExpandedMenu) => {
      // Đảm bảo tất cả các menu đều được đóng trước khi mở menu mới
      const updatedMenu = {};
      for (const key in prevExpandedMenu) {
        updatedMenu[key] = false;
      }
      // Mở menu của nhà cung cấp tương ứng
      updatedMenu[index] = !prevExpandedMenu[index];
      return updatedMenu;
    });
  };

  const handleDeleteSupplier = (supplierId) => {
    // Gửi yêu cầu xóa nhà cung cấp đến Redux Saga
    dispatch({
      type: actionSupplier.DELETE_SUPPLIER_REQUEST,
      payload: supplierId,
      callback: {
        success: () => {
          getListSupplier();
          // show message thông báo xoá thành công
          toast.success("Xoá thành công");
          setIsFormDelOpen(false);
        },
        failed: () => {
          toast.error("Xoá thất bại");
        },
      },
    });
  };

  const handleSetStateClick = (index) => {
    setSuppliers((prevSuppliers) => {
      const updatedSuppliers = [...prevSuppliers];
      // Đảo ngược trạng thái của nhà cung cấp tại index
      updatedSuppliers[index].state =
        updatedSuppliers[index].state === "Giao dịch"
          ? "Tạm dừng"
          : "Giao dịch";
      return updatedSuppliers;
    });

    // Ẩn menu-state của nhà cung cấp được thay đổi
    setIsOpenState((prevOpenState) => ({
      ...prevOpenState,
      [index]: false,
    }));
  };

  const cityOptions = [
    { value: "", label: "Thành phố" },
    { value: "Đà Nẵng", label: "Đà Nẵng" },
    { value: "Đà Lạt", label: "Đà Lạt" },
  ];

  const stateOptions = [
    { value: "", label: "Trạng thái" },
    { value: "Giao dịch", label: "Giao dịch" },
    { value: "Tạm dừng", label: "Tạm dừng" },
  ];

  // Thêm state để lưu trữ trạng thái được chọn từ dropdown
  const [selectedState, setSelectedState] = useState("");
  // Thêm state để lưu trữ thành phố được chọn từ dropdown
  const [selectedCity, setSelectedCity] = useState("");

  // Thêm hàm xử lý sự kiện khi thay đổi trạng thái trong dropdown
  const handleStateChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption.target.value);
    setSelectedState(selectedOption.target.value);
  };

  // Thêm hàm xử lý sự kiện khi thay đổi thành phối trong dropdown
  const handleCityChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption.target.value);
    setSelectedCity(selectedOption.target.value);
  };

  // Thực hiện việc lọc danh sách supplier dựa trên trạng thái được chọn khi nhấn nút tìm kiếm
  const handleSearch = () => {
    // Lọc danh sách supplier dựa trên các điều kiện được chọn
    const filteredSuppliers = supApi.filter((supplier) => {
      // Kiểm tra nếu có trạng thái được chọn và không phải giá trị mặc định
      const isStateMatch = selectedState && supplier.state === selectedState;

      // Kiểm tra nếu có thành phố được chọn và không phải giá trị mặc định
      const isCityMatch = selectedCity && supplier.city === selectedCity;

      return (!selectedState || isStateMatch) && (!selectedCity || isCityMatch);
    });

    // Cập nhật danh sách supplier hiển thị
    setSuppliers(filteredSuppliers);
  };

  const handleResetFilter = () => {
    window.location.reload();
  };

  return (
    <div className={classes["portalSupplier"]}>
      <div className={classes["filter"]}>
        <div className={classes["input-group"]}>
          <input type="text" placeholder="Tìm kiếm mã NCC, tên NCC, email" />
          <CustomSelect
            name="stateSelect"
            defaultValue=""
            options={stateOptions}
            width={210}
            onChange={handleStateChange} // Thêm sự kiện khi thay đổi giá trị
          />
          <CustomSelect
            name="citySelect"
            defaultValue=""
            options={cityOptions}
            width={210}
            onChange={handleCityChange} // Thêm sự kiện khi thay đổi giá trị
          />
        </div>
        <div className={classes["button-group"]}>
          <CustomButton
            backgroundColor="#f2f2f2"
            color="#707070"
            margin="0 20px 0 0"
            padding="5px 20px"
            fontWeight="bold"
            onClick={handleResetFilter} // Thêm sự kiện khi nhấn nút "Thiết lập lại"
          >
            Thiết lập lại
          </CustomButton>
          <CustomButton
            backgroundColor="#138300"
            color="white"
            margin="0 20px 0 0"
            padding="5px 20px"
            fontWeight="bold"
            onClick={handleSearch} // Thêm sự kiện khi nhấn nút
          >
            Tìm kiếm
          </CustomButton>
          <CustomButton
            backgroundColor="#d2f2cc"
            color="#138300"
            margin="0 20px 0 0"
            padding="9px"
          >
            <TbAdjustmentsHeart />
          </CustomButton>
          <CustomButton backgroundColor="#ffcd29" color="#131313" padding="9px">
            <BsThreeDots />
          </CustomButton>
        </div>
      </div>

      <div className={classes["supplier-container"]}>
        <table className={classes["table"]}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Mã NCC</th>
              <th>Tên nhà cung cấp</th>
              <th>Danh mục</th>
              <th>Mã code</th>
              <th>Mã công nợ</th>
              <th>Điện thoại</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th className={classes["center"]}>Trạng thái</th>
              <th className={classes["center"]}>Tác vụ</th>
            </tr>
          </thead>

          <tbody>
            {suppliers?.map((supplier, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className={classes["blue"]}>
                    <button
                      onClick={() =>
                        history.push(`/portal/supplier/detail/${supplier.id}`)
                      }
                    >
                      {supplier.code_supplier}
                    </button>
                  </td>
                  <td>{supplier.name}</td>
                  <td>{supplier.category}</td>
                  <td>{supplier.code}</td>
                  <td className={classes["blue"]}>{supplier.debtCode}</td>
                  <td>{supplier.phone}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.address}</td>
                  <td className={`${classes["state"]} ${classes["center"]}`}>
                    <button
                      name="state"
                      className={`${classes["stateBtn"]} ${supplier.state == "Tạm dừng" ? classes["red"] : classes["green"]}`}
                      onClick={() => handleStateClick(index)}
                    >
                      {supplier.state}
                    </button>
                    {isOpenState[index] && (
                      <div className={classes["menu-state"]}>
                        <button
                          name="setState"
                          className={classes["menu-state-btn"]}
                          onClick={() => handleSetStateClick(index)}
                        >
                          {supplier.state === "Giao dịch"
                            ? "Tạm dừng"
                            : "Giao dịch"}
                        </button>
                      </div>
                    )}
                  </td>
                  <td className={classes["action"]}>
                    <button
                      name="setting"
                      onClick={() => handleActionClick(index)}
                    >
                      <IoSettingsOutline />
                    </button>
                    {expandedMenu[index] && (
                      <div className={classes["menu"]}>
                        <button
                          className={classes["update"]}
                          onClick={() =>
                            history.push(
                              `/portal/supplier/update/${supplier.id}`
                            )
                          }
                        >
                          <RiQuillPenLine />
                          Sửa
                        </button>
                        <button
                          className={classes["delete"]}
                          // onClick={() => handleDeleteSupplier(supplier.id)}
                          onClick={handleFormDelOpen}
                        >
                          <RxTrash />
                          Xóa
                        </button>
                      </div>
                    )}
                  </td>
                  {isFormDelOpen && (
                    <div className={classes["form-delete"]}>
                      <div className={classes["form-delete-container"]}>
                        <div className={classes["container-label"]}>
                          <label htmlFor="">Xóa nhà cung cấp</label>
                        </div>
                        <p>
                          Bạn có chắc chắn muốn xóa nhà cung cấp này không ?
                        </p>
                        <div className={classes["form-delete-btn"]}>
                          <CustomButton
                            backgroundColor="#138300"
                            color="white"
                            margin="0 0 0 0"
                            padding="5px 20px"
                            fontWeight="bold"
                            onClick={handleFormDelClose}
                          >
                            Đóng
                          </CustomButton>
                          <CustomButton
                            backgroundColor="#FF3434"
                            color="white"
                            margin="0 0 0 0"
                            padding="5px 20px"
                            fontWeight="bold"
                            onClick={() => handleDeleteSupplier(supplier.id)}
                          >
                            Xóa
                          </CustomButton>
                        </div>
                      </div>
                    </div>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={classes["footer"]}>
        <span>Trang 1</span>
      </div>
    </div>
  );
}

export default PortalSupplier;
