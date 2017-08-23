"use strict"

$(document).ready(function(){
////////////////////////////////////////////////////

    // $('#menu').hide();
    // $('#btnClick').click(function(){
    //     $('#click').hide(600);})
    
    // $('#btnShow').click(function(){
    //     $('#click').show(600);})
    
    // $('#btntoggle').click(function(){
    //     $("#toggle").toggle("slow");})

    // $('#btnslideDown').click(function () {
    //     $('#slideUp').slideDown();})

    // $('#btnslideUp').click(function () {
    //     $('#slideUp').slideUp();})

    // $('#btnSlideToggle').click(function () {
    //     $('#slideToggle').slideToggle();})

    // $('#btnSlideToggle1').click(function () {
    //     $('#slideToggle').slideToggle();})

    // $('#btnfadeIn').click(function () {
    //     $('#fadeOut').fadeIn();})

    // $('#btnfadeOut').click(function () {
    //     $('#fadeOut').fadeOut();})

    // $("input").click(function(){
    // $("h1").addClass("changeColor");})

    // $('#img').hover(function(){
    // $('#menu').toggle();})

    //before
    $('#before').click(function(){
        $('#before').before("<b>New Text</b>");})
    $('#after').click(function () {
        $('#after').after("<b>after Text</b>");
    })
    $('#append').click(function () {
        $('#fadeOut').after("<b>Append Text</b>");
    })
    // $('#html').click(function(){
    //     $('image').html("new stuff");
    // })
    
    $('#html').click(function () {
        // $('#this').attr("width", "2000");
        console.log($(this).attr('href'))
    })
    ///////////////////////////////////////////////////////////////////////a
    })