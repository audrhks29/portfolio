import React, { memo } from 'react';
import useSkillStore from '../../../state/skill';

const Learning = memo(() => {
  const { skillData } = useSkillStore(state => state)
  const learningSkill = skillData.filter(item => item.proficiency === "learning");
  const laterSkill = skillData.filter(item => item.proficiency === 0);
  return (
    <div className='flex_box'>
      <div className='section'>
        <div className='title_box'>
          <h4>Learning</h4>
        </div>
        <ul>
          {
            learningSkill.map(item => {
              const { image } = item;
              return (
                <img src={image} alt="" />
              )
            })
          }
        </ul>
      </div>
      <div className='section'>
        <div className='title_box'>
          <h4>Skills to learn later</h4>
        </div>
        <ul>
          {
            laterSkill.map(item => {
              const { image } = item;
              return (
                <img src={image} alt="" />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
});

export default Learning;