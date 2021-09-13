function getRandomNumber(number) {
  var max = (number+1);
  return Math.floor(Math.random() * Math.floor(max));
}
//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if (msg.name == "fetchWords") {


        const apiKey = 'your-api-key';
        const dateStr = new Date().toISOString().slice(0, 10); //2020-01-01
        const apiCall = '   ay?date=' + dateStr + '&api_key=' + apiKey;


    const wordsObj = [
      "surimono",
      "flanconade",
      "perihelion",
      "brailler",
      "needfire"
    ];
    const wordsDescObj = [
      "A kind of Japanese woodblock print, privately commissioned for special occasions such as the New Year.",
      "In <em>fencing</em>, the ninth and last thrust, usually aimed at the side.",
      "The point in a solar orbit where the orbiting body is closest to the sun.",
      "A typewriter used to emboss paper with braille cells to be read by the visually impaired instead of using a manual stylus.",
      "A fire produced by the friction of one piece of wood upon another, or of a rope upon a stake of wood."
    ];

    var number = getRandomNumber(4);



    //Send response
    response({word: wordsObj[number], desc: wordsDescObj[number]});

  }

});