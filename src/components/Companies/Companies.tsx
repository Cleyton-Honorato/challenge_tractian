import { EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Button, Modal, Input } from "antd";

import { ShopOutlined } from "@ant-design/icons";
import { useGetCompaniesQuery } from "../../api/main.api";

import styles from "./Companies.module.scss";
import { Spin } from "antd";

export default function Companies() {
  const { data, isFetching } = useGetCompaniesQuery();

  const [companies, setCompanies] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    setCompanies(data);
  }, [data]);

  const onOk = () => {
    setCompanies(
      companies?.map((company) => ({ ...company, name: companyName }))
    );
    setShowModal(false);
  };

  return (
    <div>
      <Spin spinning={isFetching}>
        {companies &&
          companies.map((item) => (
            <div className={styles.company} key={item.id}>
              <div className={styles.icon}>
                <ShopOutlined />
              </div>

              <div className={styles.info}>
                <Button
                  icon={<EditOutlined />}
                  onClick={() => setShowModal(true)}
                />
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
      </Spin>

      {showModal && (
        <Modal
          title="Editar nome da empresa"
          open={showModal}
          onOk={onOk}
          onCancel={() => setShowModal(false)}
          okText="Salvar"
          cancelText="Cancelar"
        >
          <Input
            value={companyName}
            placeholder="Nome da empresa"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Modal>
      )}
    </div>
  );
}
