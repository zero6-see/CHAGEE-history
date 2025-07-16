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




document.addEventListener('DOMContentLoaded', function () {
  const menuNames = document.querySelectorAll('.menu-name');
  const cards = document.querySelectorAll('.box > a');

  function onScroll() {
      let currentIndex = -1;

      cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const triggerLine = window.innerHeight / 2; // 화면의 중간쯤 위치 기준

          // 카드가 화면 중앙 부근에 보일 때
          if (rect.top < triggerLine && rect.bottom > triggerLine) {
              currentIndex = index;
          }
      });

      // .menu-name에 on 클래스 토글
      menuNames.forEach((menu, index) => {
          if (index === currentIndex) {
              menu.classList.add('on');
          } else {
              menu.classList.remove('on');
          }
      });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // 처음 로딩 시 한 번 실행
});


document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-name a');
  const cards = document.querySelectorAll('.box > a');

  menuLinks.forEach((link, index) => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // 링크 기본 동작 막기

          // 대상 카드 요소 위치로 스크롤 이동
          const targetCard = cards[index];
          const offsetTop = targetCard.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
              top: offsetTop - 100, // 원하는 여백만큼 조정 (ex: 고정 메뉴 높이 고려)
              behavior: 'smooth'
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuList = document.querySelector('.menu-list');
  const triggerTarget = document.querySelector('.box > a'); // 첫 번째 카드 요소

  function toggleFixedMenu() {
      const triggerTop = triggerTarget.getBoundingClientRect().top;

      if (triggerTop <= 100) { // 100px 이상 위로 올라왔을 때
          menuList.classList.add('fixed');
      } else {
          menuList.classList.remove('fixed');
      }
  }

  window.addEventListener('scroll', toggleFixedMenu);
  toggleFixedMenu(); // 처음 로딩 시 실행
});


mobileStop.addEventListener("click", reset);

window.dispatchEvent(new Event("resize"));





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


