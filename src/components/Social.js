import React from "react";
import "./Social.css";

export const Social = () => {
  return (
    <div className="Social">
      <div className="social-section">
        <div className="social-section-header">Upcoming Events</div>
        <div className="event-section">
          <div className="event-header">Tuesday Rock Climbing</div>
          <div className="date-and-time">Tuesdays, 7pm, weekly</div>
          <div className="Attendees">Max, Abby, Taylor</div>
        </div>
      </div>
      <div className="social-section">
        <div className="social-section-header">Messages</div>
        <div className="message-section">
          <div>
            <div className="sender">Abby</div>
            <div className="message-contents">
              We on for rock climbing tonight?
            </div>
            <div className="service">Messenger</div>
          </div>
          <button className="reply-button">Reply</button>
        </div>
      </div>
      <div className="social-section">
        <div className="social-section-header">Plan an Activity</div>
        <div className="activity-section">
          <div className="activity-header">Rock Climbing</div>
          <button className="plan-button">Plan</button>
        </div>
        <div className="activity-section">
          <div className="activity-header">Crafting</div>
          <button className="plan-button">Plan</button>
        </div>
        <div className="activity-section">
          <div className="activity-header">Dinner Party</div>
          <button className="plan-button">Plan</button>
        </div>
      </div>
      <div className="social-section">
        <div className="social-section-header">Keep in Touch</div>
        <div className="reach-out-section">
          <div className="contact">Mom</div>
          <div className="time-since-contact">2 days</div>
          <button className="plan-button">Reach Out</button>
        </div>
        <div className="reach-out-section">
          <div className="contact">Lexy</div>
          <div className="time-since-contact">4 days</div>
          <button className="plan-button">Reach Out</button>
        </div>
        <div className="reach-out-section">
          <div className="contact">Genevieve</div>
          <div className="time-since-contact">2 months</div>
          <button className="plan-button">Reach Out</button>
        </div>
      </div>
    </div>
  );
};
