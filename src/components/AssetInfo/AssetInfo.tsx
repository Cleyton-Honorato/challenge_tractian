import { useAppSelector } from "../../redux/hooks";

import { Data } from "../../redux/AssetsGrid/types";
import styles from "./AssetInfo.module.scss";

interface AssetInfoProps {
  asset: Data;
}

export default function AssetInfo(props: AssetInfoProps) {
  const { asset } = props;

  const users = useAppSelector((state) => state.usersList.users);

  const assigned = users.find((user) => user.id === asset.assignedUserIds[0]);

  const lastUptimeAt = new Date(asset.metrics.lastUptimeAt);

  const dateWithIntl = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{asset.name}</h1>
      </div>
      <div className={styles.details}>
        <img src={asset.image} alt="asset" />

        <div className={styles.info}>
          <div>
            <strong>Modelo: </strong>
            <span>{asset.model}</span>
          </div>

          <div>
            <strong>Data da última coleta: </strong>
            <span>{dateWithIntl.format(lastUptimeAt)}</span>
          </div>

          <div>
            <strong>Sensores: </strong>
            <span>{asset.sensors.map((sensor) => sensor)}</span>
          </div>

          <div>
            <strong>Responsavel </strong>
            <span>{assigned?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
