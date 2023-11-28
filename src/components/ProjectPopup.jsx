import React, { memo, useState } from 'react';

import { ProjectPopupContainer } from '../styled/polderStyles';

import { AiOutlineClose, AiOutlinePicture } from 'react-icons/ai';
import { GiClick } from 'react-icons/gi';

import useProjectStore from '../state/project';

const ProjectPopup = memo(() => {
  const { closeProjectPopup, selectedProject, projectData, changeSelectedProject } = useProjectStore(state => state)
  const { image, title, pageLink, repoLink, isLogin } = selectedProject[0];

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <ProjectPopupContainer>
      <div className='top_box'>
        <i className='gallery_icon'><AiOutlinePicture /></i>
        <span>{title}</span>
        <div
          className='projectPopup_close_box'
          onClick={closeProjectPopup}
        >
          <i>
            <AiOutlineClose />
          </i>
        </div>
      </div>
      <div className='popup_desc'>
        <div className='image_box'>
          <img src={image} />
        </div>
        <div className='link_box'>
          <p>
            <a href={pageLink} target="_blank">Go to Site</a>
            <i><GiClick /></i>
          </p>
          <p>
            <a href={repoLink} target="_blank">Go to Git Repositories</a>
            <i><GiClick /></i>
          </p>
          <p>
            {isLogin && <span>ID : user / PW : 1234</span>}
          </p>
        </div>
      </div>
      <ul className='slide_image_box'>
        {
          projectData.map(item => {
            const { id, image } = item;
            return (
              <li
                key={id}
                className={`slide_image_list ${id == selectedProject[0].id ? "on" : ""}`}
                onClick={() => changeSelectedProject(id)}
              >
                <img
                  src={image}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                  onLoad={handleImageLoad}
                />
              </li>
            )
          })
        }
      </ul>
    </ProjectPopupContainer>
  );
});

export default ProjectPopup;