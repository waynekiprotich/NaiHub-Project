import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar.jsx";
import EventList from "./components/EventList.jsx";
import AddEvent from "./components/AddEvent.jsx";
import Filter from "./components/Filter.jsx"; 
import initialEvents from "./Data/events.json";

function App() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
  };

  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/"  element={
                <>
                  <Filter onCategoryChange={setSelectedCategory} />
                  <EventList events={events} category={selectedCategory} />
                </>
              } 
            />
            <Route path="/new-event" element={<AddEvent onAddEvent={handleAddEvent} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;