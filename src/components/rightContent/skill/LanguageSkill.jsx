import React, { memo } from 'react';
import useSkillStore from '../../../state/skill';

const LanguageSkill = memo(() => {
  const { skillData } = useSkillStore(state => state)
  const languageSkill = skillData.filter(item => item.type === "language" && item.proficiency !== 0)
  return (
    <div className='section'>
      <div className='title_box'>
        <h4>Language Skill</h4>
      </div>
      <ul>
        {
          languageSkill.map(item => {
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

export default LanguageSkill;