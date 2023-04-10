export type GetCompaniesResponse = Array<{ id: number; name: string }>;

export interface GetAssetsDetailsResponse {
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

export type GetUnitsResponse = Array<{
  companyId: number;
  id: number;
  name: string;
}>;

interface Workorders {
  assetId: number;
  assignedUserIds: number[];
  checklist: {
    completed: boolean;
    task: string;
  }[];
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
  assignee?: { label: string; value: string };
}

export type GetWorkordersResponse = Array<Workorders>;

export interface Users {
  companyId: number;
  email: string;
  id: number;
  name: string;
  unitId: number;
}

export type GetUsersResponse = Array<Users>;
