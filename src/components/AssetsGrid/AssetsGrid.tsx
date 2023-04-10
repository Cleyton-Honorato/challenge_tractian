import { PictureOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Table, Tooltip } from "antd";
import { useAppSelector } from "../../redux/hooks";

import Status from "../Status/Status";

import styles from "./AssetsGrid.module.scss";

export default function AssetsGrid() {
  const data = useAppSelector((state) => state.assetsGrid.data);

  const renderColumnName = (name: string, asset: any) => (
    <div className={styles.columnName}>
      <Link to={`details/${asset.id}`}>{name}</Link>
      <Tooltip
        placement="rightTop"
        title={
          <img
            src={asset.image}
            alt="image"
            style={{ maxWidth: 200, maxHeight: 200 }}
          />
        }
      >
        <PictureOutlined />
      </Tooltip>
    </div>
  );

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      render: (name: string, asset: any) => renderColumnName(name, asset),
    },
    {
      title: "Modelo",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Saúde em %",
      dataIndex: "healthscore",
      key: "healthscore",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (stts: string) => <Status status={stts} />,
    },
  ];
  return (
    <div>
      <h1>Bens</h1>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}
