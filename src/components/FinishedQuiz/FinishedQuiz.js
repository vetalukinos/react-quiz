import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <string>1. </string>
                    How are you?
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <string>2. </string>
                    How are you?
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
};

export default FinishedQuiz;