import { lazy } from 'react';
export * from './Login/Login';
const Users = lazy(() => import('./Users/Users'));
const ErrorPage = lazy(() => import('./ErrorPage/ErrorPage'));
const TrainingTypes = lazy(() => import('./TrainingTypes/TrainingTypes'));
const Exercises = lazy(() => import('./Exercises/Exercises'));
const CreateExercise = lazy(() => import('./CreateExercise/CreateExercise'));

export { Users, ErrorPage, TrainingTypes, Exercises, CreateExercise };
