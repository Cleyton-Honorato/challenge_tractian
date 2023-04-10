import { useState, useEffect } from "react";
import { Spin, Button, Modal, Input, Space } from "antd";
import classnames from "classnames";

import { EditOutlined } from "@ant-design/icons";

import { useGetWorkOrdersQuery } from "../../api/main.api";

import styles from "./ServiceOrders.module.scss";
import AssigneeSelect from "../AssigneeSelect/AssigneeSelect";

const Status = (props: { status: string }) => {
  const status = props.status;

  const classes = classnames(styles.status, {
    [styles.completed]: status === "completed",
    [styles.inProgress]: status === "in progress",
  });

  return <span className={classes}>{status}</span>;
};

export default function ServiceOrders() {
  const { data, isFetching } = useGetWorkOrdersQuery();

  const [workorders, setWorkorders] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [workorderId, setWorkorderId] = useState<number | null>(null);
  const [assignee, setAssignee] = useState(undefined);

  const workordersFilter = workorders?.find((item) => item.id === workorderId);

  useEffect(() => {
    setWorkorders(data);
  }, [data]);

  const onOk = () => {
    setWorkorders(
      workorders?.map((item) => {
        if (item.id === workorderId) {
          return {
            ...item,
            description: description ? description : item.description,
            assignee,
          };
        }

        return item;
      })
    );
    setShowModal(false);
    setDescription("");
    setWorkorderId(null);
  };

  const onCancel = () => {
    setShowModal(false);
    setDescription("");
    setWorkorderId(null);
  };

  return (
    <div className={styles.container}>
      <h1>Ordem de serviços</h1>

      <Spin spinning={isFetching}>
        <div className={styles.content}>
          {workorders &&
            workorders.map((item) => (
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.title}>
                    <span>{item.title}</span>
                    <Status status={item.status} />
                  </div>

                  <Button
                    icon={<EditOutlined />}
                    onClick={() => {
                      setShowModal(true);
                      setWorkorderId(item.id);
                    }}
                    className={styles.btn}
                  />
                </div>

                <div className={styles.info}>
                  <div>
                    <strong>Prioridade: </strong>
                    <span>{item.priority}</span>
                  </div>

                  <div>
                    <strong>Descrição: </strong>
                    <span>{item.description}</span>
                  </div>
                  {assignee && (
                    <div>
                      <strong>Responsável: </strong>
                      <span>{item.assignee?.label}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </Spin>

      {showModal && (
        <Modal
          title="Editar descrição"
          open={showModal}
          onOk={onOk}
          onCancel={onCancel}
          okText="Salvar"
          cancelText="Cancelar"
        >
          <div className={styles.contentModal}>
            <Input
              value={description}
              placeholder="Descrição"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Space>
              <strong>Responsável</strong>
              <AssigneeSelect
                assigneeIds={workordersFilter?.assignedUserIds}
                onChange={setAssignee}
              />
            </Space>
          </div>
        </Modal>
      )}
    </div>
  );
}
