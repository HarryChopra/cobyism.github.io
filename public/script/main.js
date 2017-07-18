// A function for use with regular page loads AND turbolinks loads
var ready;
ready = function() {
  // Calculate reading times
  $(".js-read-time").text(function (index, value) {
    return Math.ceil(parseFloat(value));
  });

  // Instafeed
  instafeed = $("#instafeed")
  if (instafeed.length && !instafeed.attr('populated')){
    var userFeed = new Instafeed({
      get: 'user',
      userId: 5926345,
      accessToken: '5926345.1677ed0.af3c4e5f38d349598228ac78815be27e',
      resolution: 'low_resolution',
      limit: '4'
    });
    userFeed.run();
    // Save that this has been run, for turblinks
    instafeed.attr("populated", "true")
  }
}

$(document).on('ready', ready);
$(document).on('turbolinks:load', ready);
