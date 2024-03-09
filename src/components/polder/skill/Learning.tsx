import { memo, useState } from 'react';

import skillList from '../../../assets/skill.json'

const Learning = memo(() => {
  const learningSkill = skillList.filter(item => item.proficiency === "learning");
  const laterSkill = skillList.filter(item => item.proficiency === 0);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  return (
    <div className='flex'>

      {learningSkill.length > 0 && <div className='section'>
        <div className='title_box'>
          <h4>Learning</h4>
        </div>

        <ul className='flex flex-wrap'>
          {
            learningSkill.map(item => {
              const { id, text, image } = item;
              return (
                <li key={id} className='hover:bg-pathColor'>
                  <div>
                    <img
                      className='w-[150px] p-[20px]'
                      src={image}
                      title={text}
                      style={{ display: imageLoaded ? 'block' : 'none' }}
                      onLoad={handleImageLoad}
                    />
                  </div>
                  <p className='text-center'>{text}</p>
                </li>
              )
            })
          }
        </ul>
      </div>}

      <div className='section'>
        <div className='title_box'>
          <h4>Skills to learn later</h4>
        </div>

        <ul className='flex flex-wrap'>
          {
            laterSkill.map(item => {
              const { id, text, image } = item;
              return (
                <li key={id} className='learningList'>
                  <div className='learningImage'>
                    <img
                      className='w-[150px] p-[20px]'
                      src={image} alt=""
                    />
                  </div>
                  <p className='text-center'>{text}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
});

export default Learning;