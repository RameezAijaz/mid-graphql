import { Incident } from './types';
// mock data
export let incidents: Incident[] = [
  { id: '1', title: 'Suspicious DNS Activity', description: 'Unusual DNS queries from internal host', severity: 'HIGH', status: 'OPEN' },
  { id: '2', title: 'Unauthorized Login Attempt', description: 'Login attempt from unrecognized IP', severity: 'MEDIUM', status: 'CLOSED' },
  { id: '3', title: 'Memory Leak', description: 'Memory consumption issue', severity: 'MEDIUM', status: 'OPEN' },
  { id: '4', title: 'Disk Full', description: 'Disk space running out', severity: 'HIGH', status: 'OPEN' },
  { id: '5', title: 'API Rate Limit', description: 'Rate limit exceeded', severity: 'MEDIUM', status: 'CLOSED' },
  { id: '6', title: 'Network Latency', description: 'Slow network response', severity: 'LOW', status: 'OPEN' },
  { id: '7', title: 'Service Restart', description: 'Service was restarted', severity: 'LOW', status: 'CLOSED' },
  { id: '8', title: 'High CPU Usage', description: 'CPU usage spike', severity: 'HIGH', status: 'OPEN' },
  { id: '9', title: 'Disk I/O Error', description: 'Disk input/output error', severity: 'HIGH', status: 'OPEN' },
  { id: '10', title: 'Failed Deployment', description: 'Deployment failed due to an error', severity: 'MEDIUM', status: 'OPEN' },
];
