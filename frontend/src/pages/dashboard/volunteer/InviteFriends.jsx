import { useState } from 'react';
import Navbar from '../../../components/Navbar'; 
import Sidebar from '../../../components/Sidebar'; 
import Chatbot from '../../../components/Chatbot';

const InviteFriends = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [invitedEmails, setInvitedEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setInvitedEmails(prev => [...prev, { email, date: new Date().toLocaleDateString() }]);
      setEmail('');
      setMessage('');
      setIsLoading(false);
    }, 1000);
  };

  const handleShare = (platform) => {
    const text = "Join me on ImpactLink and make a difference in communities! Check out this amazing volunteer platform.";
    const url = window.location.origin;
    
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen pt-16">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-0">
          <div className="w-full max-w-none">
            {/* Page Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Invite Friends</h1>
                  <p className="text-base lg:text-lg text-gray-600 mt-1">Share the impact and invite your friends to join the volunteer community.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Invite Form */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Send Personal Invites</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Friend's Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 lg:h-14 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 text-sm lg:text-base"
                      placeholder="Enter your friend's email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm lg:text-base font-semibold text-gray-700 mb-2 lg:mb-3">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 bg-white font-medium transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-gray-300 resize-none text-sm lg:text-base"
                      placeholder="Add a personal message to your invitation..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending Invite...' : 'Send Invitation'}
                  </button>
                </form>
              </div>

              {/* Social Sharing */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Share on Social Media</h2>
                
                <div className="space-y-3 lg:space-y-4">
                  <button 
                    onClick={() => handleShare('whatsapp')}
                    className="w-full flex items-center justify-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-medium text-sm lg:text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Share on WhatsApp</span>
                  </button>
                  
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center justify-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-medium text-sm lg:text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span>Share on Twitter</span>
                  </button>
                  
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-full flex items-center justify-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-medium text-sm lg:text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Share on Facebook</span>
                  </button>
                  
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center justify-center space-x-3 px-4 lg:px-6 py-3 lg:py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-medium text-sm lg:text-base"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>Share on LinkedIn</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Invited Friends List */}
            {invitedEmails.length > 0 && (
              <div className="mt-6 lg:mt-8 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Recently Invited Friends</h2>
                
                <div className="space-y-3">
                  {invitedEmails.map((invite, index) => (
                    <div key={index} className="flex items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-base lg:text-lg">{invite.email}</p>
                          <p className="text-sm lg:text-base text-gray-600">Invited on {invite.date}</p>
                        </div>
                      </div>
                      <span className="px-2 lg:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs lg:text-sm font-medium">
                        Sent
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default InviteFriends; 