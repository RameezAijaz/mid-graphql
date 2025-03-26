import { incidents } from './data';
import { Incident, AddIncidentArgs, GetIncidentsArgs, UpdateIncidentArgs, DeleteIncidentArgs, PaginatedIncidents } from './types';

export const resolvers = {
  Query: {
    getIncidents: (
      _: any,
      { page, limit, status, severity }: GetIncidentsArgs
    ): PaginatedIncidents => {
      let filteredIncidents = incidents;

      if (status) {
        filteredIncidents = filteredIncidents.filter(incident => incident.status === status);
      }

      if (severity) {
        filteredIncidents = filteredIncidents.filter(incident => incident.severity === severity);
      }

      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedIncidents = filteredIncidents.slice(startIndex, endIndex);
      const total = filteredIncidents.length;

      return {
        incidents: paginatedIncidents,
        total,
      };
    },
  },
  Mutation: {
    addIncident: (
      _: any,
      { title, description, severity, status }: AddIncidentArgs
    ): Incident => {
      const newIncident: Incident = {
        id: `${incidents.length + 1}`,
        title,
        description,
        severity,
        status,
      };
      incidents.unshift(newIncident);
      return newIncident;
    },

    updateIncident: (
      _: any,
      { id, title, description, severity, status }: UpdateIncidentArgs
    ): Incident => {
      let incident = incidents.find((incident) => incident.id === id);
      if (!incident) {
        throw new Error('Incident not found');
      }
      if (title !== undefined) incident.title = title;
      if (description !== undefined) incident.description = description;
      if (severity !== undefined) incident.severity = severity;
      if (status !== undefined) incident.status = status;

      return incident;
    },
    deleteIncident: (
      _: any,
      { id }: DeleteIncidentArgs
    ): boolean => {
      const index = incidents.findIndex((incident) => incident.id === id);
      if (index === -1) {
        throw new Error('Incident not found');
      }
      incidents.splice(index, 1);
      return true;
    },
  },
};
