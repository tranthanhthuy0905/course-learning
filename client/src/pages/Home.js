import React from "react";
import { useEffect, useState, createElement } from "react";

// Components
import Navbar from "../components/navbar/navbar";

// Data
import { scheduleD } from "../data/schedule";
import { deadlineD } from "../data/deadline";

function Home() {
  // Fetching Data
  const [scheduleData, setScheduleData] = useState(scheduleD);
  const [deadlineData, setDeadlineData] = useState(deadlineD);

  // useEffect(() => {
  //   async function fetchSchedule() {
  //     await fetch("")
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //       .catch((e) => console.log(e));
  //   }
  //   fetchSchedule();
  // }, []);

  const checkDisplay = (items, className, title, displayItem) => {
    if (items.length > 0) {
      return (
        <div className={className}>
          {title}
          {displayItem(items)}
        </div>
      );
    }
  };

  const displayDetail = (res, className, inTimeline, inActivities) => {
    const detail = [];

    for (let r of res) {
      detail.push(
        <div className={className + "-detail"}>
          <div className={className + "-timeline"}>{inTimeline(r)}</div>
          <div className={className + "-activities"}>
            {inActivities(r.activity)}
          </div>
        </div>
      );
    }
    return detail;
  };

  const displaySchedule = (res) => {
    const inTimeline = (input) => {
      return (
        <p>{input.start_time}</p>
        <p>{input.start_time}</p>
      )
    };

    const scheduleDetail = [];

    for (let r of res) {
      scheduleDetail.push(
        <div className="schedule-detail">
          <div className="schedule-timeline">
          </div>
          <div className="schedule-activities">{r.activity}</div>
        </div>
      );
    }
    return scheduleDetail;
  };

  const displayDeadline = (res) => {
    const deadlineDetail = [];

    const deadlineItem = (item) => {
      const deadlineItems = [];

      for (let i of item) {
        console.log(i);
        deadlineItems.push(
          <div className="deadline-item">
            <p className="deadline-duetime">{i.due_time}</p>
            <div className="deadline-activities">
              {i.activity}
              <p>{i.course}</p>
            </div>
          </div>
        );
      }
      return deadlineItems;
    };

    for (let r of res) {
      deadlineDetail.push(
        <div className="deadline-detail">
          <p className="deadline-duedate">{r.due_date}</p>
          {deadlineItem(r.deadline)}
        </div>
      );
    }
    return deadlineDetail;
  };

  return (
    <div className="home-page">
      {checkDisplay(
        scheduleData,
        "schedule",
        <p>Daily Schedule</p>,
        displaySchedule
      )}
      {checkDisplay(
        deadlineData,
        "deadline",
        <p>Deadline is coming</p>,
        displayDeadline
      )}
      <div className="courses"></div>
      <div className="goal"></div>
      <Navbar />
    </div>
  );
}

export default Home;
