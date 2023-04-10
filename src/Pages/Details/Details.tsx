import { Spin } from "antd";
import { useParams } from "react-router";

import { useGetAssetsDetailsQuery } from "../../api/main.api";
import AssetInfo from "../../components/AssetInfo/AssetInfo";
import Gauge from "../../components/Gauge/Gauge";

export default function Details() {
  const { id } = useParams<{ id: string }>();

  const { data, isFetching } = useGetAssetsDetailsQuery({ id });

  return (
    <Spin spinning={isFetching}>
      {data && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
            background: "#f5f5f5",
            padding: "25px 20px",
            flexWrap: "wrap",
            gap: "5rem",
          }}
        >
          <AssetInfo asset={data} />
          <Gauge healthscore={data.healthscore} />
        </div>
      )}
    </Spin>
  );
}
