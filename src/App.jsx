import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar.jsx";
import EventList from "./components/EventList.jsx";
import AddEvent from "./components/AddEvent.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/new-event" element={<AddEvent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;