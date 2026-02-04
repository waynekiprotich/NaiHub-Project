import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent({ onAddEvent }) {
  const navigate = useNavigate();
  const [isFree, setIsFree] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    category: "Music",
    price: "Free",
    image: "https://i.pinimg.com/736x/d0/28/b6/d028b68ca554d4edb4adce7ffdd261b3.jpg",
    contact: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData);
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeeChoice = (e) => {
    const choice = e.target.value === "true";
    setIsFree(choice);
    setFormData({ ...formData, price: choice ? "Free" : "" });
  };

  return (
    <div className="event-form-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Food">Food</option>
          <option value="Private">Private</option>
          <option value="Concerts">Concerts</option>
        </select>

        <input name="title" placeholder="Event Title" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <input name="image" placeholder="Event Poster LINK" onChange={handleChange} />
        <input name="date" type="date" onChange={handleChange} required />

        <select onChange={handleFeeChoice} value={isFree}>
          <option value="true">Free Entrance</option>
          <option value="false">Priced</option>
        </select>

        {!isFree && (
          <input name="price" placeholder="Price in KSH." onChange={handleChange} required />
        )}

        <input name="contact" placeholder="WhatsApp link/Event Link" onChange={handleChange} />
        <button type="submit" className="confirm-btn">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;