export default function resizeFontsize() {
  (function (window, document) {
    function change() {
      // 以psd图为375宽时，默认字体大小为 16  750时对应32
      // 这样图纸测量多少，直接写就行，不用重新换算
      document.documentElement.style.fontSize =
        (16 * document.documentElement.clientWidth) / 1920 + "px";
    }

    change();

    window.addEventListener(
      "resize",
      function () {
        change();
      },
      false
    );
  })(window, document);
}
