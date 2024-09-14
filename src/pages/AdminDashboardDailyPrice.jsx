import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllDailyPrice from '../components/Admin/AllDailyPrice';

const AdminDashboardDailyPrices = () => {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={6} />
        </div>
        <AllDailyPrice />
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardDailyPrices