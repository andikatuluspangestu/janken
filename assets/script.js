$(document).ready(function () {
  // Inisisalisasi variabel
  let userChoice = "";
  let computerChoice = "";

  $(".start-btn").click(function () {
    $("#start-page").hide();
    $("#user-select-choice").fadeIn();
  });

  // Tekan SPACE untuk memulai permainan
  $(document).keypress(function (e) {
    if (e.which === 32) {
      $("#start-page").hide();
      $("#user-select-choice").fadeIn();
    }
  });

  // Jika user belum memilih, tombol konfirmasi tidak akan muncul
  $(".user-confirm-select-choice-btn").hide();

  // Pilih item batu, gunting, atau kertas oleh user
  $(".user-select-choice-item").click(function () {
    userChoice = $(this).data("choice");

    $(".user-selected-choice-item").attr(
      "src",
      `assets/img/items/${userChoice}.png`
    );

    $(".user-select-choice-item").each(function () {
      if ($(this).data("choice") !== userChoice) {
        $(this).fadeOut();
      }
    });

    $(".user-select-choice-text").text("Kamu memilih " + userChoice);
    $(".user-confirm-select-choice-btn").fadeIn();
    $(".user-confirm-select-choice-btn").click(function () {
      $("#user-select-choice").hide();
      $("#computer-select-choice").fadeIn();
      setTimeout(computerChoose, 2000);
    });
  });

  // Pilih item batu, gunting, atau kertas oleh komputer
  function computerChoose() {
    const choices = ["batu", "gunting", "kertas"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    $(".computer-selected-choice-item").attr(
      "src",
      `assets/img/items/${computerChoice}.png`
    );
    $("#computer-select-choice").hide(); 
    $("#preparing-battle-game").fadeIn(); 
    countdown(1, showResult);
  }

  // Hitung mundur memulai permainan
  function countdown(counter, callback) {
    if (counter > 0) {
      $("#countdown").text(counter);
      setTimeout(() => countdown(counter - 1, callback), 1000);
    } else {
      $("#countdown").text("GO!");
      setTimeout(callback, 1000);
    }
  }

  // Menampilkan hasil permainan
  function showResult() {
    $("#preparing-battle-game").hide(); 
    $("#game-result").fadeIn(); 

    let result = "";

    if (userChoice === computerChoice) {
      result = "seri";
    } else if (
      (userChoice === "batu" && computerChoice === "gunting") ||
      (userChoice === "gunting" && computerChoice === "kertas") ||
      (userChoice === "kertas" && computerChoice === "batu")
    ) {
      result = "menang";
    } else {
      result = "kalah";
    }

    let resultText = "";
    let resultDescription = "";
    let emojiSrc = "";

    if (result === "menang") {
      resultText = "Selamat!";
      resultDescription = "Yeyy, kamu menang! Selamat ya..";
      emojiSrc = "assets/img/expressions/happy.png";
    } else if (result === "kalah") {
      resultText = "Yah!";
      resultDescription = "Sayang sekali, kamu kalah..";
      emojiSrc = "assets/img/expressions/sad.png";
    } else {
      resultText = "Seri!";
      resultDescription = "Kamu seri dengan komputer..";
      emojiSrc = "assets/img/expressions/omg.png";
    }

    $("#game-result-emoji").attr("src", emojiSrc);
    $("#game-result-text").text(resultText);
    $("#game-result-description").text(resultDescription);
    $("#play-again-btn").fadeIn(); 
  }

  // Memulai permainan kembali
  $("#play-again-btn").click(function () {
    $("#game-result").hide(); 
    $("#start-page").fadeIn(); 
    $(".user-confirm-select-choice-btn").hide();
    
    if (userChoice !== "") {
      $(".user-select-choice-text").text("Pilih item yang kamu inginkan");
    }

    $(".user-select-choice-item").each(function () {
      $(this).fadeIn(); 
    });

    userChoice = "";
    computerChoice = "";
  });
});
