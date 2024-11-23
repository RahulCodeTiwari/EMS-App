import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10.bg-[#ICICIC] h-screen'>
       <Header />
       <TaskListNumbers />
       <TaskList />
    </div>
  )
}

export default EmployeeDashboard