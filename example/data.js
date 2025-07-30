const quizData = {
  title: "Which Pet Suits You Best?",
  results: {
    "Dog": {
      name: "Dog",
      description: "Loyal, playful, and energetic — you're a perfect match for a dog!",
      image: "🐶"
    },
    "Cat": {
      name: "Cat",
      description: "Independent, relaxed, and elegant — a cat fits your vibe!",
      image: "🐱"
    },
    "Rabbit": {
      name: "Rabbit",
      description: "Gentle and soft-hearted — a rabbit is your perfect buddy.",
      image: "🐰"
    },
    "Fish": {
      name: "Fish",
      description: "Peaceful and calming — a fish tank is your zen zone.",
      image: "🐠"
    },
    "Bird": {
      name: "Bird",
      description: "Social, talkative, and cheerful — a bird sings your tune!",
      image: "🦜"
    },
    "Hamster": {
      name: "Hamster",
      description: "Cute, playful, and easy-going — a hamster fits your chill style.",
      image: "🐹"
    },
    "Turtle": {
      name: "Turtle",
      description: "Slow and steady — just like your thoughtful, quiet nature.",
      image: "🐢"
    },
    "Reptile": {
      name: "Reptile",
      description: "Cool, unique, and independent — a reptile matches your calm energy.",
      image: "🦎"
    }
  },
  questions: [
    { question: "How much free time do you have daily?", answers: [
      { text: "3+ hours", type: "Dog" },
      { text: "1–2 hours", type: "Cat" },
      { text: "30–60 minutes", type: "Rabbit" },
      { text: "Less than 30 minutes", type: "Fish" }
    ]},
    { question: "What kind of home do you live in?", answers: [
      { text: "Large house with a yard", type: "Dog" },
      { text: "Apartment with space", type: "Cat" },
      { text: "Small apartment", type: "Hamster" },
      { text: "Studio or shared space", type: "Fish" }
    ]},
    { question: "How much noise can you handle?", answers: [
      { text: "Lots! I love sound", type: "Bird" },
      { text: "A bit is fine", type: "Dog" },
      { text: "I prefer it quiet", type: "Cat" },
      { text: "Almost none", type: "Reptile" }
    ]},
    { question: "Do you like to train animals?", answers: [
      { text: "Yes! I enjoy teaching", type: "Dog" },
      { text: "Only a little", type: "Cat" },
      { text: "Not really", type: "Turtle" },
      { text: "Not at all", type: "Fish" }
    ]},
    { question: "Do you want a pet that cuddles?", answers: [
      { text: "Yes, I love hugs", type: "Dog" },
      { text: "Maybe now and then", type: "Rabbit" },
      { text: "Not necessary", type: "Fish" },
      { text: "Nope", type: "Reptile" }
    ]},
    { question: "Are you allergic to fur?", answers: [
      { text: "Yes, badly", type: "Fish" },
      { text: "A little", type: "Reptile" },
      { text: "Nope", type: "Cat" },
      { text: "I don’t know", type: "Turtle" }
    ]},
    { question: "What’s your budget for pet care?", answers: [
      { text: "High — I’ll spend a lot", type: "Dog" },
      { text: "Medium", type: "Cat" },
      { text: "Low", type: "Hamster" },
      { text: "Very low", type: "Fish" }
    ]},
    { question: "Do you want a pet that talks or sings?", answers: [
      { text: "Yes, like a bird!", type: "Bird" },
      { text: "I like barking/meowing", type: "Dog" },
      { text: "No, silence please", type: "Rabbit" },
      { text: "Absolutely silent", type: "Turtle" }
    ]},
    { question: "Do you want a unique pet?", answers: [
      { text: "Yes, something different", type: "Reptile" },
      { text: "Something exotic but quiet", type: "Turtle" },
      { text: "A talking pet", type: "Bird" },
      { text: "A small fluffy friend", type: "Hamster" }
    ]},
    { question: "How often do you travel?", answers: [
      { text: "Rarely", type: "Dog" },
      { text: "Sometimes", type: "Cat" },
      { text: "Often", type: "Fish" },
      { text: "Almost always", type: "Reptile" }
    ]},
        { question: "Do you live with kids?", answers: [
      { text: "Yes, very young ones", type: "Rabbit" },
      { text: "Yes, older kids", type: "Dog" },
      { text: "No, just me", type: "Cat" },
      { text: "Yes, but I want a calm pet", type: "Turtle" }
    ]},
    { question: "Do you like early mornings?", answers: [
      { text: "Yes, I’m up early", type: "Dog" },
      { text: "Not really", type: "Cat" },
      { text: "I wake slowly", type: "Turtle" },
      { text: "I stay up late", type: "Reptile" }
    ]},
    { question: "How much attention do you want to give?", answers: [
      { text: "A lot — I love bonding", type: "Dog" },
      { text: "Some, but I like space", type: "Cat" },
      { text: "Not much, but I’ll care", type: "Fish" },
      { text: "I prefer hands-off pets", type: "Reptile" }
    ]},
    { question: "Do you want a pet that lives long?", answers: [
      { text: "Yes, the longer the better", type: "Turtle" },
      { text: "10–15 years is fine", type: "Dog" },
      { text: "A few years is okay", type: "Hamster" },
      { text: "Doesn’t matter", type: "Rabbit" }
    ]},
    { question: "What climate do you live in?", answers: [
      { text: "Mild or cold", type: "Dog" },
      { text: "Warm and sunny", type: "Reptile" },
      { text: "Indoor climate", type: "Fish" },
      { text: "Mixed seasons", type: "Cat" }
    ]},
    { question: "Do you want a pet that fits in your hand?", answers: [
      { text: "Yes, I love small pets", type: "Hamster" },
      { text: "Not too small", type: "Cat" },
      { text: "Big and huggable", type: "Dog" },
      { text: "Tiny but fragile", type: "Fish" }
    ]},
    { question: "Do you want a social pet?", answers: [
      { text: "Yes, very social", type: "Bird" },
      { text: "Sometimes", type: "Dog" },
      { text: "No, I prefer quiet", type: "Reptile" },
      { text: "Mostly calm", type: "Rabbit" }
    ]},
    { question: "Do you enjoy cleaning up after pets?", answers: [
      { text: "Yes, I don’t mind", type: "Dog" },
      { text: "If it’s quick", type: "Cat" },
      { text: "Very little cleaning", type: "Fish" },
      { text: "Minimal effort please", type: "Turtle" }
    ]},
    { question: "Do you want your pet to sleep with you?", answers: [
      { text: "Yes, cuddles!", type: "Dog" },
      { text: "Maybe near me", type: "Cat" },
      { text: "No, in a cage", type: "Hamster" },
      { text: "No, separate spot", type: "Reptile" }
    ]},
    { question: "Do you want to talk to your pet?", answers: [
      { text: "Yes, like a friend", type: "Bird" },
      { text: "Only basic commands", type: "Dog" },
      { text: "Not really", type: "Fish" },
      { text: "It’s not important", type: "Reptile" }
    ]},
    { question: "What best describes your energy level?", answers: [
      { text: "High and active", type: "Dog" },
      { text: "Medium and balanced", type: "Cat" },
      { text: "Low and calm", type: "Turtle" },
      { text: "Quiet and thoughtful", type: "Reptile" }
    ]},
    { question: "Do you want a pet with personality?", answers: [
      { text: "Yes, full of life", type: "Dog" },
      { text: "Yes, but not too wild", type: "Rabbit" },
      { text: "Quiet personality", type: "Turtle" },
      { text: "Doesn't matter", type: "Fish" }
    ]},
    { question: "Do you want a colorful pet?", answers: [
      { text: "Yes, very colorful", type: "Bird" },
      { text: "A little color", type: "Cat" },
      { text: "Doesn’t matter", type: "Dog" },
      { text: "I like natural tones", type: "Reptile" }
    ]},
    { question: "How much do you care about your pet being 'cool'?", answers: [
      { text: "Very important!", type: "Reptile" },
      { text: "Kind of", type: "Bird" },
      { text: "I care more about love", type: "Dog" },
      { text: "I don’t mind", type: "Fish" }
    ]},
    { question: "How responsible are you?", answers: [
      { text: "Very! I can commit daily", type: "Dog" },
      { text: "Pretty reliable", type: "Cat" },
      { text: "Mostly, with reminders", type: "Rabbit" },
      { text: "I forget things sometimes", type: "Hamster" }
    ]},
    { question: "Do you want your pet to be awake during the day?", answers: [
      { text: "Yes, I’m a day person", type: "Dog" },
      { text: "Night is fine too", type: "Cat" },
      { text: "Doesn’t matter", type: "Fish" },
      { text: "Mostly day is good", type: "Rabbit" }
    ]},
    { question: "How often do you want to interact?", answers: [
      { text: "Several times a day", type: "Dog" },
      { text: "Once or twice a day", type: "Cat" },
      { text: "Occasionally", type: "Turtle" },
      { text: "Barely", type: "Fish" }
    ]},
    { question: "Do you want a low-maintenance pet?", answers: [
      { text: "Yes, very low", type: "Fish" },
      { text: "Somewhat easy", type: "Turtle" },
      { text: "I’m okay with medium care", type: "Cat" },
      { text: "I can handle high care", type: "Dog" }
    ]},
    { question: "How important is exercise with your pet?", answers: [
      { text: "Very important", type: "Dog" },
      { text: "Occasionally fun", type: "Rabbit" },
      { text: "Not really", type: "Hamster" },
      { text: "No exercise", type: "Fish" }
    ]}
  ]
};

