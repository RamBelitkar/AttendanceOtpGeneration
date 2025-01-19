document.addEventListener('DOMContentLoaded', function () {
  // Arrays for subjects, timings, rooms, days, and modes
  const subjects = [
      "Mathematics", "Science", "History", "Geography", "English", "Physics", "Chemistry", "Biology"
  ];
  const timings = [
      "08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM"
  ];
  const rooms = ["Room 101", "Room 102", "Room 103", "Room 104"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const modes = ["Lecture", "Practical"]; // New options for the mode dropdown

  // Function to populate the select elements
  function populateSelect(elementId, options) {
      const select = document.getElementById(elementId);
      select.innerHTML = options.map(option => `<option value="${option}">${option}</option>`).join('');
  }

  // Populating the select elements for the first form
  populateSelect('assignmentSubjectSelect', subjects);
  populateSelect('assignmentTimingSelect', timings);
  populateSelect('assignmentRoomSelect', rooms);
  populateSelect('assignmentDaySelect', days);
  populateSelect('assignmentmodeSelect', modes); // Populate the Lecture/Practical dropdown

  // Populating the select elements for the second form
  populateSelect('subjectSelect', subjects);
  populateSelect('timingSelect', timings);
  populateSelect('roomSelect', rooms);
  populateSelect('daySelect', days);
  populateSelect('modeSelect', modes); // Populate the Lecture/Practical dropdown

  // Variables to hold the data added for preview
  let addedAssignmentsData = [];
  let addedTimetableData = [];

  // Event listener for 'Add Assignment' button (Add data to preview - first form)
  document.getElementById('addAssignment').addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      const subjectSelect = document.getElementById('assignmentSubjectSelect').value;
      const timingSelect = document.getElementById('assignmentTimingSelect').value;
      const roomSelect = document.getElementById('assignmentRoomSelect').value;
      const daySelect = document.getElementById('assignmentDaySelect').value;
      const modeSelect = document.getElementById('assignmentmodeSelect').value; // Get selected mode

      // Store the data in the addedAssignmentsData array
      addedAssignmentsData.push({
          subject: subjectSelect,
          timing: timingSelect,
          room: roomSelect,
          day: daySelect,
          mode: modeSelect // Include mode in the data
      });

      // Clear the previous table entries in modal if any
      const tableBody = document.getElementById('dataEntryTableBody');
      tableBody.innerHTML = ""; // Clear table

      // Append the new data to the table inside the modal
      addedAssignmentsData.forEach(function (entry) {
          const newRow = `
              <tr>
                  <td>${entry.subject}</td>
                  <td>${entry.timing}</td>
                  <td>${entry.room}</td>
                  <td>${entry.day}</td>
                  <td>${entry.mode}</td>
              </tr>`;
          tableBody.innerHTML += newRow;
      });

      // Show the modal
      $('#dataEntryModal').modal('show');
  });

  // Event listener for 'Add Timetable' button (Add data to preview - second form)
  document.getElementById('addTimetable').addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      const subjectSelect = document.getElementById('subjectSelect').value;
      const timingSelect = document.getElementById('timingSelect').value;
      const roomSelect = document.getElementById('roomSelect').value;
      const daySelect = document.getElementById('daySelect').value;
      const modeSelect = document.getElementById('modeSelect').value; // Get selected mode

      // Store the data in the addedTimetableData array
      addedTimetableData.push({
          subject: subjectSelect,
          timing: timingSelect,
          room: roomSelect,
          day: daySelect,
          mode: modeSelect // Include mode in the data
      });

      // Clear the previous table entries in modal if any
      const tableBody = document.getElementById('dataEntryTableBody');
      tableBody.innerHTML = ""; // Clear table

      // Append the new data to the table inside the modal
      addedTimetableData.forEach(function (entry) {
          const newRow = `
              <tr>
                  <td>${entry.subject}</td>
                  <td>${entry.timing}</td>
                  <td>${entry.room}</td>
                  <td>${entry.day}</td>
                  <td>${entry.mode}</td>
              </tr>`;
          tableBody.innerHTML += newRow;
      });

      // Show the modal
      $('#dataEntryModal').modal('show');
  });
});
