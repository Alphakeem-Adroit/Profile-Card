import '../index.css';

const Metrics = ({ figure, label }) => {
    return (
        <div>
            <h3 style={{ color: 'var(--Navy-950)', fontSize: '18px' }}>{ figure }</h3>
            <p style={{ color: 'var(--Gray-500)', fontSize: '12px', fontWeight: '500' }}>{ label }</p>
        </div>
    );
}

export default Metrics;