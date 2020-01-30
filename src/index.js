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
  const eventsListArray = [];
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
  const populateEventItem = (title, description, startDate, endDate) => {};

  const resetEventForm = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
  };

  const addEventItemObject = (
    title,
    description,
    startDate,
    endDate,
    event
  ) => {
    let eventItemObject = {};
    eventItemObject.title = title;
    eventItemObject.description = description;
    eventItemObject.startDate = startDate;
    eventItemObject.endDate = endDate;
    eventsListArray.push(eventItemObject);
    console.log(eventItemObject, eventsListArray);
    populateEventItem(title, description, startDate, endDate);
    resetEventForm();
  };
  const addEventToPage = () => {
    addEventItemObject(
      titleInput.value,
      descriptionInput.value,
      startDateInput.value,
      endDateInput.value
    );
  };
  eventDetailsForm.addEventListener(
    "submit",
    event => {
      event.preventDefault();
      addEventToPage();
    },
    false
  );
};

const eventManagerApp = new createEventManagerApp();
