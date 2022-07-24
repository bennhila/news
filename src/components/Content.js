import React from 'react'
// import backbround from '../backbround.jpg'
import './content.css'
const Content = () => {
  return (
    <div className='content'>
         <div className='image'>
            <img className='IMG' 
                width="70PX"
            src="https://www.coe.int/documents/10463064/72934712/447290d4-6d35-4232-b6c5-e36e6d2908fa-SG+Dw+WPFD2022.jpeg/0c02f6c4-a559-52bd-00d8-c3b1d0ed76bf" alt='imageBackGround' />
        </div>
        <div className='article'>
            <h3 className='JournalismTitle'>the fourth power:</h3>
            <p className='Journalismarticl'>Journalism is the profession that collects and analyzes news and opinions, checks their credibility, and presents them to the public. These news are often related to the latest developments in the political, local, cultural, sports, social and other arenas.</p>
        </div>
        <div>
        <img className='img3'  src="https://journalistsresource.org/wp-content/uploads/2019/07/Crowd-of-journalists.jpg" alt="image3"/>
        </div>
        <div>
            <img className='img2' src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/24-09-2019_NICA-823430_Press-Pool-GA74.jpg/image1170x530cropped.jpg" alt="IMAGE2"/>
        </div> 
        <div>
        <img className='img4' src="https://news.asu.edu/sites/default/files/sports_degrees.jpeg" alt="image4"/>
        </div>
    </div>
  )
}

export default Content