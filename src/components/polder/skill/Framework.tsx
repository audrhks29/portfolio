import { memo, useState } from 'react';

import skillList from '../../../assets/skill.json'

const Framework = memo(() => {
  const Framework = skillList.filter(item => item.type === "framework" && item.proficiency !== 0)

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <div className='section'>
      <div className='title_box'>
        <h4>Framework</h4>
      </div>

      <ul>
        {
          Framework.map(item => {
            const { id, text, image, proficiency } = item;
            return (
              <li key={id} className='skill_list'>
                <div className='skill_image'>
                  <img
                    src={image}
                    title={text}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                    onLoad={handleImageLoad}
                  />
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

export default Framework;