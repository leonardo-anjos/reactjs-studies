import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScreenStreamsList from './Streams/List';
import ScreenStreamsShow from './Streams/Show';
import ScreenStreamsNew from './Streams/New';
import ScreenStreamsEdit from './Streams/Edit';
import ScreenStreamsDelete from './Streams/Delete';
import ScreenHeader from './Header/Header';

const Root = () => {
  return(
    <div className="ui container">
      <BrowserRouter>
          <ScreenHeader />
          <Route path="/" exact component={ScreenStreamsList} />
          <Route path="/streams/show" component={ScreenStreamsShow} />
          <Route path="/streams/new" component={ScreenStreamsNew} />
          <Route path="/streams/edit" component={ScreenStreamsEdit} />
          <Route path="/streams/delete" component={ScreenStreamsDelete} />
      </BrowserRouter>
    </div>
  );
};

export default Root;