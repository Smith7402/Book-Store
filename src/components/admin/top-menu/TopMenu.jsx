import React, { useState } from "react";
import classes from "./TopMenu.module.scss";
import IconTM_More from "@/components/icons/IconTM_More";
import IconTM_Statistic from "@/components/icons/IconTM_Statistic";
import IconTM_CreateNew from "@/components/icons/IconTM_CreateNew";
import IconTM_Alert from "@/components/icons/IconTM_Alert";
import IconTM_Home from "@/components/icons/IconTM_Home";
import IconTM_Avatar from "@/components/icons/IconTM_Avatar";
import IconTM_CreateSupplier from "@/components/icons/IconTM_CreateSupplier";
import { FaChevronRight } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import CustomButton from "../../../components/custom-button/CustomButton";
import CustomSelect from "../../../components/custom-select/CustomSelect";
import CustomInput from "../../../components/custom-input/CustomInput";
import { useForm } from "react-hook-form";

export default function TopMenu() {
  const pathname = useHistory();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormCrOpen, setIsFormCrOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleFormCrOpen = () => {
    setIsFormCrOpen(!isFormCrOpen);
    setIsFormOpen(false);
  };

  const handleFormCrClose = () => {
    setIsFormCrOpen(false);
    reset();
  };

  const handleCreateSupplier = () => {
    pathname.push("/portal/supplier/new");
    setIsFormOpen(false);
  };

  const categoryOptions = [
    { value: "", label: "Ngành" },
    { value: "category1", label: "Ngành 1" },
    { value: "category2", label: "Ngành 2" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const updateSupplier = /^\/portal\/supplier\/update\/\d+$/;
  const detailSupplier = /^\/portal\/supplier\/detail\/\d+$/;

  return (
    <div>
      <div className={classes["top-menu"]}>
        <div className={classes["left-section"]}>
          <button onClick={handleButtonClick}>
            <IconTM_CreateSupplier fontSize={2} />
          </button>
          <span>BÁN HÀNG </span>
          {pathname?.location?.pathname == "/portal" ? (
            <span>Nhà cung cấp </span>
          ) : (
            ""
          )}
          {pathname?.location?.pathname == "/portal/supplier" ? (
            <>
              <span>Nhà cung cấp </span>
              <span>
                <FaChevronRight />
                Danh sách nhà cung cấp
              </span>
            </>
          ) : (
            ""
          )}
          {pathname?.location?.pathname == "/portal/supplier/new" ? (
            <>
              <span>Nhà cung cấp </span>
              <span>
                <FaChevronRight />
                Danh sách NCC
              </span>
              <span>
                <FaChevronRight />
                Tạo mới nhà cung cấp
              </span>
            </>
          ) : (
            ""
          )}
          {detailSupplier.test(pathname?.location?.pathname) ? (
            <>
              <span>Nhà cung cấp </span>
              <span>
                <FaChevronRight />
                Danh sách NCC
              </span>
              <span>
                <FaChevronRight />
                Chi tiết thông tin
              </span>
            </>
          ) : (
            ""
          )}

          {updateSupplier.test(pathname?.location?.pathname) ? (
            <>
              <span>Nhà cung cấp </span>
              <span>
                <FaChevronRight />
                Danh sách NCC
              </span>
              <span>
                <FaChevronRight />
                Chỉnh sửa nhà cung cấp
              </span>
            </>
          ) : (
            ""
          )}
          {pathname?.location?.pathname == "/portal/seller" ? (
            <>
              <span>Nhà cung cấp </span>
              <span>
                <FaChevronRight />
                Loại nhà cung cấp
              </span>
            </>
          ) : (
            ""
          )}
        </div>

        <div className={classes["right-section"]}>
          <ul>
            <li>
              <button>
                <IconTM_More fontSize={1.8} />
              </button>
            </li>
            <li>
              <button>
                <IconTM_Statistic fontSize={1.8} />
              </button>
            </li>
            <li>
              <button>
                <IconTM_CreateNew fontSize={1.8} />
              </button>
            </li>
            <li>
              <button>
                <IconTM_Alert fontSize={1.8} />
              </button>
            </li>
            <li>
              <button>
                <a href="/">
                  <IconTM_Home fontSize={1.8} />
                </a>
              </button>
            </li>
            <li>
              <button>
                <IconTM_Avatar fontSize={1.8} />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {isFormOpen && (
        <div className={classes["form-create"]}>
          {pathname?.location?.pathname == "/portal/seller" ? (
            <button
              className={classes["btn-createCategory"]}
              onClick={handleFormCrOpen}
            >
              Tạo danh mục
            </button>
          ) : (
            ""
          )}
          <button
            className={classes["btn-createSupplier"]}
            onClick={handleCreateSupplier}
          >
            Tạo nhà cung cấp
          </button>
        </div>
      )}

      {isFormCrOpen && (
        <div className={classes["form-category"]}>
          <div className={classes["form-category-container"]}>
            <div className={classes["container-label"]}>
              <label htmlFor="">Tạo mới danh mục nhà cung cấp</label>
            </div>

            <form
              onSubmit={handleSubmit((data) => {
                alert(JSON.stringify(data));
              })}
            >
              <div className={classes["container-content"]}>
                <div className={classes["content-top"]}>
                  <div className={classes["select"]}>
                    <label htmlFor="">Thuộc danh mục</label>
                    <CustomSelect
                      name="category"
                      options={categoryOptions}
                      {...register("category")}
                    />
                  </div>

                  <div className={classes["input"]}>
                    <CustomInput
                      label="Tên danh mục"
                      span="*"
                      name="nameCategory"
                      type="text"
                      placeholder="Nhập tên danh mục"
                      register={register}
                      required
                      errors={errors}
                    />
                  </div>
                </div>

                <div className={classes["content-bottom"]}>
                  <label htmlFor="">Ghi chú</label>
                  <textarea
                    type="text"
                    placeholder="Nhập tên danh mục NCC"
                    {...register("note")}
                  />
                </div>
              </div>

              <div className={classes["container-buttons"]}>
                <CustomButton
                  backgroundColor="#D8D7D7"
                  color="#333333"
                  margin="5px 7px 0 0"
                  padding="5px 20px"
                  fontWeight="bold"
                  onClick={handleFormCrClose}
                >
                  Đóng
                </CustomButton>
                <CustomButton
                  backgroundColor="#138300"
                  color="#FFFFFF"
                  margin="5px 7px 0 7px"
                  padding="5px 20px"
                  fontWeight="bold"
                  type="submit"
                >
                  Lưu & Thoát
                </CustomButton>
                <CustomButton
                  backgroundColor="#138300"
                  color="#FFFFFF"
                  margin="5px 0 0 7px"
                  padding="5px 20px"
                  fontWeight="bold"
                >
                  Lưu & Tiếp tục
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
