
const tabs = [...document.querySelectorAll('.tab')];// все вкладки
const tabContents = [... document.querySelectorAll('.tab__content')];//содержимое вкладок

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
    const tabIndex = tabs.indexOf(tab); //найдем индекс вкладки

    tab.classList.toggle('tab_active');  //удаляем\добавляем класс активной вкладки

    // tabs.forEach(tab => {
    //     tab.classList.remove('tab_active'); // 
    // });
    // tab.classList.add('tab_active');
    tabContents.forEach(content => { // перебираем все табконтент и удаляем активную вкладку
        content.classList.remove('tab__content_active');
    });
    tabContents[tabIndex].classList.add('tab__content_active');// добавляем текущей вкладке [tabIndex] активность
    });
});
