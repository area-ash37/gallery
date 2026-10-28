$(function () {

    // スライドショー（slick）はindex.htmlに直接記載


    ///////////////////////// 
    // カードサイズ表示切替 
    ////////////////////////

    // 小にする（これでも動く！）
    // クラスを持っているかifelseで確認　→　あったらそれをリムーブ
    // そのあとつけたいクラスを付与
    // $('.card_s').on('click', function () {
    //     if ($('.cardsize').hasClass('cardlist_m')) {
    //         $('.cardlist').removeClass('cardlist_m');
    //     } else {
    //         $('.cardlist').removeClass('cardlist_l');
    //     }
    //    $('.cardlist').addClass('cardlist_s');
    // });


    // 小にする
    $('.card_s').on('click', function () {
        // カードリストに下記のクラスがついていたら外す
        $('.cardlist')
            .removeClass('cardsize')
            .removeClass('cardlist_m')
            .removeClass('cardlist_l');
            // 外した後に新しくクラスを付与する
        $('.cardlist').addClass('cardlist_s');
    });


    // 中にする
    $('.card_m').on('click', function () {
        $('.cardlist')
            .removeClass('cardsize')
            .removeClass('cardlist_s')
            .removeClass('cardlist_l');
        $('.cardlist').addClass('cardlist_m');
    });

    // 大にする
    $('.card_l').on('click', function () {
        $('.cardlist')
            .removeClass('cardsize')
            .removeClass('cardlist_s')
            .removeClass('cardlist_m');
        //  }
        $('.cardlist').addClass('cardlist_l');
    });


    // if文のダブル条件指定のテスト
    // if (true || true) { console.log('test') }

    //     // 大にする
    // $('.card_l').on('click', function () {
    //     // ifのダブル条件指定のやりかた　||　どちらかを持っていたらtrue
    //     // if ($('.cardsize').hasClass('cardlist_s')
    //     //     || $('.cardsize').hasClass('cardlist_m')
    //     // ) {
    //     $('.cardlist')
    //         .removeClass('cardlist_s')
    //         .removeClass('cardlist_m');
    //     //  }
    //     $('.cardlist').addClass('cardlist_l');
    // });


});