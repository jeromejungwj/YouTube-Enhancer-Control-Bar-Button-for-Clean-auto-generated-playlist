(function () {
    const BUTTON_ID = "efyt-clean-url-button";

    // CSS 한 번에 추가
    const style = document.createElement("style");
    style.textContent = `
    /* 컨트롤바 확장 */
    .efyt-control-bar.centered {
        padding-left: 16px !important;
        padding-right: 16px !important;
        min-width: 260px !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
    }

    /* 버튼 스타일 */
    #${BUTTON_ID} {
        width: 22px;
        height: 22px;
        background: red;
        cursor: pointer;
        border-radius: 4px;
        margin-left: 8px;
    }
    `;
    document.head.appendChild(style);

    function insertButton() {
        const bar = document.querySelector(".efyt-control-bar");
        if (!bar) return;

        if (document.getElementById(BUTTON_ID)) return;

        const btn = document.createElement("div");
        btn.id = BUTTON_ID;

        // 클릭하면 URL 정리
        btn.onclick = () => {
            const current = new URL(location.href);
            const v = current.searchParams.get("v");
            if (!v) return;
            location.href = "https://www.youtube.com/watch?v=" + v;
        };

        bar.appendChild(btn);
    }

    // MutationObserver로 DOM 변화 감지
    const observer = new MutationObserver(insertButton);
    observer.observe(document.body, { childList: true, subtree: true });

    insertButton();
})();
