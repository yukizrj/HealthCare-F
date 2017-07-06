
import {RouteInfo} from "./admin.metadata";
export const Route: RouteInfo[] = [
    { path: './admin-profile', title: 'Change Password',  icon: 'account_box', class: '' },
    { path: './adddoctor', title: 'Add Doctor',  icon:'queue', class: '' },
    { path: './deletedoctor', title: 'Search Doctor',  icon:'search', class: '' },
    { path: './scheduledoctor', title: 'Schedule Doctor',  icon:'date_range', class: '' },
    /*{ path: './approveleave', title: 'Approve Leave',  icon:'check_circle', class: '' },*/
    {path:'/',title:'Logout', icon:'exit_to_app',class:''},
];
