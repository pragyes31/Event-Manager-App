import "./styles.css";

const createEventManagerApp = function() {
  const eventApp = document.querySelector("#event-manager-app");
  const eventsList = document.querySelector("#events-list");
  const eventsListObject = {};
  const generateEventItem = () => {
    let event = document.createElement("div");
    let eventsTitle = document.createElement("div");
    let eventsDescription = document.createElement("div");
    let eventsStartDate = document.createElement("div");
    let eventsEndDate = document.createElement("div");

    eventsList.id = "events-list";
    event.className = "event";
    eventsTitle.className = "event-title";
    eventsDescription.className = "event-description";
    eventsStartDate.className = "event-start-date";
    eventsEndDate.className = "event-end-date";

    eventApp.appendChild(eventsList);
    event.appendChild(eventsTitle);
    event.appendChild(eventsDescription);
    event.appendChild(eventsStartDate);
    event.appendChild(eventsEndDate);
  };
  const populateEventItem = () => {};
};

const eventManagerApp = new createEventManagerApp();
