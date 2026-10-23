$(function () {

// スライドショー（slick）

$(document).ready(function(){
  $('.your-class').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});


// 
// アイテムリストページ
// 
// デフォルト、サイズごとにクラスを作って付け替える！！！！！
// 画像クリックでモーダルウィンドウを開きたい
// 


    // カードリスト表示サイズ切替
    // 小
    $('.card_s').on('click', function () {
        // カラム変更
        $('ul.cardlist').css('grid-template-columns', 'repeat(3,1fr)');
        // タグ以外のテキストを見えなくする
        $('.textarea_min').css('display', 'none');
        // アイテムNOフォントサイズ変更
        $('h4.card_no')
        .css('font-size', '1rem');
    });

    // 中
    $('.card_m').on('click', function () {
        // カラム変更
        $('ul.cardlist').css('grid-template-columns', 'repeat(2,1fr)');
        // アイテムNOフォントサイズ変更
        $('h4.card_no').css('font-size', '1.3rem');
        // タグ以外のテキストを見せる
        $('.textarea_min').css('display', 'block');
    });

    // 大
    $('.card_l').on('click', function () {
        // カラム変更
        $('ul.cardlist').css('grid-template-columns', 'repeat(1,1fr)');
        //アイテムNOフォントサイズ変更
        $('h4.card_no').css('font-size', '1.7rem');
        // タグ以外のテキストを見せる
        $('.textarea_min').css('display', 'block')
        // // レイアウト可変
        // $('li.card').remove('li.card');
        // $('li.card').addClass('li.card_L');
    });





});