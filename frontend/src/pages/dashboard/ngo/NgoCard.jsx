import { useNavigate } from 'react-router-dom';

const NgoCard = ({ image, title, role, duration, skills }) => {
  const navigate = useNavigate();

  // Function to navigate to Requests page
  const handleRequestClick = () => {
    navigate(`/ngo/manage-interns`);
  };

  // Function to navigate to Manage page
  const handleManageClick = () => {
    navigate(`/ngo/manage-campaign`);
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div className="flex-1">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm lg:text-base font-semibold text-emerald-600 mb-1">{role}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-gray-600 mb-2">⏱️ {duration}</p>
            <div className="mb-4">
              <p className="text-xs lg:text-sm text-gray-700">
                <span className="font-semibold">Skills Required:</span> {skills}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button 
                onClick={handleRequestClick}
                className="flex-1 px-3 py-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-xs lg:text-sm"
              >
                Requests
              </button>
              <button 
                onClick={handleManageClick}
                className="px-3 py-2 bg-white border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-xs lg:text-sm"
              >
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
