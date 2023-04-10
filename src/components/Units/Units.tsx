import { useState, useEffect } from "react";
import { ShopOutlined, EditOutlined } from "@ant-design/icons";
import { Spin, Button, Modal, Input } from "antd";

import styles from "./Units.module.scss";
import { useGetUnitsQuery } from "../../api/main.api";

export default function Units() {
  const { data, isFetching } = useGetUnitsQuery();

  const [units, setUnits] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [unitId, setUnitId] = useState<number | null>(null);

  useEffect(() => {
    setUnits(data);
  }, [data]);

  const onOk = () => {
    setUnits(
      units?.map((item) => {
        if (item.id === unitId) {
          return { ...item, name: unitName };
        }

        return item;
      })
    );
    setShowModal(false);
    setUnitName("");
    setUnitId(null);
  };

  const onCancel = () => {
    setShowModal(false);
    setUnitName("");
    setUnitId(null);
  };

  return (
    <div className={styles.units}>
      <h1>Unidades</h1>

      <Spin spinning={isFetching}>
        <div className={styles.content}>
          {units &&
            units.map((unit) => (
              <div className={styles.unit}>
                <div className={styles.header}>
                  <ShopOutlined className={styles.icon} />

                  <Button
                    icon={<EditOutlined />}
                    onClick={() => {
                      setShowModal(true);
                      setUnitId(unit.id);
                    }}
                    className={styles.btn}
                  />
                </div>
                <span>{unit.name}</span>
              </div>
            ))}
        </div>
      </Spin>

      {showModal && (
        <Modal
          title="Editar nome da unidade"
          open={showModal}
          onOk={onOk}
          onCancel={onCancel}
          okText="Salvar"
          cancelText="Cancelar"
        >
          <Input
            value={unitName}
            placeholder="Nome da unidade"
            onChange={(e) => setUnitName(e.target.value)}
          />
        </Modal>
      )}
    </div>
  );
}
