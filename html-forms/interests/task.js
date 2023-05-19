function check (event) {

    const target = event.target;

        if (target.classList.contains('interest__check')) {// содержит ли блок инпут
            
            const targetChild = target.closest('.interest');//находит конкретный блок с интерест: Еда или Домашние животные
            const childItemsIn = targetChild.querySelectorAll('.interests_active .interest__check');//находим все дочерние блоки инпут в targetChild потомки interest 
            
            childItemsIn.forEach(function(child) {// и проставляем чек дочерним .... если жмется изначально дочерний элемент то он просто отмечается так как в нем нет потомков и он один foreach сработает 1 раз
            child.checked = target.checked;
            }
        );
    }
}  

document.addEventListener('click', check);











