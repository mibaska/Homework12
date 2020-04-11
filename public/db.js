let db;
const request = window.indexedDB.open("workout", 1);

request.onupgradeneeded = function(event) {
  const pending = db.createObjectStore("pending", {
    keyPath: "listID",
    autoIncrement: true
  });
};

request.onsuccess = function(event) {
  db = target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("There has been an error with retrieving your data: " + request.error);
};

function saveRecord(record) {
  var workout = db.workout(["pending"], "readwrite");
  var objectStore = workout.objectStore("pending");
  console.log(objectStore.workout);
  var record = objectStore.add(pending);
}

function checkDatabase() {
  var cursor = event.target.result;
  console.log(objectStore);
  var getAll = objectStore

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/workout/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(() => {
          var cursor = event.target.result;
          console.log(objectStore);
          objectStore.clear(pending);
      });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);