import {
  CreateExercise,
  ErrorPage,
  Exercises,
  Login,
  TrainingTypes,
  Users,
  Video,
} from 'pages/index';
import { NotFound } from 'pages/NotFound/NotFound';
import { createHashRouter } from 'react-router-dom';
import { ERoutes } from 'shared/enums';
import { PrivateRoute } from 'shared/index';
import { Layout } from 'widgets/index';

export const withPrivate = (Component: React.ComponentType) => {
  const Wrapped = () => <PrivateRoute component={<Component />} />;
  Wrapped.displayName = `WithPrivate(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped;
};

export const routes = createHashRouter([
  {
    path: ERoutes.login,
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: ERoutes.home,
    element: withPrivate(Layout)(),
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Users />,
        index: true,
      },
      {
        path: ERoutes.training_type,
        element: <TrainingTypes />,
      },
      {
        path: ERoutes.exercises,
        element: <Exercises />,
      },
      {
        path: ERoutes.exercises_create,
        element: <CreateExercise />,
      },
      {
        path: ERoutes.exercises_edit,
        element: <CreateExercise />,
      },
      {
        path: ERoutes.video,
        element: <Video />,
      },
    ],
  },
]);
