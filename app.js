const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mentorRouter = require('./routes/mentors');
const courseRouter = require('./routes/courses');
const chapterRouter = require('./routes/chapters');
const reviewRouter = require('./routes/reviews');
const lessonRouter = require('./routes/lessons');
const imgCourseRouter = require('./routes/imgcourses');
const myCourseRouter = require('./routes/mycourses');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mentors', mentorRouter);
app.use('/courses', courseRouter);
app.use('/chapters', chapterRouter);
app.use('/reviews', reviewRouter);
app.use('/lessons', lessonRouter);
app.use('/imgcourses', imgCourseRouter);
app.use('/mycourses', myCourseRouter);

module.exports = app;
