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
  const loadLocalData = () => {
    if (localStorage.getItem("events-list")) {
      let localData = JSON.parse(localStorage.getItem("events-list"));
      eventsListArray = [...localData];
      populateEventItem();
    }
  };
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
      let currentMonth =
        currentDate.getMonth() > 9
          ? currentDate.getMonth() + 1
          : `0${currentDate.getMonth() + 1}`;
      let currentDay =
        currentDate.getDate() > 9
          ? currentDate.getDate()
          : `0${currentDate.getDate()}`;
      let dateInFormat = `${currentDate.getFullYear()}-${currentMonth}-${currentDay}`;
      dateRange.push(dateInFormat);
      start.setDate(start.getDate() + 1);
    }
    return dateRange;
  };
  const handleDateConflict = () => {
    eventsListArray.forEach((elem, index) => {
      if (eventsListArray.length > 1 && index < eventsListArray.length - 1) {
        let nextElem = eventsListArray[index + 1];
        if (
          elem.dateRange.includes(nextElem.startDate) ||
          elem.dateRange.includes(nextElem.endDate)
        ) {
          let eve1Div = document.querySelector(`#${elem.eventId}`);
          let eve2Div = document.querySelector(`#${nextElem.eventId}`);
          eve1Div.style.border = "1px solid red";
          eve2Div.style.border = "1px solid red";
        }
      }
    });
  };
  const populateEventItem = () => {
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
    localStorage.setItem("events-list", JSON.stringify(eventsListArray));
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
    //dateRangeToArray(startDate, endDate);
    eventsListArray = [...eventsListArray, eventItemObject];
    populateEventItem();
    resetEventForm();
  };
  const handleConflictWarning = () => {
    if (!!startDateInput.value && !!eventsListArray.length) {
      let dateRangeArray = dateRangeToArray(
        startDateInput.value,
        endDateInput.value
      );
      var isConflict = dateRangeArray.some(date => {
        return eventsListArray.some(eve => eve.dateRange.includes(date));
      });
      isConflict
        ? (errorMessage.innerHTML = `There is already an event listed within the start and end date you entered. 
      The event can still be added though.`)
        : (errorMessage.innerHTML = "");
    }
  };
  const addEventToPage = () => {
    let startDateObj = new Date(startDateInput.value);
    let endDateObj = new Date(endDateInput.value);
    // Below statement checks if startDate is less than EndDate. Only in that case, the event would be added
    endDateObj - startDateObj > 0
      ? addEventItemObject(
          titleInput.value,
          descriptionInput.value,
          startDateInput.value,
          endDateInput.value
        )
      : (errorMessage.innerHTML =
          "EVENT NOT ADDED! The end date should be greater than the start date");
  };
  endDateInput.addEventListener("change", handleConflictWarning);
  eventDetailsForm.addEventListener(
    "submit",
    event => {
      event.preventDefault();
      addEventToPage();
    },
    false
  );
  loadLocalData();
};

const eventManagerApp = new createEventManagerApp();

/* arr = [1,2,3,4] arr = [{}, {}]
arr.sort(function(a,b) {
return a.startDate - b.startDate
})
arr = [1,2,3,4]
arr.forEach(function(obj) {

})
[10, 20,30, 40]

*/
