// ==============================
// FACILITY 탭
// ==============================
const facilityTabs = document.querySelectorAll('.FACILITY-wrap .tab-menu > li');
const facilityContents = document.querySelectorAll('.facility-list-wrap > div');

facilityTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        // 탭 active 초기화
        facilityTabs.forEach(item => {
            item.classList.remove('active');
        });

        // 클릭한 탭 active
        tab.classList.add('active');

        // 콘텐츠 초기화
        facilityContents.forEach(content => {
            content.classList.remove('active');
        });

        // 클릭한 탭에 해당하는 콘텐츠 표시
        facilityContents[index].classList.add('active');
    });
});


// ==============================
// CONCIERGE 탭
// ==============================
const conciergeTabs = document.querySelectorAll('.CONCIERGE-wrap .tab-menu > li');
const conciergeContents = document.querySelectorAll('.concierge-list-wrap > div');

conciergeTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        // 탭 active 초기화
        conciergeTabs.forEach(item => {
            item.classList.remove('active');
        });

        // 클릭한 탭 active
        tab.classList.add('active');

        // 콘텐츠 초기화
        conciergeContents.forEach(content => {
            content.classList.remove('on');
        });

        // 클릭한 탭에 해당하는 콘텐츠 표시
        conciergeContents[index].classList.add('on');
    });
});