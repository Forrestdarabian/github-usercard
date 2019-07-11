
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Forrestdarabian')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];
axios.get('https://api.github.com/users/Forrestdarabian/followers')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell


*/

function createCard(cards){
  const card = document.createElement('div')
  const newComponent = document.createElement('card')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const address = document.createElement('a')
  const followers = document.querySelector('p')
  const following = document.querySelector('p')
  const bio = document.querySelector('p')

  image.src = "https://avatars0.githubusercontent.com/u/51133091?v=4";
  name.textContent = 'Forrest Darabian';
  username.textContent = 'Forrestdarabian';
  location.textContent = 'California';
  link.href = 'https://api.github.com/users/Forrestdarabian'
  followers.textContent = '2'
  following.textContent = '2'
  bio.textContent = 'Lambda School Student'

  card.appendChild(newComponent);
  card.appendChild(image);
  card.appendChild(cardInfo);
  card.appendChild(name);
  card.appendChild(username);
  card.appendChild(location);
  card.appendChild(profile);
  card.appendChild(address);
  card.appendChild(followers);
  card.appendChild(following);
  card.appendChild(bio);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(address);
}

