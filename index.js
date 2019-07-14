/*
> 🚀 Before you begin:
> Review the shape of the sample data in README.md: https://github.com/justsml/nested-data-exercises#data

// Then, complete the functions below!


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName (character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount (character) {
  // TODO: Add your code inside the functions (others below)

}

/**
 * ### Challenge `getSummary`
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {weight}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary (character) {

}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal (character) {

}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * @instructions
 * Sum the number of crew and passenger spots in both vehicles and starships.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal (character) {

}

/**
 * ### Challenge `getCargoCapacityTotal`
 * @instructions
 * Sum the total cargo capacity for all vehicles and starships.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal (character) {

}

/**
 * ### Challenge `getFastestStarshipName`
 * @instructions
 * Find the fastest starship.
 * Determine the correct field to compare, and return the name of the fastest.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName (character) {

}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_name_** property.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName (character) {

}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 * @instructions
 * Find the slowest vehicle OR starship. Return its name.
 *
*/
function getSlowestVehicleOrStarshipName (character) {

}

/**
 * ### Challenge `getFirstStarshipName`
 * @instructions
 *
*/
function getFirstStarshipName (character) {

}

/**
 * ### Challenge `getNthFilm`
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: N starts at 1, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected output: `Space Balls`
*/
function getNthFilm (character, filmNumber) {

}






/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
  if (getFirstStarshipName) { module.exports.getFirstStarshipName = getFirstStarshipName }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
}