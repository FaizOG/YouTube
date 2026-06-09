import { subscriptions, libraryItems, exploreItems, youtubeCategories, homeFeedAds, homefeedVideos } from './data.js';

let showMoreSubscriptions = document.querySelector(".show-more-Subscriptions");
let SubscriptionsPara = document.querySelector("#SubscriptionsPara");
let SubscriptionsOpen = false;
let allSidebarSubscription = document.querySelector('.sidebar__Subscriptions-info-show');

function ShowSubscriptions(limit) {
  let SidebarSubscriptions = '';
  subscriptions.slice(0, limit).forEach(function (elem) {
    SidebarSubscriptions += `<div class="outer-div">
            <div class="Subscriptions-info">
                <div class="img-container">
                    <img src="${elem.image}" alt="${elem.name}">
                </div>
                <div class="channel-name">
                    <p>${elem.name}</p>
                </div>
                <div class="something-new">
                    <div class="blue-dot" ${elem.hasNew ? '' : 'hidden'}></div>
                </div>
            </div>
        </div>`;
  });
  allSidebarSubscription.innerHTML = SidebarSubscriptions;
}

ShowSubscriptions(7);

showMoreSubscriptions.addEventListener("click", function () {
  if (!SubscriptionsOpen) {
    ShowSubscriptions(subscriptions.length);
    SubscriptionsPara.textContent = "Show Less";
    SubscriptionsOpen = true;
  } else {
    ShowSubscriptions(7);
    SubscriptionsPara.textContent = "Show More";
    SubscriptionsOpen = false;
  }
});

let YouSectionData = document.querySelector(".sidebar__library-info-show");

let sum = '';
libraryItems.forEach(function (elem) {
  sum = sum + `<div class="outer-div">
                            <div class="img-div">
                                <img src="${elem.inactiveIcon}" alt="">
                            </div>
                            <p>${elem.name}</p>
                        </div>`
})
YouSectionData.innerHTML = sum;

let ShowMoreExplore = document.querySelector(".show-more-Explore");
let ExplorePara = document.querySelector("#ExplorePara");
let ExploreOpen = false;
let allSidebarExplore = document.querySelector('.sidebar__explore-show-upfrount');
let SubscriptionImg = document.querySelector(".outer-div heading p span img");

function ShowExplore(elem) {
  let SidebarExplore = '';
  exploreItems.slice(0, elem).forEach(function (elem) {
    SidebarExplore += `<div class="outer-div show-more-Explore">
                            <div class="img-div">
                                <img src="${elem.icon}" alt="">
                            </div>
                            <p>${elem.name}</p>
                        </div>`;
  })
  allSidebarExplore.innerHTML = SidebarExplore;
}

ShowExplore(3);

ShowMoreExplore.addEventListener("click", function () {
  if (!ExploreOpen) {
    ShowExplore(exploreItems.length);
    ExplorePara.textContent = "Show Less"
    ExploreOpen = true;
    SubscriptionImg.style.transform = "rotate(0deg)";
  }
  else {
    ShowExplore(3);
    ExplorePara.textContent = "Show More"
    ExploreOpen = false;
  }
});


let categoryContainer = document.querySelector(".inactive-category");

const randomCount = Math.floor(Math.random() * (20 - 4 + 1)) + 4;

function getRandomCategories(count) {
  const result = [];
  const usedIndexes = new Set();

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * youtubeCategories.length);

    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      result.push(youtubeCategories[randomIndex]);
    }
  }

  return result;
}

window.addEventListener("DOMContentLoaded", () => {
  const categories = getRandomCategories(randomCount);

  let html = "";

  categories.forEach((cat) => {
    html += `<div class="category">${cat}</div>`;
  });

  categoryContainer.innerHTML = html;
});


let totalVideoSlots = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
const adFrequency = 0.20;

console.log(adFrequency);


// Pick random unique item from array
function pickRandomUnique(arr) {
  if (!arr.length) return null;
  const idx = Math.floor(Math.random() * arr.length);
  return arr.splice(idx, 1)[0];
}

function generateHomePageVideos() {
  const normalCopy = [...homefeedVideos];
  const adsCopy = [...homeFeedAds];
  const playlist = [];

  for (let i = 0; i < totalVideoSlots; i++) {
    const showAd = adsCopy.length > 0 && Math.random() < adFrequency;

    if (showAd) {
      const ad = pickRandomUnique(adsCopy);
      if (ad) {
        playlist.push({ ...ad, type: "ad" });
        continue;
      }
    }

    const video = pickRandomUnique(normalCopy);
    if (video) {
      playlist.push({ ...video, type: "normal" });
    }
  }

  return playlist;
}

function renderVideos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return console.error("Container not found:", containerId);

  container.innerHTML = "";

  const playlist = generateHomePageVideos();

  playlist.forEach(item => {
    let html = "";

    if (item.type === "ad") {
      html = `
        <div class="home-feed-ad-main-container">
          <div class="video-banner">
            <img src="${item.BannerImg}" alt="">
            <div class="arrow-box"><img src="./svg/top-right-arrow.svg" alt=""></div>
          </div>
          <div class="text-main-content">
            <div class="all-content-con">
              <h4 class="video-heading">${item.Heading}</h4>
              <p class="video-description">${item.description}</p>
              <p class="ads-sponsore-name">
                <strong>Sponsored</strong> • <span class="company-name">${item.AccountName}</span>
              </p>
            </div>
            <div class="three-dot">
              <div><img src="./svg/three-dot-icon.svg" alt=""></div>
            </div>
          </div>
        </div>
      `;
    } else {
      html = `
        <div class="home-feed-video-container">
          <div class="video-banner">
            <img src="${item.BannerImg}" alt="">
            <div class="Timer-box"><p>${item.time}</p></div>
          </div>
          <div class="text-main-content">
            <div class="profile-img">
              <img src="${item.Logo}" alt="">
            </div>
            <div class="all-content-con">
  <h4 class="video-heading">${item.Heading}</h4>
  <p class="video-description">
    ${item.AccountName} 
    ${item.AccountVerified ? `<span><img src="./svg/yt-channel-verified-icon.svg" alt="Verified"></span>` : ""}
  </p>
  <p class="views-count">
    <span class="company-name">${item.views} views</span> • <span class="company-name">${item.uploaded} ago</span>
  </p>
</div>
            <div class="three-dot">
              <div><img src="./svg/three-dot-icon.svg" alt=""></div>
            </div>
          </div>
        </div>
      `;
    }

    container.insertAdjacentHTML("beforeend", html);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderVideos("main-video-content");
});