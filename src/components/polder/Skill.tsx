import { memo } from 'react';

import LanguageSkill from './skill/LanguageSkill';
import AvailableTools from './skill/AvailableTools';
import Library from './skill/Library';
import Learning from './skill/Learning';
import BuildTools from './skill/BuildTools';
import Framework from './skill/Framework';

const Skill = memo(() => {
  return (
    <div className='text-[16px]'>
      <h3>Skill !</h3>
      <LanguageSkill />
      <Library />
      <Framework />
      <AvailableTools />
      <BuildTools />
      <Learning />
    </div>
  );
});

export default Skill;