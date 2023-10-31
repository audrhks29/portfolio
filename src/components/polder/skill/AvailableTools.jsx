import React, { memo } from 'react';
import useSkillStore from '../../../state/skill';

const AvailableTools = memo(() => {
  const { skillData } = useSkillStore(state => state)
  const AvailableToolsSkill = skillData.filter(item => item.type === "tool" && item.proficiency !== 0)
  return (
    <div className='section'>
      <div className='title_box'>
        <h4> Available Tools</h4>
      </div>
      <ul>
        {
          AvailableToolsSkill.map(item => {
            const { id, text, image, proficiency, bgColor } = item;
            return (
              <li key={id} className='skill_list'>
                <div className='skill_image'>
                  <img src={image} title={text} />
                </div>
                <span className='skill_name'>{text}</span>
                <div className='graph_box'>
                  <div
                    className="graph_inner_box stack"
                    style={{ width: `${proficiency}%` }}>
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

export default AvailableTools;