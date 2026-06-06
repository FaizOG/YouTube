const subscriptions = [
    {
        name: "Inosuke Recap",
        image: "./image/home-page-aside-Subscriptions/Inosuke-Recap.jpg",
        hasNew: true
    },
    {
        name: "Manhwa Apex",
        image: "./image/home-page-aside-Subscriptions/Manhwa-Apex.jpg",
        hasNew: false
    },
    {
        name: "Abou Toure",
        image: "./image/home-page-aside-Subscriptions/Abou-Toure.jpg",
        hasNew: false
    },
    {
        name: "Shreshth Kaushik",
        image: "./image/home-page-aside-Subscriptions/Shreshth-Kaushik.jpg",
        hasNew: false
    },
    {
        name: "Visual Venture",
        image: "./image/home-page-aside-Subscriptions/Visual-Venture.jpg",
        hasNew: false
    },
    {
        name: "GB Voice Academy",
        image: "./image/home-page-aside-Subscriptions/GB-Voice-Academy.jpg",
        hasNew: false
    },
    {
        name: "Sunny Mosam",
        image: "./image/home-page-aside-Subscriptions/Sunny-Mosam.jpg",
        hasNew: false
    },
    {
        name: "Aisha Sultan",
        image: "./image/home-page-aside-Subscriptions/Aisha-Sultan.jpg",
        hasNew: true
    },
    {
        name: "ImportedMaple",
        image: "./image/home-page-aside-Subscriptions/ImportedMaple.jpg",
        hasNew: false
    },
    {
        name: "Interactive English",
        image: "./image/home-page-aside-Subscriptions/Interactive-English.jpg",
        hasNew: true
    }
];

const libraryItems = [
    {
        name: "Your Channel",
        inactiveIcon: "./svg/You/your-channel-inactive-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
    {
        name: "History",
        inactiveIcon: "./svg/You/history-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
    {
        name: "Playlist",
        inactiveIcon: "./svg/You/playlist-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
    {
        name: "Watch later",
        inactiveIcon: "./svg/You/watch-later-inactive-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
    {
        name: "Liked videos",
        inactiveIcon: "./svg/You/liked-videos-inactive-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
    {
        name: "Your videos",
        inactiveIcon: "./svg/You/your-videos-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
    {
        name: "Downloads",
        inactiveIcon: "./svg/You/downloads-icon.svg",
        activeIcon: "./svg/You/your-channel-active-icon.svg",
        status: "inactive",
    },
];

const exploreItems = [
    // visible items
    {
        name: "Shopping",
        icon: "./svg/home-page-aside-Explore/shopping-inactive-icon.svg",
        // hidden: false
    },
    {
        name: "Music",
        icon: "./svg/home-page-aside-Explore/music-inactive-icon.svg",
        // hidden: false
    },
    {
        name: "Movies",
        icon: "./svg/home-page-aside-Explore/movies-inactive-icon.svg",
        hidden: false
    },

    // hidden (Show more section)
    {
        name: "Live",
        icon: "./svg/home-page-aside-Explore/live-inactive-icon.svg",
        hidden: true
    },
    {
        name: "Gaming",
        icon: "./svg/home-page-aside-Explore/gaming-inactive-icon.svg",
        hidden: true
    },
    {
        name: "News",
        icon: "./svg/home-page-aside-Explore/news-inactive-icon.svg",
        hidden: true
    },
    {
        name: "Sports",
        icon: "./svg/home-page-aside-Explore/sports-inactive-icon.svg",
        hidden: true
    },
    {
        name: "Courses",
        icon: "./svg/home-page-aside-Explore/cources-inactive-icon.svg",
        hidden: true
    },
    {
        name: "Fashion & Beauty",
        icon: "./svg/home-page-aside-Explore/Fashion-&-Beauty-inactive-icon.svg",
        hidden: true
    },
    {
        name: "Podcasts",
        icon: "./svg/home-page-aside-Explore/podcasts-inactive-icon.svg",
        hidden: true
    },
    {
        name: "Playables",
        icon: "./svg/home-page-aside-Explore/Playables-inactive-icon.svg",
        hidden: true
    }
];


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

ShowMoreExplore.addEventListener("click", function(){
    if(!ExploreOpen) {
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