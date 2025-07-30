const quizData = {
  // you can edit everything between "" 
  title: "Which Video Game Character Are You?", 
  results: {
    "Mario": {
      name: "Mario",
      description: "You're cheerful, brave, and always ready for an adventure!",
      image: "🍄"
    },
    "Link": {
      name: "Link",
      description: "You're calm, courageous, and always protect others.",
      image: "🗡️"
    },
    "Kirby": {
      name: "Kirby",
      description: "You're cute, quiet, but surprisingly powerful!",
      image: "🌸"
    }
  },
  questions: [
    {
      question: "What's your favorite weapon?",
      answers: [
        { text: "Fireball", type: "Mario" },
        { text: "Sword", type: "Link" },
        { text: "Vacuum power", type: "Kirby" }
      ]
    },
    {
      question: "What do you enjoy doing?",
      answers: [
        { text: "Jumping and running", type: "Mario" },
        { text: "Training silently", type: "Link" },
        { text: "Relaxing and eating", type: "Kirby" }
      ]
    },
    {
      question: "What is your weakness?",
      answers: [
        { text: "Time pressure", type: "Mario" },
        { text: "Not speaking up", type: "Link" },
        { text: "Too cute to be taken seriously", type: "Kirby" }
      ]
    }
  ]
};
