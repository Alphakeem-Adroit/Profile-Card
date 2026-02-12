import '../index.css';

const ProfileData = ({ name, age, location }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <h2 style={{ color: 'var(--Navy-950)', fontWeight: '700' }}>{ name }</h2>
                <p style={{ color: 'var(--Gray-500)' }}>{ age }</p>
            </div>
            <p style={{ color: 'var(--Gray-500)' }}>{ location }</p>
        </div>
    );
}

export default ProfileData;