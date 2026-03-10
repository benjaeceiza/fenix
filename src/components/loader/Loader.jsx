import './Loader.css';

const Loader = ({ isLoading }) => {
  return (
    <div className={`global-loader-overlay ${!isLoading ? 'fade-out' : ''}`}>
      <div className="global-spinner"></div>
    </div>
  );
};

export default Loader;