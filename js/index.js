for(i = 1; i <= 4; i++) {
    // 各エリアのIDを取得
    let contents = document.getElementById('area0' + i);
    // 各メニューのURLを取得し、該当のページに飛ばす処理
    let menu_link = document.getElementById('link' + i);
    let menu = function(){
        console.log(menu_link.href);
        let menu_url = menu_link.href;
        location.href = menu_url;
    }
    // マウスオーバーした際にclass:area-hoverを付与、クリックした場合更にclass:onを付与
    contents.addEventListener('mouseover', function(){
        this.classList.add('area-hover');
        this.addEventListener('click', function(cummer){
            cummer.preventDefault();
            this.classList.add('on');
            setTimeout(menu, 2000); // クリックされて2秒後にページ遷移
        });
    });
    // マウスリムーブされた場合、付与していたclassを削除
    contents.addEventListener('mouseleave', function(){
        this.classList.remove('area-hover');
        this.classList.remove('on');
    });
}