import React, { memo } from 'react';
import useSkillStore from '../../../state/skill';

const Library = memo(() => {
  const { skillData } = useSkillStore(state => state)
  const librarySkill = skillData.filter(item => item.type === "library" && item.proficiency !== 0)
  return (
    <div className='section'>
      <div className='title_box'>
        <h4>Library</h4>
      </div>
      <ul>
        {
          librarySkill.map(item => {
            const { id, text, image, type, proficiency } = item;
            return (
              <li key={id} className='skill_list'>
                <span className='skill_name'>{text}</span>
                <div className='graph_box'>
                  <div className="graph_inner_box" style={{ width: `${proficiency}%` }}>
                    {proficiency}
                  </div>
                </div>
                <span className='percent'>{proficiency}%</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
});

export default Library;