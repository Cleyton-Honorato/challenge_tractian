export enum EStatus {
  InAlert = "inAlert",
  InOperation = "inOperation",
  InDowntime = "inDowntime",
}

export const EStatusDict = {
  [EStatus.InAlert]: "Em Alerta",
  [EStatus.InOperation]: "Em Operação",
  [EStatus.InDowntime]: "Em Parada",
};
