console.log("gov sg app");

//get traffic data from gov sg

//url
const url = "https://api.data.gov.sg/v1/transport/traffic-images?";
//paramater query
let dateTime = "2023-02-02T23:59:59";

//api key?

axios.get(url + dateTimeQuery).then((response) => {
  //process the respond data
  const trafficData = response.data;
  console.log(trafficData);

  const containerEl = document.querySelector(".container");

  const items = trafficData.items[0];

  for (let camera of trafficDataitem.cameras) {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", camera.image);
    imgEl.setAttribute("id", camera.camera_id);
    imgEl.classList.add("camera-img");
    containerEl.appendChild(imgEl);
  }
});
