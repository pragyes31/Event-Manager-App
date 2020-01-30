import "./styles.css";

const createEventManagerApp = function() {
  const eventsList = document.querySelector("#events-list");
  const eventDetailsForm = document.querySelector("#add-event");
  const titleInput = document.querySelector("#title-input");
  const descriptionInput = document.querySelector("#description-input");
  const startDateInput = document.querySelector("#start-date-input");
  const endDateInput = document.querySelector("#end-date-input");
  const errorMessage = document.querySelector("#error-message");
  let eventsListArray = [];
  const generateEventItem = (title, description, startDate, endDate) => {
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

    eventTitleDiv.innerHTML = title;
    eventDescriptionDiv.innerHTML = description;
    eventStartDateDiv.innerHTML = `Start date: ${startDate}`;
    eventEndDateDiv.innerHTML = `End date: ${endDate}`;
  };
  const populateEventItem = (title, description, startDate, endDate) => {
    eventsListArray.sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    eventsList.innerHTML = "";
    eventsListArray.forEach(eve => {
      console.log(eve);
      generateEventItem(eve.title, eve.description, eve.startDate, eve.endDate);
    });
  };

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
    errorMessage.innerHTML = "Event added successfully";
    let eventItemObject = {};
    eventItemObject.title = title;
    eventItemObject.description = description;
    eventItemObject.startDate = startDate;
    eventItemObject.endDate = endDate;
    eventsListArray = [...eventsListArray, eventItemObject];
    //eventsListArray.push(eventItemObject);
    // console.log(eventsListArray);
    populateEventItem(title, description, startDate, endDate);
    resetEventForm();
  };
  const dateErrorMsg = () => {
    errorMessage.innerHTML =
      "EVENT NOT ADDED! The end date should be greater than the start date";
  };
  const addEventToPage = () => {
    let startDateObj = new Date(startDateInput.value);
    let endDateObj = new Date(endDateInput.value);
    endDateObj - startDateObj > 0
      ? addEventItemObject(
          titleInput.value,
          descriptionInput.value,
          startDateInput.value,
          endDateInput.value
        )
      : dateErrorMsg();
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
