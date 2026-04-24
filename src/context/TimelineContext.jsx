import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  function addEntry(friendName, type) {
    const entry = {
      id: Date.now(),
      friendName,
      type,
      date: new Date().toISOString(),
      title: type + " with " + friendName,
    };
    setEntries((prev) => [entry, ...prev]);
  }

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}

