document.querySelectorAll("header .banner .location .optionItem").forEach(option => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedText = option.textContent;
    const label = document.querySelector("header .banner .location .label");
    label.innerHTML = `<i class="fa-solid fa-globe"></i> ${selectedText}`; // 텍스트 업데이트
  });
});



let deviceStatus = "";

function subSlideUp(){
  document.querySelectorAll("header .mobile_nav .sub").forEach
  (item => item.style.maxHeight = "0px");
}

const mobileNav = document.querySelector("header .mobile_nav")
const container = document.querySelector("header .container")
const mobileStop = document.querySelector("header .mobile_stop")

function reset(){
  mobileNav.classList.remove('active')
  container.classList.remove('active')
  subSlideUp();
}

window.addEventListener("resize", () => {  
  deviceStatus = window.innerWidth <= 850 ? 'mobile':'pc';

  if(deviceStatus === 'pc' && mobileNav.classList.contains('active')){
    reset();
  }
})


document.querySelectorAll("header .container .banner .nav .nav-list").forEach(item => {
  item.addEventListener("mouseenter", () => {
    if(deviceStatus === 'pc'){
      item.querySelector(".sub").classList.add('over')
      document.querySelector("header .banner .nav .bg").classList.add("over")
    }
  })
  item.addEventListener("mouseleave", () => {
    if(deviceStatus === 'pc'){
      console.log(item)
      item.querySelector(".sub").classList.remove('over')
      document.querySelector("header .banner .nav .bg").classList.remove("over")
    }
  })
})

document.querySelector("header .mobile_tab").addEventListener("click",(e) => {
  e.preventDefault();
  mobileNav.classList.add('active')
  container.classList.add('active')
  mobileStop.classList.add('active')
})
mobileStop.addEventListener("click",(e) => {
  e.preventDefault();
  mobileNav.classList.remove('active')
  container.classList.remove('active')
  mobileStop.classList.remove('active')
})

document.addEventListener('DOMContentLoaded', function () {
  // 모든 .btn 요소를 선택
  const btns = document.querySelectorAll('.mobile_nav .nav-list .btn');

  // 각 .btn에 클릭 이벤트 추가
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      // .nav-list에서 현재 .btn이 속한 부모 div (리스트 항목)
      const navList = btn.closest('.nav-list');
      const subMenu = navList.querySelector('.sub'); // .sub 메뉴
      const nextIcon = btn.querySelector('.next'); // .next 아이콘
      const downIcon = btn.querySelector('.down'); // .down 아이콘

      // .sub 메뉴가 펼쳐져 있다면
      if (subMenu.style.maxHeight) {
        // .sub 메뉴를 숨기고
        subMenu.style.maxHeight = null;
        // 아이콘을 원래대로 돌려놓기
        nextIcon.style.display = 'block';
        downIcon.style.display = 'none';
      } else {
        // .sub 메뉴를 펼치기
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        // 아이콘을 교체
        nextIcon.style.display = 'none';
        downIcon.style.display = 'block';
      }
    });
  });
});



// document.addEventListener('DOMContentLoaded', function () {
//   const menuNames = document.querySelectorAll('.year');
//   const cards = document.querySelectorAll('.box > a');

//   function onScroll() {
//     let currentIndex = -1;

//     cards.forEach((card, index) => {
//       const rect = card.getBoundingClientRect();
//       const triggerLine = window.innerHeight / 2; // 화면의 중간쯤 위치 기준

//       // 카드가 화면 중앙 부근에 보일 때
//       if (rect.top < triggerLine && rect.bottom > triggerLine) {
//         currentIndex = index;
//       }
//     });

//     // .menu-name에 on 클래스 토글
//     menuNames.forEach((menu, index) => {
//       if (index === currentIndex) {
//         menu.classList.add('on');
//       } else {
//         menu.classList.remove('on');
//       }
//     });
//   }

//   window.addEventListener('scroll', onScroll);
//   onScroll(); // 처음 로딩 시 한 번 실행
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const menuLinks = document.querySelectorAll('.year a');
//   const cards = document.querySelectorAll('.box > a');

//   menuLinks.forEach((link, index) => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault(); // 링크 기본 동작 막기

//       // 대상 카드 요소 위치로 스크롤 이동
//       const targetCard = cards[index];
//       const offsetTop = targetCard.getBoundingClientRect().top + window.scrollY;

//       window.scrollTo({
//         top: offsetTop - 100, // 원하는 여백만큼 조정 (ex: 고정 메뉴 높이 고려)
//         behavior: 'smooth'
//       });
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const menuList = document.querySelector('.year-list');
//   const triggerTarget = document.querySelector('.box > a'); // 첫 번째 카드 요소

//   function toggleFixedMenu() {
//     const triggerTop = triggerTarget.getBoundingClientRect().top;

//     if (triggerTop <= 100) { // 100px 이상 위로 올라왔을 때
//       menuList.classList.add('fixed');
//     } else {
//       menuList.classList.remove('fixed');
//     }
//   }

//   window.addEventListener('scroll', toggleFixedMenu);
//   toggleFixedMenu(); // 처음 로딩 시 실행
// });





//top_btn 첫페이지 반이상 내리면 보이고  누르면 젤상단으로 이동 
const topBtn = document.querySelector("footer .top_btn");
const showButtonThreshold = document.documentElement.scrollHeight / 10; // 페이지 높이의 절반

// 스크롤 위치에 따라 버튼 보이기/숨기기
window.addEventListener('scroll', () => {
  if (window.scrollY >= showButtonThreshold) {
    topBtn.style.display = 'block';  // 스크롤이 절반 이상 내려가면 버튼이 보임
  } else {
    topBtn.style.display = 'none';   // 그렇지 않으면 버튼 숨김
  }
});

// 버튼 클릭 시 상단으로 이동
topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // 부드럽게 스크롤 상단으로 이동
  });
});



const ani1 = gsap.timeline();

ani1.fromTo(".list1 .img #i1", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
  .fromTo(".list1 .img #i2", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")


ScrollTrigger.create({
  animation: ani1,
  trigger: ".list1",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})

const ani2 = gsap.timeline();

ani2.fromTo(".list2 .img #i1", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
  .fromTo(".list2 .img #i2", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")


ScrollTrigger.create({
  animation: ani2,
  trigger: ".list2",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})

const ani3 = gsap.timeline();

ani3.fromTo(".list3 .img img", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
 


ScrollTrigger.create({
  animation: ani3,
  trigger: ".list3",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: true
})

const ani4 = gsap.timeline();

ani4.fromTo(".list4 .img img", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
 


ScrollTrigger.create({
  animation: ani4,
  trigger: ".list4",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})

const ani5 = gsap.timeline();

ani5.fromTo(".list5 .img img", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
 


ScrollTrigger.create({
  animation: ani5,
  trigger: ".list5",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})

const ani6 = gsap.timeline();

ani6.fromTo(".list6 .img img", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
 


ScrollTrigger.create({
  animation: ani6,
  trigger: ".list6",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})

const ani7 = gsap.timeline();

ani7.fromTo(".list7 .img img", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
 


ScrollTrigger.create({
  animation: ani7,
  trigger: ".list7",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})

const ani8 = gsap.timeline();

ani8.fromTo(".list8 .img img", { height: "0", opacity: 0 }, { height: "60vh", opacity: 1 }, "text")
 


ScrollTrigger.create({
  animation: ani8,
  trigger: ".list8",
  start: "top 5% ",
  end: "top 60%",
  scrub: true,
  // pin:true,
  anticipatePin: 1,
  markers: false
})





  // const video = document.getElementById("video1");
  // const playStopIcon = document.getElementById("playStopIcon");
  // const muteIcon = document.getElementById("muteIcon");

  // // 버튼 자체를 숨기려면 이거들을 감싸는 컨테이너
  // const buttonContainer = document.querySelector(".button-container");

  // // 재생 중일 때만 버튼 보이기
  // function updateButtonVisibility() {
  //   if (video.paused) {
  //     buttonContainer.style.display = "none";
  //   } else {
  //     buttonContainer.style.display = "block";
  //   }
  // }

  // // 처음 페이지가 로드됐을 때 한 번 실행
  // updateButtonVisibility();

  // // 재생/일시정지 상태가 바뀔 때마다 실행
  // video.addEventListener("play", updateButtonVisibility);
  // video.addEventListener("pause", updateButtonVisibility);

  // // ▶️ 재생/정지 토글 함수
  // function togglePlayStop() {
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  //   updateButtonVisibility();
  // }

  // // 🔇 음소거/음소거 해제 토글 함수
  // function toggleMute() {
  //   video.muted = !video.muted;
  //   // 아이콘 변경
  //   muteIcon.className = video.muted
  //     ? "fa-solid fa-volume-xmark"
  //     : "fa-solid fa-volume-high";
  // }
