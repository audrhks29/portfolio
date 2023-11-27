import React, { memo } from 'react';

import useProjectStore from '../../state/project';
import useStore from '../../state';

const Project = memo(() => {
  const { projectData, openProjectPopup } = useProjectStore(state => state)
  const personalProject = projectData.filter(item => item.type === "personal")
  const teamProject = projectData.filter(item => item.type === "team")
  return (
    <div className='project_content'>
      <h3>Project !</h3>
      <div className='section'>
        <div className='title_box'>
          <h4>Personal Project</h4>
        </div>
        <ul>
          {
            personalProject.map(item => {
              const { id, title, image } = item;
              return (
                <li
                  key={id}
                  className='projectList'
                  onClick={() => openProjectPopup(id)}
                >
                  <div className='projectImage'>
                    <img src={image} alt="" />
                  </div>
                  <p className='projectName'>{title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='section'>
        <div className='title_box'>
          <h4>Team Project</h4>
        </div>
        <ul>
          {
            teamProject.map(item => {
              const { id, title, image } = item;
              return (
                <li
                  key={id}
                  className='projectList'
                  onClick={() => openProjectPopup(id)}
                >
                  <div className='projectImage'>
                    <img src={image} alt="" />
                  </div>
                  <p className='projectName'>{title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
});

export default Project;