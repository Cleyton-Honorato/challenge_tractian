import { Divider } from "antd";

import { useGetAssetsQuery, useGetUsersQuery } from "../../api/main.api";

import Companies from "../../components/Companies/Companies";
import AssetsGrid from "../../components/AssetsGrid/AssetsGrid";
import ServiceOrders from "../../components/ServiceOrders/ServiceOrders";
import Units from "../../components/Units/Units";

export default function Home() {
  // useGetAssetsQuery();
  // useGetUsersQuery();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        background: "#f5f5f5",
        padding: "10px 20px",
      }}
    >
      {/* <Companies /> */}
      <Divider />
      <AssetsGrid />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "10px",
        }}
      >
        {/* <ServiceOrders />
        <Divider type="vertical" style={{ height: "auto" }} />
        <Units /> */}
      </div>
    </div>
  );
}
