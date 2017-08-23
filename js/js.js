"use strict"

$(document).ready(function(){

    $('#menu').hide();
    $('#btnClick').click(function(){
        $('#click').hide(600);})
    
    $('#btnShow').click(function(){
        $('#click').show(600);})
    
    $('#btntoggle').click(function(){
        $("#toggle").toggle("slow");})

    $('#btnslideDown').click(function () {
        $('#slideUp').slideDown();})

    $('#btnslideUp').click(function () {
        $('#slideUp').slideUp();})

    $('#btnSlideToggle').click(function () {
        $('#slideToggle').slideToggle();})

    $('#btnSlideToggle1').click(function () {
        $('#slideToggle').slideToggle();})

    $('#btnfadeIn').click(function () {
        $('#fadeOut').fadeIn();})

    $('#btnfadeOut').click(function () {
        $('#fadeOut').fadeOut();})

    $('#btnaddClass').click(function(){
        $('#addClass').addClass("changeColor");})



    $('#img').hover(function(){
    $('#menu').toggle();})
    })