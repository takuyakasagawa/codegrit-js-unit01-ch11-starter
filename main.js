// モーダル要素の取得
const modal = document.getElementById('easyModal');

// 開くボタン取得
const modalOpen = document.getElementById('modalOpen');

// 閉じるボタン取得
const modalClose = document.getElementsByClassName('modalClose');

// クリックで開くイベントリスナー
modalOpen.addEventListener('click',openClick);

// クリックで閉じるイベントリスナー
modalClose.addEventListener('click',closeClick);

// モーダル以外の場所クリックのイベントリスナー


// モーダルオープンの関数
function openClick(){
    modal.style.display = 'block';
}

// モーダルを閉じる関数
function closeClick(){
    modal.style.display = 'none';
}

// モーダル以外がクリックされた時に閉じる関数
