const Shimmer = () => {
    return (
        <div className="shimmer-container">

            <div className="shimmer-btn shimmer-animate"></div>

            <div className="shimmer-grid">

                {Array(8)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className="shimmer-card">
                            <div className="shimmer-card-image shimmer-animate"></div>
                            <div className="shimmer-card-line shimmer-animate"></div>
                            <div className="shimmer-card-line shimmer-animate" style={{ width: '70%' }}></div>
                            <div className="shimmer-card-footer">
                                <div className="shimmer-card-line shimmer-animate" style={{ width: '30%' }}></div>
                                <div className="shimmer-card-line shimmer-animate" style={{ width: '40%' }}></div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shimmer;