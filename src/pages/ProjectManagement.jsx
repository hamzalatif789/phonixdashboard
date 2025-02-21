import IssuesProgressSection from '@/components/issues'
import ProjectDashboard from '@/components/ProjectDashboard'
import ProjectTable from '@/components/Projectsummery'
import TodoActivitySection from '@/components/todoactivity'
import React from 'react'
function ProjectManagement() {
  return (
    <>
    <div>
     <ProjectDashboard/>
    </div>
    <div>
      <IssuesProgressSection/>
    </div>
    <div className='pt-5'>
      <TodoActivitySection/>
    </div>
    <div>
      <ProjectTable/>
    </div>
    </>
  )
}

export default ProjectManagement
