const questions = [
    {
        image: "https://facts.net/wp-content/uploads/2023/07/20-facts-about-crabominable-1689482095.jpg",
        answer: "Crabominable",
        choices: ["Crabominable", "Komala", "Cufant"]
      },
  
      // 2e question
      {
        image: "https://wallpapercave.com/wp/wp2452772.png",
        answer: "Lickitung",
        choices: ["Shuckle", "Lickitung", "Mawile"]
      },
  
      // 3e question
      {
          image: "https://th.bing.com/th/id/OIP.yiS3jMj3ux_SpAYRnnlDaQAAAA?cb=iwc1&rs=1&pid=ImgDetMain",
          answer: "Shuckle",
          choices: ["Mawil", "Shuckle", "Lickitung"]
      },
  
      // 4e question
      {
          image: "https://th.bing.com/th/id/OIP.qSdykdcjAzsUiNV1UvoTTQHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
          answer: "Delibird",
          choices: ["Delibird", "Chimecho", "Spinda"]
      },
  
      // 5e question
      {
          image: "https://th.bing.com/th/id/OIP.FWxdCXajmlrKnpfbPTCUEwHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
          answer: "Lumineon",
          choices: ["Carnivine", "Chatot", "Lumineon"]
      },
  
      // 6e question
      {
          image: "https://nerdburglars.net/pokemon/wp-content/uploads/sites/2/2023/01/basculin-red-striped.jpg",
          answer: "Basculin",
          choices: ["Maractus", "Basculin", "Heatmor"]
      },
  
      // 7e question 
      {
          image: "https://th.bing.com/th/id/OIP.Vn_MAoQ-ZrtaeckZWfOpKwHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
          answer: "Gourgeist",
          choices: ["Gourgeist", "Carbink", "Phione"]
      },
  
      // 8e question
      {
          image: "https://wallpapercave.com/wp/wp3810558.png",
          answer: "Bruxish",
          choices: ["Bruxish", "Dhelmise", "Morpeko"]
      },
  
      // 9e question 
      {
          image: "https://images.imyfone.com/en/images/2021/06/cufant-2.jpg",
          answer: "Cufant",
          choices: ["Cufant", "Falinks", "Greedent"]
      },
  
      // 10e question
      {
          image: "https://assets.gamepur.com/wp-content/uploads/2022/11/28155911/pokemon-scarlet-violet-veluza-1.jpg",
          answer: "Veluza",
          choices: ["Arctozolt", "Veluza", "Tinkatuff"]
      },
  
      // 11e question
      {
          image: "https://th.bing.com/th/id/OIP.MSoqSzIgwuOy3D2sNT4BpAHaFj?cb=iwc1&rs=1&pid=ImgDetMain",
          answer: "Fearow",
          choices: ["Xatu", "Electrode", "Fearow"]
      },
  
      // 12e question 
      {
          image: "https://wallpapers.com/images/file/galloping-girafarig-syeq3mluhd2v9aiw.jpg",
          answer: "Girafarig",
          choices: ["Glalie", "Girafarig", "Masquerain"]
      }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const imgElement = document.getElementById("question-image");
  const choicesContainer = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");
  
  function chargerQuestion() {
    const q = questions[currentQuestion];
    imgElement.src = q.image;
    feedbackElement.textContent = "";
    choicesContainer.innerHTML = "";
  
    q.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "choice";
      btn.onclick = () => regarderReponse(choice);
      choicesContainer.appendChild(btn);
    });
  }
  
  function regarderReponse(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
      feedbackElement.textContent = "✅ Bravo !";
    } else {
      feedbackElement.textContent = `❌ Mauvais choix. C'était : ${correct}`;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(chargerQuestion, 1500);
    } else {
      setTimeout(() => {
        choicesContainer.innerHTML = "";
        imgElement.remove();
        feedbackElement.innerHTML = `<h2>Score final : ${score}/${questions.length}</h2>`;
      }, 2000);
    }
  }
  
  chargerQuestion();
  