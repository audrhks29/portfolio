import React, { memo } from 'react';
import useSkillStore from '../../state/skill';
import LanguageSkill from './skill/LanguageSkill';
import AvailableTools from './skill/AvailableTools';
import Library from './skill/Library';
import Learning from './skill/Learning';

const Skill = memo(() => {
  return (
    <div className='skill_content'>
      <h3>Skill !</h3>
      <LanguageSkill />
      <Library />
      <AvailableTools />
      <Learning />
    </div>
  );
});

export default Skill;