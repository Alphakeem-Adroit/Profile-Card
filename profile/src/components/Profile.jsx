import Metrics from "./Metrics";
import ProfileData from "./ProfileData";
import imageVictor from "../assets/imageVictor.jpg";
import bgPatternCard from "../assets/bgPatternCard.svg"

function Profile() {
    return (
        // <div style={{ backgroundColor: 'var(--Blue-600)' }} >
            <div style={{ backgroundColor: 'var(--Gray-100)', borderRadius: '15px', position: 'relative' }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={bgPatternCard} alt="" style={{ borderRadius: '15px 15px 0 0' }} />

                    {/* <img src={imageVictor} alt="Victor" style={{ width: '100px', borderRadius: '100%', border: '5px solid red' }} /> */}
                    
                </div>

                <div style={{ position: '', paddingBottom: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={imageVictor} alt="Victor" style={{ width: '100px', borderRadius: '100%', border: '5px solid var(--Gray-100)', position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)'}} />

                    <ProfileData name='Victor Crest' age='26' location='London' />
                </div>
                
                <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--Gray-500', opacity: '.3' }} />

                <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '25px 50px', }}>
                    <Metrics figure='80k' label='Followers' />
                    <Metrics figure='803k' label='Likes' />
                    <Metrics figure='1.4k' label='Photos' />
                </div>
            </div>
        // </div>
    );
}

export default Profile;
