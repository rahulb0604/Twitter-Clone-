const addpostbtn = document.querySelector('#addpostbtn');
const tweetcorner = document.querySelector("#tweetcorner");
const tweettext = document.querySelector("#tweet-text");
const addtweet = () =>{
    const tweet = document.createElement('div');
    tweet.classList.add('tweet-card');
    tweet.classList.add('add-post');
    tweet.classList.add('inbox');
    const htmlData = `
    <div class="imgntweet">
        <img src="Images/avatar.png" alt="">
        <div class="content">
        <h4 class="pn">Rishav Garg <span>@rishavgarg・1m</span></h4>
        <div class="tweet">
            <h4 class="tweet-content"></h4>
        </div>
        </div>
        <i class="fa-solid fa-xmark del"></i>
    </div>
    <div class="iconnbtn tweet-below-bar">
        <ul>
            <li class="cmnt"><i class="fa-regular fa-comment clrme clrme2"></i><span class="clrme">0</span></li>
            <li class="retweet"><i class="fa-solid fa-repeat fa-rotate-90 clrme clrme2"></i><span class="clrme">0</span></li>
            <li id="likeme" class="like"><i class="fa-regular fa-heart clrme clrme2"></i><span class="clrme inccnt">0</span></li>
            <li class="upld"><i class="clrme clrme2 fa-solid fa-chart-simple"></i><span class="clrme">0</span></li>
            <li class="share"><i class="clrme2 fa-solid fa-upload clrme"></i></li>
        </ul>
    </div>`;

    tweet.insertAdjacentHTML('afterbegin',htmlData);
    const cnt = tweet.querySelector(".tweet-content");
    if(tweettext.value){
        cnt.innerHTML = tweettext.value;
        tweettext.value = null;
        tweetcorner.prepend(tweet);
    }

    const delbtn = tweet.querySelector(".del");
    delbtn.addEventListener('click',()=>{
        tweet.remove();
    })

}
addpostbtn.addEventListener('click',()=>addtweet());