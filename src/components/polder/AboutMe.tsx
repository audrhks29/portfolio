import { memo, useState } from 'react';

import profileList from '../../assets/profile.json';
import certificateList from '../../assets/certificate.json';

const AboutMe = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <div>
      <h3>About Me !</h3>

      <div className='section'>
        <div className='title_box'>
          <h4>Profile</h4>
        </div>

        <div className="w-[280px] h-[360px] mr-10">
          <img className='w-full h-full'
            src="images/profilepic.jpg"
            alt=""
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={handleImageLoad}
          />
          {!imageLoaded && <div className='w-full h-full bg-slate-900 animate-pulse'>
          </div>}
        </div>

        <table>
          <tbody>
            <colgroup>
              <col width={120} />
            </colgroup>
            {
              profileList.map(item => {
                const { id, label, text } = item;
                return (
                  <tr key={id}>
                    <th className="text-left align-middle">{label}</th>
                    <td colSpan={2}>{text}</td>
                    <td></td>
                  </tr>
                )
              })
            }
            <tr className="text-left align-middle">
              <th>SITE</th>
              <td className='hover:text-slate-500'>
                <a href='https://myungkwans.notion.site/0776aeb1017347aaa70e153a9a3b612e'>
                  Notion</a></td>
              <td className='hover:text-slate-500'>
                <a href='https://velog.io/@myungkwan/posts'>
                  Velog</a></td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className='section'>
        <div className="w-full">
          <h4 >Certificate</h4>
        </div>
        <table>
          <colgroup>
            <col width={220} />
            <col width={400} />
            <col width={300} />
          </colgroup>
          <thead>
            <tr>
              <th className='cer-th'>Acquisition date</th>
              <th className='cer-th'>Certification type</th>
              <th className='cer-th'>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {
              certificateList.map(item => {
                const { id, acqDate, type, publisher } = item;
                return (
                  <tr key={id}>
                    <td className="cer-td align-middle">{acqDate}</td>
                    <td className='cer-td align-middle'>{type}</td>
                    <td className='cer-td align-middle'>{publisher}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default AboutMe;