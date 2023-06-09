export interface Data {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: {
    status: string;
    timestamp: string;
  }[];
  healthscore: number;
  id: number | string;
  image: string;
  metrics: {
    lastUptimeAt: string;
    totalCollectsUptime: number;
    totalUptime: number;
  };
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp: number;
  };
  status: string;
  unitId: number;
}

export interface InitialState {
  data: Data[];
}
