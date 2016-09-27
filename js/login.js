FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});

FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});

/*FB.logout(function(response) {
   console.log("You are now logged out!");
});*/

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}