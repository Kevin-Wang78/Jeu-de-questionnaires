const questions = [
    // 1re question
    {
      image: "https://th.bing.com/th/id/R.543162bc42c15720532a298c8df67f6c?rik=EvyzszWm5Ytjuw&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20140905023702%2fdisney%2fimages%2fa%2fa8%2fChicken-little-disneyscreencaps.com-1529.jpg&ehk=eDYcpmnHei8JXoCcQ2PYtpFaYvyTlOKc2qH4T7ANeag%3d&risl=&pid=ImgRaw&r=0",
      answer: "Chicken Little",
      choices: ["Chicken Little", "Tarzan", "Hercule"]
    },

    // 2e question
    {
      image: "https://th.bing.com/th/id/OIP.TQ3Pt6uh8L6eDYtCcedGvgHaFS?cb=iwc1&rs=1&pid=ImgDetMain",
      answer: "Le Roi Lion",
      choices: ["Vaiana", "Le Roi Lion", "Vaiana"]
    },

    // 3e question
    {
        image: "https://th.bing.com/th/id/R.b1730255868908f149284e344fe8a52c?rik=HkctKVlqmhzLRw&riu=http%3a%2f%2fradiodisneyclub.fr%2fwp-content%2fuploads%2f2014%2f01%2fTaram-et-le-Chaudron-Magique-Image-6.png&ehk=goP62YWd1rk2K2eDpHZUU6qG9viQqg3eri4Dc%2fJ%2fHrw%3d&risl=&pid=ImgRaw&r=0",
        answer: "Taram et le Chaudron Magique",
        choices: ["Peter Pan", "Taram et le Chaudron Magique", "Pinocchio"]
    },

    // 4e question
    {
        image: "https://th.bing.com/th/id/OIP.Gbgx1bWTzlUJkMvzQ5tArAHaEA?cb=iwc1&rs=1&pid=ImgDetMain",
        answer: "Dingo et Max",
        choices: ["Taram et le Chaudron Magique", "Dingo et Max", "Le Livre de la Jungle"]
    },

    // 5e question
    {
        image: "https://i.pinimg.com/originals/a6/9d/5a/a69d5ae92b437cbdf64b51f44f60ac79.jpg",
        answer: "Vaiana 1",
        choices: ["Vaiana 1", "Vaiana 2", "Harry Potter"]
    },

    // 6e question
    {
        image: "https://th.bing.com/th/id/OIP.qrnNkKFF368bkvshNCv9hgHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
        answer: "Bolt",
        choices: ["Volt", "Bolt", "Là-Haut"]
    },

    // 7e question 
    {
        image: "https://th.bing.com/th/id/OIP.6G-sPQRDk1ntsT6Zlo4VJQHaEL?cb=iwc1&rs=1&pid=ImgDetMain",
        answer: "Là-Haut",
        choices: ["Là-Haut", "Aladdin", "L'étrange Noel de Monsieur Jack"]
    },

    // 8e question
    {
        image: "https://th.bing.com/th/id/OIP.D3oISu3ce6fOSeIKzEsOygHaFa?cb=iwc1&rs=1&pid=ImgDetMain",
        answer: "Aladdin",
        choices: ["Vaiana", "Aladdin", "Le Livre de la Jungle"]
    },

    // 9e question 
    {
        image: "https://www.studiodesursulines.com/wp-content/uploads/2019/12/jack169.png",
        answer: "L'étrange Noel de Monsieur Jack",
        choices: ["Bambi", "Là-Haut", "L'étrange Noel de Monsieur Jack"]
    },

    // 10e question
    {
        image: "https://www.cinemaclock.com/images/580x326/90/snow-white-20255460.jpg",
        answer: "Blance-Neige",
        choices: ["La Belle et la Bête", "Cendrillon", "Blanche-Neige"]
    },

    // 11e question
    {
        image: "https://i.etsystatic.com/8367492/r/il/0f9d07/3005081754/il_1588xN.3005081754_skwd.jpg",
        answer: "Winnie l'ourson",
        choices: ["Ratatouille", "Winnie l'ourson", "Michael Jackson"]
    },

    // 12e question 
    {
        image: "https://th.bing.com/th/id/R.48aed92591eae3a3121ec70239b52a02?rik=hr0lL4nielH7Xg&riu=http%3a%2f%2fwww.slashfilm.com%2fwp%2fwp-content%2fimages%2frat5.jpg&ehk=joMEXTd3HzhO4K4krSp4FJpBZEZqjN9ZD6FF97udxA0%3d&risl=&pid=ImgRaw&r=0",
        answer: "Ratatouille",
        choices: ["Vaiana", "Ratatouille", "Le Livre de la Jungle"]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const imgElement = document.getElementById("question-image");
  const choicesContainer = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    imgElement.src = q.image;
    feedbackElement.textContent = "";
    choicesContainer.innerHTML = "";
  
    q.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "choice";
      btn.onclick = () => checkAnswer(choice);
      choicesContainer.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
      feedbackElement.textContent = "✅ Bonne réponse !";
    } else {
      feedbackElement.textContent = `❌ Mauvaise réponse. C'était : ${correct}`;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1500);
    } else {
      setTimeout(() => {
        choicesContainer.innerHTML = "";
        imgElement.remove();
        feedbackElement.innerHTML = `<h2>Score final : ${score}/${questions.length}</h2>`;
      }, 2000);
    }
  }
  
  loadQuestion();
  
  