jQuery(function ($) {

    //コンテンツを囲む要素をidで指定
    var container = document.querySelector('#js-masonry');

    //すべての画像を読み込み終わった後に関数を実行
    imagesLoaded(container, function () {
        var msnry = new Masonry(container, {
            itemSelector: '.item', //コンテンツのclass名
            isFitWidth: true, //コンテナの親要素のサイズに基づいて、コンテンツのカラムを自動調節します。
            isResizable: true, //ウィンドウサイズが変更された時に並び替え
            isAnimated: true, //スムースアニメーション設定
        });

        $('#loading').fadeOut(300); //画像が読み込み終わったらloadingを非表示にする
        $('#gallery').addClass('on'); //コンテナにclassを付与して表示を切り替える

    });
});
