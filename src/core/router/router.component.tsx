import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.hotelCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createHotel}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editHotel}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
