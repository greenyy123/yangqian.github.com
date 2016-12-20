/**
 * Created by Administrator on 2016/12/20.
 */
$(function(){
    $('.q_header .q_top img').click(function(){
        $('.q_cover').css('display','block');
    });
    $('.q_cover .q_top img').click(function(){
        $('.q_cover').css('display','none');
    });
    $('#link').click(function(){
        $('.q_cover').css('display','none');
    });
});