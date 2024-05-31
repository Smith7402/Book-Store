import React from "react";
import classes from "./CreateNewSupplier.module.scss";
import CustomSelect from "../../components/custom-select/CustomSelect";
import { FaChevronLeft } from "react-icons/fa";
import CustomButton from "../../components/custom-button/CustomButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import actionSupplier from "../../store/supplier/action";
import { useHistory } from "react-router-dom";
import { toast } from "sonner";

export default function CreateNewSupplier() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const dispatch = useDispatch();

  const getListSupplier = () => {
    dispatch({
      type: actionSupplier.FETCH_SUPPLIER_REQUEST,
      payload: {},
    });
  };

  const onSubmit = (data) => {
    // Gửi dữ liệu lấy từ biểu mẫu lên Redux Saga để tạo mới nhà cung cấp
    dispatch({
      type: actionSupplier.CREATE_SUPPLIER_REQUEST,
      payload: data,
      callback: {
        success: () => {
          // show message thông báo thêm thành công
          toast.success("Thêm thành công");
          getListSupplier();
          history.push("/portal/supplier");
        },
        failed: () => {
          toast.error("Thêm thất bại");
        },
      },
    });
  };

  const categoryOptions = [
    { value: "", label: "Danh mục" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const debtCodeOptions = [
    { value: "", label: "Nhập mã công nợ" },
    { value: "07042002", label: "07042002" },
    { value: "20020407", label: "20020407" },
  ];

  const province_cityOptions = [
    { value: "", label: "Tỉnh/ Thành phố" },
    { value: "Đà Nẵng", label: "Đà Nẵng" },
    { value: "Đà Lạt", label: "Đà Lạt" },
  ];

  const districtOptions = [
    { value: "", label: "Quận/ Huyện" },
    { value: "Thanh Khê", label: "Thanh Khê" },
    { value: "Hải Châu", label: "Hải Châu" },
  ];

  const wardsOptions = [
    { value: "", label: "Phường/ Xã" },
    { value: "Hòa Thuận Đông", label: "Hòa Thuận Đông" },
    { value: "Thanh Khê Tây", label: "Thanh Khê Tây" },
    { value: "An Khê", label: "An Khê" },
  ];

  // eslint-disable-next-line react/display-name
  const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
    <>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="Giao dịch">Giao dịch</option>
        <option value="Tạm dừng">Tạm dừng</option>
      </select>
    </>
  ));

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
                placeholder="Nhập tên nhà cung cấp"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && <p>This field is required</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Danh mục <span>*</span>
              </label>
              <CustomSelect
                name="category"
                defaultValue=""
                options={categoryOptions}
                {...register("category", {
                  required: true,
                })}
              />
              {errors.category && <p>This field is required</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Số điện thoại <span>*</span>
              </label>
              <input
                type="number"
                placeholder="Nhập số điện thoại"
                {...register("phone", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
              />
              {errors?.phone?.type === "required" && (
                <p>This field is required</p>
              )}
              {(errors?.phone?.type === "maxLength" ||
                errors?.phone?.type === "minLength") && (
                <p>Invalid number length</p>
              )}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Mã code <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập mã code"
                {...register("code", {
                  required: true,
                })}
              />
              {errors.code && <p>This field is required</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Công nợ <span>*</span>
              </label>
              <CustomSelect
                name="debtCode"
                defaultValue=""
                options={debtCodeOptions}
                {...register("debtCode", {
                  required: true,
                })}
              />
              {errors.debtCode && <p>This field is required</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                {...register("email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors?.email?.type === "pattern" && <p>Wrong email format</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Tỉnh/ Thành phố <span>*</span>
              </label>
              <CustomSelect
                name="city"
                defaultValue=""
                options={province_cityOptions}
                {...register("city", {
                  required: true,
                })}
              />
              {errors.city && <p>This field is required</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Quận/ Huyện <span>*</span>
              </label>
              <CustomSelect
                name="district"
                defaultValue=""
                options={districtOptions}
                {...register("district", {
                  required: true,
                })}
              />
              {errors.district && <p>This field is required</p>}
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">
                Phường/ Xã <span>*</span>
              </label>
              <CustomSelect
                name="wards"
                defaultValue=""
                options={wardsOptions}
                {...register("wards", {
                  required: true,
                })}
              />
              {errors.wards && <p>This field is required</p>}
            </div>

            {/* <CustomInput
              label="Địa chỉ cụ thể"
              name="address"
              type="text"
              placeholder="Nhập địa chỉ cụ thể"
              register={register}
            /> */}

            <div className={classes["contents-item"]}>
              <label htmlFor="">Địa chỉ cụ thể</label>
              <input
                type="text"
                placeholder="Nhập mã code"
                {...register("address")}
              />
            </div>

            <div className={classes["contents-item"]}>
              <label htmlFor="">Trạng thái</label>
              <div className={classes["custom-select"]}>
                <Select {...register("state")} />
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
