import React from "react";
import classnames from "classnames";

import { EStatus, EStatusDict } from "../../utils/enums/e-status";

import styles from "./Status.module.scss";

interface StatusProps {
  status: string;
}

export default function Status(props: StatusProps) {
  const status = props.status;

  const classes = classnames(styles.container, {
    [styles.inAlert]: status === EStatus.InAlert,
    [styles.inOperation]: status === EStatus.InOperation,
    [styles.inDowntime]: status === EStatus.InDowntime,
  });

  return <span className={classes}>{EStatusDict[status]}</span>;
}
