import React, { useState } from "react";
import { Stack, Text, Button, Box, Heading } from "@chakra-ui/react";
import "./App.css";

const questions = [
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the lead singer of the band Coldplay?",
    correct_answer: "Chris Martin",
    incorrect_answers: ["Chris Isaak", "Chris Wallace", "Chris Connelly"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question: "How many zeptometres are inside one femtometre?",
    correct_answer: "1,000,000",
    incorrect_answers: ["10", "1,000,000,000", "1000"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which musician has collaborated with American producer Porter Robinson and released the 2016 song ?",
    correct_answer: "Madeon",
    incorrect_answers: ["Mat Zo", "deadmau5", "Zedd"],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Peru?",
    correct_answer: "Lima",
    incorrect_answers: ["Santiago", "Montevideo.", "Buenos Aires"],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "What was Nickelodeon original name?",
    correct_answer: "Pinwheel",
    incorrect_answers: ["MTVKids", "KidsTV", "Splat!"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the lead singer of Pearl Jam?",
    correct_answer: "Eddie Vedder",
    incorrect_answers: ["Ozzy Osbourne", "Stone Gossard", "Kurt Cobain"],
  },
  {
    category: "Celebrities",
    type: "boolean",
    difficulty: "easy",
    question:
      "Tupac Shakur died due to complications from being stabbed in 1996.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "Which country has the most Trappist breweries?",
    correct_answer: "Belgium",
    incorrect_answers: ["Netherlands", "France", "USA"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which NBA player won Most Valuable Player for the 1999-2000 season?",
    correct_answer: "Shaquille O&#039;Neal",
    incorrect_answers: ["Allen Iverson", "Kobe Bryant", "Paul Pierce"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "medium",
    question: "Who is Manchester United&#039;s top premier league goal scorer?",
    correct_answer: "Wayne Rooney",
    incorrect_answers: ["Sir Bobby Charlton", "Ryan Giggs", "David Beckham"],
  },
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreList, setScoreList] = useState(0);

  function handleButtonAnswer(isCorrect) {
    //añadir puntuación
    if (isCorrect) setScore(score + 1);
    //añadir estilos

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleResetButton(score) {
    setScoreList(score + scoreList);
    setCurrentQuestion(0);
    setScore("");
    setShowScore("");
  }
  return (
    <Stack
      className="app"
      alignItems="center"
      p="20px"
      backgroundColor="#42b5a4"
    >
      {showScore ? (
        <Box
          className="box"
          maxW="sm"
          borderWidth="2px"
          borderRadius="lg"
          p={20}
        >
          <Stack>
            <Heading as="h2" size="md" color="white">
              Your score {score} out of {questions.length}
            </Heading>
          </Stack>
          <Stack pt={3}>
            <Button
              onClick={() => handleResetButton()}
              variant="solid"
              color="#42b5a4"
              size="md"
            >
              Start again
            </Button>
          </Stack>
        </Box>
      ) : (
        <>
          <Box maxW="370px" borderWidth="2px" borderRadius="lg">
            <Box backgroundColor="white" maxW="auto">
              <Box
                backgroundColor="#ffe286"
                color="black"
                fontSize="16px"
                fontWeight="600"
                textAlign="center"
                p={9}
              >
                <Stack display="flex" alignItems="center">
                  <Text
                    w={70}
                    borderRadius="999"
                    color="#dbbe5c"
                    border="1px solid #e6cc78"
                    backgroundColor="white"
                    fontWeight="700"
                  >
                    {currentQuestion + 1}/ {questions.length}
                  </Text>
                </Stack>
                <Text pt={4}>{questions[currentQuestion].question}</Text>
                <Stack mt={4} w="auto" display="flex" alignItems="center">
                  <Text
                    w={250}
                    p={2}
                    borderRadius="999"
                    color="#dbbe5c"
                    border="1px solid #e6cc78"
                    backgroundColor="white"
                    fontWeight="700"
                  >
                    {questions[currentQuestion].category} -
                    {questions[currentQuestion].difficulty}
                  </Text>
                </Stack>
              </Box>
              <Stack p={6}>
                {[
                  ...questions[currentQuestion].incorrect_answers,
                  questions[currentQuestion].correct_answer,
                ]
                  .sort()
                  .map((answer) => (
                    <Stack>
                      <Button
                        maxW="auto"
                        variant="outline"
                        colorScheme="teal"
                        className={
                          questions[currentQuestion].correct_answer === true
                        }
                        color="#42b5a4"
                        onClick={() =>
                          handleButtonAnswer(
                            answer === questions[currentQuestion].correct_answer
                          )
                        }
                      >
                        {answer}
                      </Button>
                    </Stack>
                  ))}
              </Stack>
            </Box>
          </Box>
        </>
      )}
    </Stack>
  );
}

export default App;
