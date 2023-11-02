import React, { memo } from 'react';
import useSkillStore from '../../../state/skill';

const BuildTools = memo(() => {
  const { skillData } = useSkillStore(state => state)
  const buildSkill = skillData.filter(item => item.type === "buildTool" && item.proficiency !== 0)
  return (
    <div className='section'>
      <div className='title_box'>
        <h4>Build Tool</h4>
      </div>
      <ul>
        {
          buildSkill.map(item => {
            const { id, text, image, proficiency } = item;
            return (
              <li key={id} className='skill_list'>
                <div className='skill_image'>
                  <img src={image} title={text} />
                </div>
                <span className='skill_name'>{text}</span>
                <div className='graph_box'>
                  <div
                    className="graph_inner_box stack"
                    style={{
                      width: `${proficiency}%`,
                    }}>
                  </div>
                </div>
                <span className='percent'>{proficiency}%</span>
              </li>
            )
          })
        }
      </ul>
    </div >
  );
});

export default BuildTools;