import "./styles.css";

const createEventManagerApp = function() {
  const eventsList = document.querySelector("#events-list");
  const eventNameInput = document.querySelector("#event-name");
  const titleInput = document.querySelector("#title-input");
  const descriptionInput = document.querySelector("#description-input");
  const startDateInput = document.querySelector("#start-date-input");
  const endDateInput = document.querySelector("#end-date-input");
  const addEventBtn = document.querySelector("#add-event-button");
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
  const addEventItemObject = e => {
    e.preventDefault();
    console.log("boom");
  };
  addEventBtn.addEventListener("click", addEventItemObject);
};

const eventManagerApp = new createEventManagerApp();
