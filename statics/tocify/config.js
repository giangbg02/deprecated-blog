$("#toc").tocify({
    context: 'main',
    selectors: 'h2,h3,h4',
    scrollTo: 50,
    showAndHide: true,
    smoothScroll: true,
    history: false
}).data("toc-tocify");

prettyPrint();
$(".optionName").popover({trigger: "hover"});