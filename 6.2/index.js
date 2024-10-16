let express = require("express");
let app = express();

let intimateQuestions = {
    "data" :  [
        {
          "question": "What do you like to do for fun?",
          "category": "Hobbies",
          "depth": "Surface",
          "level": 1
        },
        {
          "question": "What’s your favorite movie or book?",
          "category": "Entertainment",
          "depth": "Surface",
          "level": 2
        },
        {
          "question": "Where did you grow up?",
          "category": "Background",
          "depth": "Surface",
          "level": 3
        },
        {
          "question": "Do you prefer city life or country life?",
          "category": "Preferences",
          "depth": "Surface",
          "level": 4
        },
        {
          "question": "What’s a childhood memory that shaped who you are today?",
          "category": "Personal Growth",
          "depth": "Intimate",
          "level": 5
        },
        {
          "question": "What’s something you’ve always wanted to try but haven’t?",
          "category": "Desires",
          "depth": "Intimate",
          "level": 6
        },
        {
          "question": "What do you value most in a friendship or relationship?",
          "category": "Relationships",
          "depth": "Intimate",
          "level": 7
        },
        {
          "question": "What are your biggest dreams or goals in life?",
          "category": "Aspirations",
          "depth": "Intimate",
          "level": 8
        },
        {
          "question": "What’s something that turns you on emotionally or mentally?",
          "category": "Emotional Intimacy",
          "depth": "Sexual",
          "level": 9
        },
        {
          "question": "How do you like to express physical affection?",
          "category": "Physical Intimacy",
          "depth": "Sexual",
          "level": 10
        },
        {
          "question": "What’s something that you’ve always been curious about sexually?",
          "category": "Curiosity",
          "depth": "Sexual",
          "level": 11
        },
        {
          "question": "What role does physical intimacy play in a relationship for you?",
          "category": "Sexual Connection",
          "depth": "Sexual",
          "level": 12
        }
      ]
}

app.use('/', express.static('public'));

app.get('/questions', (req,res)=>{
    res.json(intimateQuestions);
})

app.get('/questions/:level', (req, res)=> {
    console.log(req.params.level);
    let user_level = req.params.level;
    let user_obj;
    for (let i=0; i<intimateQuestions.data.length; i++){
        if (user_level == intimateQuestions.data[i].level){
            user_obj = intimateQuestions.data[i];
        }}
    console.log(user_obj);
    if (user_obj){
        res.json(user_obj);
    } else {
        res.json({status: "only works for levels 1-12"})
    }
    // res.send("thank you");
})

app.listen(3000, ()=>{
    console.log("listening @port3000");
})