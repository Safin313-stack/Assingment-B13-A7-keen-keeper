// Application constants and configuration
export const CONFIG = {
  // API endpoints
  API_BASE_URL: import.meta.env.VITE_API_URL || '',
  
  // Data files
  FRIENDS_DATA_URL: '/friends.json',
  
  // Interaction types
  INTERACTION_TYPES: {
    CALL: 'call',
    TEXT: 'text',
    VIDEO: 'video',
  },
  
  // Friendship status
  FRIEND_STATUS: {
    OVERDUE: 'overdue',
    ALMOST_DUE: 'almost due',
    ON_TRACK: 'on-track',
  },
  
  // Days thresholds
  DAYS_OVERDUE: 60,
  DAYS_ALMOST_DUE: 30,
  
  // UI Constants
  TOAST_DURATION: 3000,
  LOADING_DELAY: 1200,
};

export default CONFIG;
