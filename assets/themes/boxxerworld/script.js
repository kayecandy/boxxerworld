jQuery(($)=>{

    const $controlsSummaryContainer = $('.cndce-controls-summary');
    const $controlsSummary = $('#cndce-controls-summary', $controlsSummaryContainer);

    $('.cndce-control-top--list').click(()=>{
        $controlsSummaryContainer.fadeIn();
        $controlsSummary.collapse('show');
        
    })

    $controlsSummaryContainer.on('click', '.accordion-button', ()=>{
        $controlsSummaryContainer.fadeOut();
    })
});