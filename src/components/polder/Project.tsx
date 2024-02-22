import { memo, useState } from 'react';

import useProjectStore from '../../state/project-store';

import projectList from '../../assets/project.json'

const Project = memo(() => {
  const { openProjectPopup } = useProjectStore(state => state);

  const personalProject = projectList.filter(item => item.type === "personal");
  const teamProject = projectList.filter(item => item.type === "team");

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <div>
      <h3>Project !</h3>
      <div className='section'>
        <div className='title_box'>
          <h4>Personal Project</h4>
        </div>
        <ul className='flex flex-wrap'>
          {
            personalProject.map(item => {
              const { id, title, image } = item;
              return (
                <li
                  key={id}
                  className='w-[220px] p-[20px] flex flex-col justify-end items-center cursor-pointer hover:bg-pathColor'
                  onClick={() => openProjectPopup(id)}
                >
                  <div
                    style={{
                      width: imageLoaded ? "" : '100%',
                      height: imageLoaded ? "" : '220px'
                    }}
                  >
                    <img
                      className="max-w-full max-h-[220px]"
                      src={image}
                      alt=""
                      style={{ display: imageLoaded ? 'block' : 'none', }}
                      onLoad={handleImageLoad}
                    />
                  </div>
                  <p className='text-center'>{title}</p>
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
        <ul className='flex flex-wrap'>
          {
            teamProject.map(item => {
              const { id, title, image } = item;
              return (
                <li
                  key={id}
                  className="w-[220px] p-[20px] flex flex-col justify-end items-center cursor-pointer hover:bg-pathColor"
                  onClick={() => openProjectPopup(id)}
                >
                  <div
                    style={{
                      width: imageLoaded ? "" : '100%',
                      height: imageLoaded ? "" : '220px'
                    }}
                  >
                    <img
                      className="max-w-full max-h-[220px]"
                      src={image}
                      alt=""
                      style={{ display: imageLoaded ? 'block' : 'none', }}
                      onLoad={handleImageLoad}
                    />
                  </div>
                  <p className='text-center'>{title}</p>
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