import React from "react";
import "./SocialSidebar.css";

export const SocialSidebar = () => {
  return (
    <div className="SocialSidebar">
      <div className="filterSection">
        <div className="filterHeader">Group</div>
        <input type="checkbox" id="climbing-gym" />
        <label for="climbing-gym" className="filterLabel">
          Climbing Gym
        </label>
        <br />
        <input type="checkbox" id="close-family" />
        <label for="close-family" className="filterLabel">
          Close Family
        </label>
        <br />
        <input type="checkbox" id="extended-family" />
        <label for="extended-family" className="filterLabel">
          Extended Family
        </label>
        <br />
        <input type="checkbox" id="college-friends" />
        <label for="college-friends" className="filterLabel">
          College Friends
        </label>
        <br />
      </div>

      <div className="filterSection">
        <div className="filterHeader">Location</div>
        <input type="checkbox" id="colorado-springs" />
        <label for="colorado-springs" className="filterLabel">
          Colorado Springs
        </label>
        <br />
        <input type="checkbox" id="San Francisco" />
        <label for="San Francisco" className="filterLabel">
          San Francisco
        </label>
      </div>

      <div className="filterSection">
        <div className="filterHeader">Preferred Contact Frequency</div>
        <input type="checkbox" id="daily" />
        <label for="daily" className="filterLabel">
          Daily
        </label>
        <br />
        <input type="checkbox" id="weekly" />
        <label for="weekly" className="filterLabel">
          Weekly
        </label>
        <br />
        <input type="checkbox" id="bi-weekly" />
        <label for="bi-weekly" className="filterLabel">
          Bi-weekly
        </label>
        <br />
        <input type="checkbox" id="monthly" />
        <label for="monthly" className="filterLabel">
          monthly
        </label>
        <br />
        <input type="checkbox" id="yearly" />
        <label for="yearly" className="filterLabel">
          Yearly
        </label>
        <br />
      </div>

      <div className="filterSection">
        <div className="filterHeader">Activity</div>
        <input type="checkbox" id="rock-climbing" />
        <label for="rock-climbing" className="filterLabel">
          Rock Climbing
        </label>
        <br />
        <input type="checkbox" id="hiking" />
        <label for="hiking" className="filterLabel">
          Hiking
        </label>
        <br />
      </div>
    </div>
  );
};
