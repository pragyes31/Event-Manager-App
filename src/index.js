import "./styles.css";

const createEventManagerApp = function() {
  const eventsList = document.querySelector("#events-list");
  const eventNameInput = document.querySelector("#event-name");
  const eventDetailsForm = document.querySelector("#add-event");
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
  const populateEventItem = (title, description, startDate, endDate) => {
    console.log("boom");
  };

  const addEventItemObject = (
    title,
    description,
    startDate,
    endDate,
    event
  ) => {
    event.preventDefault();
    let eventItemObject = {};
    eventItemObject.title = title;
    eventItemObject.description = description;
    eventItemObject.startDate = startDate;
    eventItemObject.endDate = endDate;
    console.log(eventItemObject);
    populateEventItem(title, description, startDate, endDate);
  };
  eventDetailsForm.addEventListener(
    "submit",
    event => {
      event.preventDefault();
      addEventItemObject(
        titleInput.value,
        descriptionInput.value,
        startDateInput.value,
        endDateInput.value
      );
    },
    false
  );
};

const eventManagerApp = new createEventManagerApp();
