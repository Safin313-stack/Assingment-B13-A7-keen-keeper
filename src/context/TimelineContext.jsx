import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  const addEntry = (friendName, type) => {
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      friendName,
      type, // 'Call' | 'Text' | 'Video'
      date: now.toISOString(),
      title: `${type} with ${friendName}`,
    };
    setEntries(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}
