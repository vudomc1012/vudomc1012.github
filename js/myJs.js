const textConfig = {
  text1: "Hế hế luu, chao xìn chao xìn Lê Thanh Hiền xinh đẹp tuyệt vờiiiii UwU",
  text2: "Sau bài Mini test từ Lê Thanh Hiền thì Vũ cũng có 1 bài tương tự nhé :>",
  text3: "Tuấn cùi này Lê Thanh Hiền sẽ chọn ăn gì để lấp đầy cái bụng đói nào 😻",
  text4: "Thử không đồng ý xem 😒 ",
  text5: "Giới trẻ",
  text6: "Cóaaaaaヾ(≧ ▽ ≦)ゝ ",
  text7: "Đây là thông điệp từ dzũ trụ gửi tới Hìn chúiii :>",
  text8: "Gõ nhiều vào rồi ấn dzô đây =)))))",
  text9: "Thích Hiền là điều đúng đắn và tuyệt vời nhất với Vũ",
  text10: "Iuuuu Hìn chúiii nhất trên đờiiii !!",
  text11:
    "Chúng mình sẽ đi triển lãm và hít hà hoa sữaaa. Còn chần chừ gì nữa, mau đón nhận thông địp từ dzũ trụ đii",
  text12: "Okii lunn ♓",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/moimoimoi.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 700,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='gõ vào đây pà già =)))'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#EA3ABC",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 700,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          backdrop: `
                    rgba(0,50,123,0.4)
                    url("img/yes.gif")
                    bottom center
                    no-repeat
                  `,
          confirmButtonColor: "#FA7AC2",
          onClose: () => {
            window.location = "https://www.facebook.com/messages/t/100049926514718";           
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
