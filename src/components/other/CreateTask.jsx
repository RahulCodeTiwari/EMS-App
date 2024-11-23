import React from 'react'

const CreateTask = () => {
  return (
    
 <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form className='flex flex-wrap w-full bg-[#1c1c1c] items-start justify-between'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent'type="text" placeholder='make a UI design' />
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent' type="date" />
            </div>
                <div>
                <h3  className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px]' type="text" placeholder='employee name' />
                </div>
            <div>
            <h3  className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px]' type="text" placeholder='design, dev, etc' />
            </div>

        </div>
        
          <div>
            <h3  className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' name="" id="" cols="50" rows="10"></textarea>
            </div>
        <button>Create task</button>
    </form>
</div>
    
  )
}

export default CreateTask