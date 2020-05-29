import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const UserList=React.lazy(()=>import('./views/Users/Components/UserList/UserList'));
const UpdateUser=React.lazy(()=>import('./views/Users/Components/EditUser/EditUser'));
const CreateTaskPage=React.lazy(()=>import('./views/Tasks/Components/CreateTask/CreateTaskPage'));
const UpdateTaskPage=React.lazy(()=>import('./views/Tasks/Components/UpdateTask/UpdateTaskPage'));
const TaskListPage=React.lazy(()=>import('./views/Tasks/Components/TaskList/TaskListPage'));
const ProfilePage=React.lazy(()=>import('./views/Profile/UserProfile/UserProfile'));
const SettingsPage=React.lazy(()=>import('./views/Profile/UserProfile/Settings'));
const InventoryListPage= React.lazy(()=>import('./views/Inventory/Components/InventoryList/InventoryListPage'));

// import UpdateUser from './Users/Components/EditUser/EditUser';


const routes = [
  { path: '/', exact: true, name: 'Home',component: UserList  },
  {path:'/profile',exact:true,name:"Profile",component:ProfilePage},
  { path: '/settings', name: 'Settings', component: SettingsPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/userList', name: 'Users', component: UserList },
  { path: '/editUser/:id', name: 'UpdateUser', component: UpdateUser },
  { path: '/createtask', name: 'CreateTask', component: CreateTaskPage },
  { path: '/updatetask/:id', name: 'UpdateTaskPage', component: UpdateTaskPage },
  { path: '/tasklist', name: 'Tasklist', component: TaskListPage },
  { path: '/inventorylist/:id', name: 'InventoryList', component: InventoryListPage }
// {path:'/login' ,name:"Login",component:LoginPage}
];

export default routes;
