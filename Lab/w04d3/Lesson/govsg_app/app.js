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
});

//use dom manipulation to display the data
