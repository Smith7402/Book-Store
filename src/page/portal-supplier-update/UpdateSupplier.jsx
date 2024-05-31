import React from "react";
import { useState, useEffect } from "react";
import classes from "./UpdateSupplier.module.scss";
import CustomSelect from "../../components/custom-select/CustomSelect";
import { FaChevronLeft } from "react-icons/fa";
import CustomButton from "../../components/custom-button/CustomButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionSupplier from "../../store/supplier/action";
import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { toast } from "sonner";

export default function UpdateSupplier() {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  /* 
    lỗi, sửa không đc:
    -xung đột giữa value và register
    -các select không hiển thị giá trị được chọn khi thay đổi và cứ cố định ở giá trị gốc của đối tượng
    -các select bắt buộc phải chọn khác đi giá trị ban đầu, ngay cả khi ta k muốn, 
  nghĩa là muốn cập nhật phải thay đổi toàn bộ các select sang giá trị khác với giá trị ban đầu của đối tượng

    -hàm cập nhật k hoạt động (e nghĩ chắc có lẽ phải truyền thêm id)
  */
  const { id } = useParams();
  const dispatch = useDispatch();
  const supplierData = useSelector((state) => state.supplier);
  const supApi = supplierData.supplier;
  // console.log(supApi);

  useEffect(() => {
    dispatch({
      type: actionSupplier.GET_SUPPLIER_BY_ID_REQUEST,
      payload: { id: id },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // set data mặc định cho các thành phần input, select trong form
  const [formData, setFormData] = useState({
    nameSupplier: "",
    category: "",
    phoneNumber: "",
    code: "",
    debtCode: "",
    email: "",
    city: "",
    district: "",
    wards: "",
    address: "",
    state: "",
  });

  // hàm để chuyển giá trị sang các mã dạng value (đà nẵng -> city1)
  const mapDatabaseValueToOptionValue = (databaseValue, options) => {
    const option = options.find((option) => option.label === databaseValue);
    return option ? option.value : "";
  };

  // hàm để chuyển toàn bộ các giá trị của đối tượng sang mã value và lưu thành 1 mảng
  useEffect(() => {
    if (typeof supApi === "object") {
      const a = [
        {
          nameSupplier: supApi?.name,
          category: mapDatabaseValueToOptionValue(
            supApi?.category,
            categoryOptions
          ),
          phoneNumber: supApi?.phone,
          code: supApi?.code,
          debtCode: mapDatabaseValueToOptionValue(
            supApi?.debtCode,
            debtCodeOptions
          ),
          email: supApi?.email,
          city: mapDatabaseValueToOptionValue(supApi?.city, cityOptions),
          district: mapDatabaseValueToOptionValue(
            supApi?.district,
            districtOptions
          ),
          wards: mapDatabaseValueToOptionValue(supApi?.wards, wardsOptions),
          address: supApi?.address,
          state: mapDatabaseValueToOptionValue(supApi?.state, stateOptions),
        },
      ];
      setValue(a);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supApi]);

  const categoryOptions = [
    { value: "", label: "Danh mục" },
    { value: "category1", label: "1" },
    { value: "category2", label: "2" },
    { value: "category3", label: "3" },
    { value: "category4", label: "4" },
  ];

  const debtCodeOptions = [
    { value: "", label: "Nhập mã công nợ" },
    { value: "debtCode1", label: "07042002" },
    { value: "debtCode2", label: "20020407" },
  ];

  const cityOptions = [
    { value: "", label: "Tỉnh/ Thành phố" },
    { value: "city1", label: "Đà Nẵng" },
    { value: "city2", label: "Đà Lạt" },
  ];

  const districtOptions = [
    { value: "", label: "Quận/ Huyện" },
    { value: "district1", label: "Thanh Khê" },
    { value: "district2", label: "Hải Châu" },
  ];

  const wardsOptions = [
    { value: "", label: "Phường/ Xã" },
    { value: "wards1", label: "Hòa Thuận Đông" },
    { value: "wards2", label: "An Khê" },
    { value: "wards3", label: "Thanh Khê Tây" },
  ];

  const stateOptions = [
    { value: "", label: "Trạng thái" },
    { value: "trading", label: "Giao dịch" },
    { value: "pause", label: "Tạm dừng" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [Value, setValue] = useState([]);

  // truyền mảng mang các giá trị vào form để hiển thị data ra màn hình
  useEffect(() => {
    // Update formData with the first element of apiValue
    if (Value.length > 0) {
      setFormData(Value[0]);
    }
  }, [Value]);

  // cho phép thay đổi giá trị đc hiển thị trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // eslint-disable-next-line no-unused-vars
  const getListSupplier = () => {
    dispatch({
      type: actionSupplier.FETCH_SUPPLIER_REQUEST,
      payload: {},
    });
  };

  const onSubmit = (data) => {
    // Gửi dữ liệu lấy từ biểu mẫu lên Redux Saga để tạo mới nhà cung cấp
    // dispatch({
    //   type: actionSupplier.UPDATE_SUPPLIER_REQUEST,
    //   payload: data,
    //   callback: {
    //     success: () => {
    //       // show message thông báo thêm thành công
    //       toast.success("Cập nhật thành công");
    //       getListSupplier();
    //     },
    //     failed: () => {
    //       toast.error("Cập nhật thất bại");
    //     },
    //   },
    // });
    // history.push("/portal/supplier");
    alert(JSON.stringify(data));
  };

  return (
    <div className={classes["createNewSupplier"]}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["supplier-inputs"]}>
          <label className={classes["label"]}>Thông tin nhà cung cấp</label>

          <div className={classes["contents-container"]}>
            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Tên nhà cung cấp <span>*</span>
              </label>
              <input
                type="text"
                id="nameSupplier"
                name="nameSupplier"
                placeholder="Nhập tên nhà cung cấp"
                defaultValue={formData.nameSupplier}
                onChange={handleInputChange}
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Danh mục <span>*</span>
              </label>
              <CustomSelect
                name="category"
                options={categoryOptions}
                value={formData.category}
                onChange={handleInputChange}
                {...register("category", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Số điện thoại <span>*</span>
              </label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Nhập số điện thoại"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                {...register("number", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Mã code <span>*</span>
              </label>
              <input
                type="text"
                name="code"
                placeholder="Nhập mã code"
                defaultValue={formData.code}
                onChange={handleInputChange}
                {...register("code", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Công nợ <span>*</span>
              </label>
              <CustomSelect
                name="debtCode"
                options={debtCodeOptions}
                value={formData.debtCode}
                onChange={handleInputChange}
                {...register("debtCode", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                defaultValue={formData.email}
                onChange={handleInputChange}
                {...register("email")}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Tỉnh/ Thành phố <span>*</span>
              </label>
              <CustomSelect
                name="city"
                options={cityOptions}
                value={formData.city}
                onChange={handleInputChange}
                {...register("city", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Quận/ Huyện <span>*</span>
              </label>
              <CustomSelect
                name="district"
                options={districtOptions}
                value={formData.district}
                onChange={handleInputChange}
                {...register("district", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Phường/ Xã <span>*</span>
              </label>
              <CustomSelect
                name="wards"
                options={wardsOptions}
                value={formData.wards}
                onChange={handleInputChange}
                {...register("wards", {
                  required: true,
                })}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">Địa chỉ cụ thể</label>
              <input
                type="text"
                name="address"
                placeholder="Nhập địa chỉ cụ thể"
                defaultValue={formData.address}
                onChange={handleInputChange}
                {...register("address")}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">Trạng thái</label>
              <div className={classes["custom-select"]}>
                <CustomSelect
                  name="state"
                  options={stateOptions}
                  value={formData.state}
                  onChange={handleInputChange}
                  {...register("state", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={classes["supplier-footer"]}>
          <div className={classes["supplier-footer-left"]}>
            <button>
              <FaChevronLeft />
              <a href="/portal/supplier">Quay lại</a>
            </button>
          </div>

          <div className={classes["supplier-footer-right"]}>
            <CustomButton
              backgroundColor="none"
              color="#FF3434"
              margin="5px 10px"
              padding="1px 20px"
              border="1px solid #FF3434"
              fontWeight="bold"
            >
              <a href="/portal/supplier">Hủy bỏ</a>
            </CustomButton>
            <CustomButton
              backgroundColor="#138300"
              color="white"
              margin="5px 10px"
              padding="1px 20px"
              border="1px solid #138300"
              fontWeight="bold"
              type="submit"
            >
              Lưu
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
}
