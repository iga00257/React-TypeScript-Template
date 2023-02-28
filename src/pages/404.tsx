import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import IconCloudQuestion from '~icons/mdi/cloud-question'
import { headerSlice } from '../app/store'

function InternalPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerSlice.actions.setPageTitle({ title: '' }))
  }, [])

  return (
    <div className=" p-4 flex h-screen justify-center items-center sm:ml-64">
   <div className="text-center">
                <div className="max-w-md">
                <IconCloudQuestion className="h-48 w-48 inline-block"/>
                <h1 className="text-5xl  font-bold">404 - Not Found</h1>
                </div>
            </div>
    </div>
  )
}

export default InternalPage
