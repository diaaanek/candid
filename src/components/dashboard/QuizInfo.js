import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class QuizInfo extends Component {


  render() {
    const { quiz, onBack, onPress, logout } = this.props;
    return (
      <div>


        {/* <h1>{quiz.name}</h1> */}
        <div style={{ margin: '80px 3% 3% 3%' }}>

          {quiz.subQuiz.map((subQuiz, index) => {
            return (

              <Card
                // className={classes.card}
                style={{ maxWidth: 345, display: 'inline-block', margin: '1%' }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // className={classes.media}
                    style={{ objectFit: 'cover' }}
                    height="140"
                    image={quiz.image}
                    title={subQuiz.name}
                  />

                  {subQuiz.score ?
                    <CardContent>
                    <h1 gutterBottom variant="headline" component="h1" style={{ textAlign: 'left', fontFamily: "Quicksand"}}>
                        {subQuiz.name}
                      </h1>

                      <div variant="caption" style={{ textAlign: 'left', fontSize: '13px', fontFamily: "Quicksand" }}>
                        You have attempted this Quiz.
                      </div>
                      <br />
                      <div variant="body2" style={{ textAlign: 'left' }}>
                        Percentage: {subQuiz.score} %
                        <br />
                        Attempted Date: {subQuiz.attemptDate}
                        <br />
                        Attempted Time: {subQuiz.attemptTime}
                      </div>

                    </CardContent>
                    :
                    <CardContent>
                      <h1 gutterBottom variant="headline" component="h1" style={{ textAlign: 'left', fontFamily: "Quicksand"}}>
                        {subQuiz.name}
                      </h1>

                      <div variant="caption" style={{ textAlign: 'left', fontSize: '13px', fontFamily: "Quicksand"  }}>
                        This Quiz is based on the following criteria:
                      </div>
                      <br />
                      <div variant="body2" style={{ textAlign: 'left', fontFamily: "Quicksand" }}>
                        Total Questions: {subQuiz.questions}
                        <br />
                        Total Time: {subQuiz.time}
                        <br />
                        Passing Score: 60 %
                      </div>
                    </CardContent>}

                </CardActionArea>

                <CardActions>
                  <button onClick={onBack} size="small" color="secondary">
                    back
                </button>
                  {!subQuiz.score ?
                      <button onClick={() => onPress(index)} size="small" color="primary">
                          start
                    </button> : null}

                </CardActions>

              </Card>
            )
          })}
        </div>
      </div>
    )
  }

}

export default QuizInfo;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
