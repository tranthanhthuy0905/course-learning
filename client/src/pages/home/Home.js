import React from "react";
import { useEffect, useState, useRef, createElement } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// Components
import Navbar from "../../components/navbar/navbar";

// Data
import { scheduleD } from "../../data/schedule";
import { deadlineD } from "../../data/deadline";
import { courseD } from "../../data/course";
import { goalD } from "../../data/goal";

function Home() {
  // Fetching Data
  const [scheduleData, setScheduleData] = useState(scheduleD);
  const [deadlineData, setDeadlineData] = useState(deadlineD);
  const [courseData, setCourseData] = useState(courseD);
  const [goalData, setGoalData] = useState(goalD);

  // useEffect(() => {
  //   async function fetchSchedule() {
  //     await fetch("")
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //       .catch((e) => console.log(e));
  //   }
  //   fetchSchedule();
  // }, []);

  const taskDone = (done) => {
    if (done) {
      return "rgb(0, 106, 106)";
    } else {
      return "rgb(20, 213, 213)";
    }
  };

  const checkDisplay = (items, className, title, displayItem) => {
    if (items.length > 0) {
      return (
        <div className={className[0]}>
          {title}
          <div className={className[1] + " box-detail"}>{displayItem(items)}</div>
        </div>
      );
    }
  };

  const displaySchedule = (res) => {
    return res.map((data) => (
      <div className="box-item">
        <div className="schedule-timeline">
          <p>{data.start_time}</p>
          <div className="schedule-dash"></div>
          <p>{data.end_time}</p>
        </div>
        <div className="schedule-activities">
          <FontAwesomeIcon
            icon={faCircle}
            className="duotone-circle"
            style={{ color: taskDone(data.done) }}
          />
          <span>{data.activity}</span>
        </div>
      </div>
    ));
  };

  const displayDeadline = (res) => {
    return res.map((data) => (
      <div className="deadline-item">
        <p>{data.due_date}</p>
        {data.deadline.map((dl) => (
          <div className="box-item">
            <p className="deadline-duetime">{dl.due_time}</p>
            <div className="deadline-activities">
              {dl.activity}
              <p>Course: {dl.course}</p>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="home-page">
      {checkDisplay(
        scheduleData,
        ["box schedule", "schedule-detail"],
        <p>Daily Schedule</p>,
        displaySchedule
      )}
      {checkDisplay(
        deadlineData,
        ["box deadline", "deadline-detail"],
        <p>Deadline is coming</p>,
        displayDeadline
      )}
      {/* <ul className="courses">
        {courseData.map((c) => (
          <li className="course-item" key={c.id}>
            Course {c.course}
          </li>
        ))}
      </ul>
      <div className="goal">
        <div className="goal-arrow"></div>
        <ul className="milestone-list">
          {goalData.map((g) => (
            <li className="milestone-item" key={g.id}>
              {g.goal}
            </li>
          ))}
        </ul>
      </div>
      <Navbar /> */}
    </div>
  );
}

export default Home;
