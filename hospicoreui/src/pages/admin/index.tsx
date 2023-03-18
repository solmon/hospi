import { NextPageWithLayout } from "@/types";
import { ReactElement, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/views/Dashboard/Dashboard"

const AdminDashboard: NextPageWithLayout=() =>{
    const [visible, setVisible] = useState(false);
    
    return (
      <Dashboard/>      
    );
};

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    );
  };


  export default AdminDashboard;  