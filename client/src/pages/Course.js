import React from "react";
import Navbar from "../components/navbar/navbar";

function Course() {
  // const
  return (
    <div className="course-page">
      <div class="goal"></div>
      <div class="deadline"></div>
      <div class="schedule">
        <p>Daily Schedule</p>
        <div class="schedule-details">
          <div class="schedule-timeline"></div>
          <div class="schedule-lists"></div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Course;
