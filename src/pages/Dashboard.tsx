import IconCloudQuestion from '~icons/mdi/cloud-question'

import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import DashboardTopBar from '../features/dashboard/DashboardTopBar'
import DashboardStats from '../features/dashboard/DashboardStats'
import { useDispatch } from 'react-redux'
import InputText from '../components/Input/InputText'
import { headerSlice } from '../app/store'
import Charts from '../features/charts'
const statsData = [
  { title: 'Training資訊1', value: '100%', icon: <UserGroupIcon color=' green' className=' w-8 h-8 ml-2'/>, description: 'Training資訊輔助說明' },
  { title: 'Accuracy', value: '100%', icon: <CreditCardIcon color=' green' className=' w-8 h-8 ml-2'/>, description: '衡量model的準確率' },
  { title: 'Precision', value: '30%', icon: <CircleStackIcon color=' green' className=' w-8 h-8 ml-2'/>, description: 'tp/(tp+tf)' },
  { title: 'Recall', value: '20%', icon: <UsersIcon color=' green' className=' w-8 h-8 ml-2'/>, description: '↙ 300 (22%) 有幾個是預測正確的' }
]

function Dashboard () {
  const dispatch = useDispatch()
  const updateDashboardPeriod = (newRange: string) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(headerSlice.actions.showNotification({ message: `Period updated to ${newRange}`, status: 1 }))
  }
  return (
        <div className="p-4 lg:ml-64 ">
   <div className="grid p-4 rounded-lg mt-14 gap-8">
      {/* Select content */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6" >
         {statsData.map((data, index) => {
           return <DashboardStats key={index} {...data}/>
         })}
      </div>
        {/** ---------------------- Input Text ------------------------- */}
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 '>
         <InputText type="text" updateType="prjectName" containerStyle="w-3/4" labelTitle="Input Text" updateFormValue={(val) => { console.log(val) }} />
         <InputText type="text" updateType="prjectName" containerStyle="w-3/4" labelTitle="Input Text" updateFormValue={(val) => { console.log(val) }} />
      </div>
        {/** ---------------------- Different charts ------------------------- */}
      <div className=' '>
        <Charts/>

      </div>
      

      {/* <div className="grid  sm:grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
      </div> */}
   </div>
</div>
  )
}

export default Dashboard
