import React, { memo } from 'react';
import useAboutMeStore from '../../state/aboutMe';

const AboutMe = memo(() => {
  const { profileData, certificateData } = useAboutMeStore(state => state)
  return (
    <div className='about_me_content'>
      <h3>About Me !</h3>
      <div className='section'>
        <div className='title_box'>
          <h4>Profile</h4>
        </div>
        <div className='image_box'>
          <img src="../public/images/profilepic.jpg" alt="" />
        </div>
        <table className='my_info_table'>
          <tbody>
            {
              profileData.map(item => {
                const { id, label, text } = item;
                return (
                  <tr key={id}>
                    <th>{label}</th>
                    <td>{text}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className='section'>
        <div className='title_box'>
          <h4>Certificate</h4>
        </div>
        <table className='certificate_table'>
          <colgroup>
            <col width={220} />
            <col width={400} />
            <col width={300} />
          </colgroup>
          <thead>
            <tr>
              <th>Acquisition date</th>
              <th>Certification type</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {
              certificateData.map(item => {
                const { id, acqDate, type, publisher } = item;
                return (
                  <tr key={id}>
                    <td>{acqDate}</td>
                    <td>{type}</td>
                    <td>{publisher}</td>
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