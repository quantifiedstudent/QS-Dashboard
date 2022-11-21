import BaseModal from "../baseModal";
import { useDispatch } from "react-redux";
import { setDatasource } from "./store/index";
import {
  AvailableDatasources,
  BaseDatasource,
} from "@Services/api/dto/datasource";
import DatasourceCard from "./components/datasourceCard";

interface DatasourceModalProps {
  handleClose: any;
  show: boolean;
}
const DataSourceModal = (props: DatasourceModalProps) => {
  const dispatch = useDispatch();

  const handleInput = (props: BaseDatasource) => {
    if (!props.token.length) return;
    dispatch(setDatasource({ name: props.name, token: props.token }));
    alert(props.name + " successfilly configured");
  };

  return (
    <BaseModal
      closeHandler={props.handleClose}
      visible={props.show}
      title="Configure datasources"
    >
      <DatasourceCard
        configHandler={handleInput}
        datasource={AvailableDatasources.canvas}
      />
    </BaseModal>
  );
};

export default DataSourceModal;
