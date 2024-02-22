import { memo, useState } from 'react';

import { AiOutlineClose, AiOutlinePicture } from 'react-icons/ai';
import { GiClick } from 'react-icons/gi';

import projectList from '../assets/project.json'

import useProjectStore from '../state/project-store';

const ProjectPopup = memo(() => {
  const { closeProjectPopup, selectedProject, changeSelectedProject } = useProjectStore(state => state)
  const { image, title, pageLink, repoLink, isLogin } = selectedProject[0];

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <div className='w-1/2 h-[850px] absolute bg-proPopupBgColor top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid border-polderBorderColor rounded-[10px] text-textColor overflow-hidden'>
      <div className='flex items-center'>
        <i className='text-[20px] p-[10px] mr-[10px] bg-galleryBgColor'><AiOutlinePicture /></i>
        <span>{title}</span>
        <div
          className='absolute top-0 right-0 px-[10px] py-1 cursor-pointer hover:bg-[#C42B1C]'
          onClick={closeProjectPopup}
        >
          <i>
            <AiOutlineClose />
          </i>
        </div>
      </div>
      <div className='my-[20px]'>
        <div className='flex flex-col items-center h-[520px]'>
          <img src={image} className="max-w-[90%] max-h-full" />
        </div>
        <div className='mt-[20px] text-center text-[18px] h-[96px]'>
          <p className='flex items-center justify-center'>
            <a href={pageLink} target="_blank" className='text-textColor'>Go to Site</a>
            <i className='ml-[10px]'><GiClick /></i>
          </p>
          <p className='flex items-center justify-center'>
            <a href={repoLink} target="_blank" className='text-textColor'>Go to Git Repositories</a>
            <i className="ml-[10px]"><GiClick /></i>
          </p>
          <p>
            {isLogin && <span className='text-[16px]'>ID : user / PW : 1234</span>}
          </p>
        </div>
      </div>
      <ul className='max-w-[90%] flex justify-center w-full m-auto p-[10px] bg-[#2e2e2e]'>
        {
          projectList.map(item => {
            const { id, image } = item;
            return (
              <li
                key={id}
                className={`w-[85px] h-[85px] p-[5px] mx-[5px] flex items-center bg-[#393939] rounded-[10px] cursor-pointer hover:bg-[#454545] ${id == selectedProject[0].id ? "border border-solid border-polderBorderColor bg-[#393939]" : ""}`}
                onClick={() => changeSelectedProject(id)}
              >
                <img
                  className='mx-auto my-0 max-w-full max-h-full'
                  src={image}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                  onLoad={handleImageLoad}
                />
              </li>
            )
          })
        }
      </ul>
    </div >
  );
});

export default ProjectPopup;