function smallDevice (){
    if(window.innerWidth <= 720){
        const calculateTitle = document.querySelector('.calculate-title');
        calculateTitle.addEventListener('click', () =>{
            calculateTitle.classList.toggle('active');
        })
    }
}
smallDevice();
 $(document).ready(function () {
    if(window.innerWidth < 720){
        $('.calculate-title').on('click', function() {
        $('.calculator-description').toggle();
        $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    });
    };
});

function estimateFiO2(flow) {
    let fio2 = 20 + (flow * 4);
    return fio2.toFixed(1);
}

function updateFiO2() {
    let flow = parseFloat($('#flow').val()).toFixed(1);
    $('#flowVal').text(flow);

    let fio2 = estimateFiO2(flow);
    $('#fio2').text(fio2 + '%');
}

$(document).ready(function () {
    updateFiO2();
    $('#flow').on('input', updateFiO2);
});