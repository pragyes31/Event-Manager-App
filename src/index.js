import "./styles.css";

const createEventManagerApp = function() {
  const eventApp = document.querySelector("#event-manager-app");
  const eventsList = document.querySelector("#events-list");
  const eventNameInput = document.querySelector("#event-name");

  const eventsListObject = [];
  const generateEventItem = () => {
    let eventItemDiv = document.createElement("div");
    let eventTitleDiv = document.createElement("div");
    let eventDescriptionDiv = document.createElement("div");
    let eventStartDateDiv = document.createElement("div");
    let eventEndDateDiv = document.createElement("div");

    eventItemDiv.className = "event";
    eventTitleDiv.className = "event-title";
    eventDescriptionDiv.className = "event-description";
    eventStartDateDiv.className = "event-start-date";
    eventEndDateDiv.className = "event-end-date";

    eventsList.appendChild(eventItemDiv);
    eventItemDiv.appendChild(eventTitleDiv);
    eventItemDiv.appendChild(eventDescriptionDiv);
    eventItemDiv.appendChild(eventStartDateDiv);
    eventItemDiv.appendChild(eventEndDateDiv);
  };
  const populateEventItem = () => {};
};

const eventManagerApp = new createEventManagerApp();
