import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import { StatusProvider } from './StatusContext'; // Import the StatusProvider component
import StatusBar from './StatusBar'; // Import the StatusBar component

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <StatusProvider> {/* Wrap your application in the StatusProvider */}
          <IonSplitPane contentId="main">
            <Menu />
            <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 9999 }}> {/* Inline styles */}
              <StatusBar /> {/* Include the StatusBar */}
            </div>
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/folder/Inbox" />
              </Route>
              <Route path="/folder/:name" exact={true}>
                <Page />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </StatusProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
