import React from 'react'

const TeamDetailsPage = async ({ params }: { params: { name: string } }) => {
  const name = (await params).name;
  return (
    <div className='text-black text-5-xl'>
      Team member details Page {name}
    </div>
  )
}

export default TeamDetailsPage
