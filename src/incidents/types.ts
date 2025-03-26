export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'OPEN' | 'CLOSED';
}
export interface GetIncidentsArgs {
  page: number;
  limit: number;
  status?: 'OPEN' | 'CLOSED';
  severity?: 'LOW' | 'MEDIUM' | 'HIGH';
}
export interface AddIncidentArgs {
   title: string;
   description: string;
   severity: 'LOW' | 'MEDIUM' | 'HIGH';
   status: 'OPEN' | 'CLOSED'
}
export interface UpdateIncidentArgs {
    id: string;
    title?: string;
    description?: string;
    severity?: 'LOW' | 'MEDIUM' | 'HIGH'; status?: 'OPEN' | 'CLOSED'
}
export interface DeleteIncidentArgs { id: string }
export interface PaginatedIncidents {
  incidents: Incident[];
  total: number;
}
