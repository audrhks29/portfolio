import { memo, useState } from 'react';
import useAboutMeStore from '../../state/aboutMe';

const AboutMe = memo(() => {
  const { profileData, certificateData } = useAboutMeStore(state => state)
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
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
              {/* <col width={400} /> */}
            </colgroup>
            {
              profileData.map(item => {
                const { id, label, text } = item;
                return (
                  <tr key={id}>
                    <th className="v-a-m text-left">{label}</th>
                    <td className="v-a-m">{text}</td>
                  </tr>
                )
              })
            }
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
              certificateData.map(item => {
                const { id, acqDate, type, publisher } = item;
                return (
                  <tr key={id}>
                    <td className="cer-td v-a-m">{acqDate}</td>
                    <td className='cer-td v-a-m'>{type}</td>
                    <td className='cer-td v-a-m'>{publisher}</td>
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