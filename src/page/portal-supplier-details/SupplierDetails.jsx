import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./SupplierDetails.module.scss";
import CustomButton from "../../components/custom-button/CustomButton";
import { FaChevronLeft } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionSupplier from "../../store/supplier/action";
import { toast } from "sonner";

export default function SupplierDetails() {
  const history = useHistory();

  const { id } = useParams();

  const dispatch = useDispatch();
  const supplierData = useSelector((state) => state.supplier);
  const supApi = supplierData.supplier;

  useEffect(() => {
    dispatch({
      type: actionSupplier.GET_SUPPLIER_BY_ID_REQUEST,
      payload: { id: id },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof supApi === "object") {
      const a = [
        {
          name: "Tên nhà cung cấp",
          data: supApi?.name,
        },
        {
          name: "Trạng thái",
          data: supApi?.state,
        },
        {
          name: "Danh mục",
          data: supApi?.category,
        },
        {
          name: "Tỉnh/ Thành phố",
          data: supApi?.city,
        },
        {
          name: "Điện thoại",
          data: supApi?.phone,
        },
        {
          name: "Quận/ Huyện",
          data: supApi?.district,
        },
        {
          name: "Email",
          data: supApi?.email,
        },
        {
          name: "Phường/ Xã",
          data: supApi?.wards,
        },
        {
          name: "Công nợ",
          data: supApi?.debtCode,
        },
        {
          name: "Địa chỉ cụ thể",
          data: supApi?.address,
        },
        {
          name: "Mã code",
          data: supApi?.code,
        },
      ];
      setSupplierDetailData(a);
    }
  }, [supApi]);

  const apiValue = {
    field: "Trạng thái",
    state: "Tạm dừng",
  };

  const [isStateOpen, setIsStateOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [buttonValue, setButtonValue] = useState(apiValue.state);

  const handleOpenState = () => {
    setIsStateOpen(!isStateOpen);
  };

  const handleSetStateClick = (value) => {
    setButtonValue(value);
    setIsStateOpen(false);
  };

  const [supplierDetailData, setSupplierDetailData] = useState([]);

  const [isFormDelOpen, setIsFormDelOpen] = useState(false);
  const handleFormDelOpen = () => {
    setIsFormDelOpen(!isFormDelOpen);
  };

  const handleFormDelClose = () => {
    setIsFormDelOpen(false);
  };

  const getListSupplier = () => {
    dispatch({
      type: actionSupplier.FETCH_SUPPLIER_REQUEST,
      payload: {},
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
          history.push(`/portal/supplier`);
        },
        failed: () => {
          toast.error("Xoá thất bại");
        },
      },
    });
  };

  return (
    <div className={classes["supplierDetails"]}>
      <div className={classes["supplier-details"]}>
        <div className={classes["state"]}>
          <button onClick={handleOpenState} className={classes["state-btn"]}>
            <RiLoopLeftLine />
            Trạng thái
          </button>
          {isStateOpen && (
            <div className={classes["form-createSupplier"]}>
              <button onClick={() => handleSetStateClick("Giao dịch")}>
                Giao dịch
              </button>
              <button onClick={() => handleSetStateClick("Tạm dừng")}>
                Tạm dừng
              </button>
            </div>
          )}
        </div>
        <div className={classes["detail"]}>
          <label className={classes["label"]}>Thông tin nhà cung cấp</label>

          <div className={classes["detail-items"]}>
            {supplierDetailData.map((s, key) => {
              return (
                <div key={key} className={classes["detail-item"]}>
                  <label>{s.name}</label>
                  <p
                    className={`${s.name == "Trạng thái" ? (s.data == "Tạm dừng" ? classes["red"] : classes["green"]) : ""}`}
                  >
                    : {s.data}
                  </p>
                </div>
              );
            })}
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
            onClick={handleFormDelOpen}
          >
            Xóa
          </CustomButton>
          <CustomButton
            backgroundColor="#138300"
            color="white"
            margin="5px 10px"
            padding="1px 20px"
            border="1px solid #138300"
            fontWeight="bold"
            onClick={() =>
              history.push(`/portal/supplier/update/${supApi?.id}`)
            }
          >
            Sửa
          </CustomButton>
        </div>

        {isFormDelOpen && (
          <div className={classes["form-delete"]}>
            <div className={classes["form-delete-container"]}>
              <div className={classes["container-label"]}>
                <label htmlFor="">Xóa nhà cung cấp</label>
              </div>
              <p>Bạn có chắc chắn muốn xóa nhà cung cấp này không ?</p>
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
                  onClick={() => handleDeleteSupplier(id)}
                >
                  Xóa
                </CustomButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
