import React from "react";
import PageLoad from '../javascript/components/PageLoad';
import Game from '../javascript/components/game/Game';

//ROUTES 
export const allRoutes = [
  { path: '/', exact: true, name: "/", component: PageLoad },
  { path: '/newgame', exact: true, name: "newgame", component: Game }
];
