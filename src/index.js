import "./styles.css";

const createEventManagerApp = function() {
  const eventsList = document.querySelector("#events-list");
  const eventDetailsForm = document.querySelector("#add-event");
  const titleInput = document.querySelector("#title-input");
  const descriptionInput = document.querySelector("#description-input");
  const startDateInput = document.querySelector("#start-date-input");
  const endDateInput = document.querySelector("#end-date-input");
  const errorMessage = document.querySelector("#error-message");
  let eventIdCount = 0;
  let eventsListArray = [];
  const generateEventItem = (title, description, startDate, endDate) => {
    let eventItemDiv = document.createElement("div");
    let eventTitleDiv = document.createElement("div");
    let eventDescriptionDiv = document.createElement("div");
    let eventStartDateDiv = document.createElement("div");
    let eventEndDateDiv = document.createElement("div");

    eventItemDiv.className = "event";
    eventItemDiv.id = `event${eventIdCount}`;
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
  const dateRangeToArray = (startDate, endDate) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let dateRange = [];
    while (start <= end) {
      let currentDate = new Date(start);
      let currentYear = currentDate.getFullYear();
      let currentMonth =
        currentDate.getMonth() > 9
          ? currentDate.getMonth() + 1
          : `0${currentDate.getMonth() + 1}`;
      let currentDay =
        currentDate.getDate() > 9
          ? currentDate.getDate()
          : `0${currentDate.getDate()}`;
      let dateInFormat = `${currentYear}-${currentMonth}-${currentDay}`;
      dateRange.push(dateInFormat);
      start.setDate(start.getDate() + 1);
    }
    return dateRange;
  };
  const handleDateConflict = () => {
    eventsListArray.forEach(eve1 => {
      eventsListArray.forEach(eve2 => {
        if (
          eve1.eventId !== eve2.eventId &&
          (eve2.dateRange.includes(eve1.startDate) ||
            eve2.dateRange.includes(eve1.endDate))
        ) {
          let eve1Id = eve1.eventId;
          let eve2Id = eve2.eventId;
          let eve1Div = document.querySelector(`#${eve1Id}`);
          let eve2Div = document.querySelector(`#${eve2Id}`);
          eve1Div.style.border = "1px solid red";
          eve2Div.style.border = "1px solid red";
        }
      });
    });
  };
  const populateEventItem = (title, description, startDate, endDate) => {
    eventsListArray.sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
    eventsList.innerHTML = "";
    eventIdCount = 0;
    eventsListArray.forEach(eve => {
      eventIdCount++;
      eve.eventId = `event${eventIdCount}`;
      generateEventItem(eve.title, eve.description, eve.startDate, eve.endDate);
    });
    handleDateConflict();
    //console.log(eventsListArray);
  };

  const resetEventForm = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
  };

  const addEventItemObject = (title, description, startDate, endDate) => {
    let eventItemObject = {};
    eventItemObject.title = title;
    eventItemObject.description = description;
    eventItemObject.startDate = startDate;
    eventItemObject.endDate = endDate;
    eventItemObject.dateRange = dateRangeToArray(startDate, endDate);
    dateRangeToArray(startDate, endDate);
    eventsListArray = [...eventsListArray, eventItemObject];
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
