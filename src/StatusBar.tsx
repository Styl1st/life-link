import { useStatus } from './StatusContext'; // Import the useStatus hook
import { IonToolbar, IonTitle, IonButton, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline, alertCircleOutline, closeCircleOutline } from 'ionicons/icons'; // Import the icons
import { useState } from 'react'; // Import the useState hook

const StatusBar: React.FC = () => {
  const { status, setStatus } = useStatus(); // Get status and setStatus from the context
  const [activeButton, setActiveButton] = useState(''); // State to track the active button

  const getToolbarColor = () => {
    switch (activeButton) {
      case 'Available':
        return 'success';
      case 'In Mission':
        return 'warning';
      case 'Occupied':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <IonToolbar color={getToolbarColor()} style={{ textAlign: 'center' }}> {/* Inline styles */}
      <IonTitle>Your current status is: {status}</IonTitle>
      <IonButton 
        color={activeButton === 'Available' ? 'success' : 'medium'} 
        onClick={() => { setStatus('Available'); setActiveButton('Available'); }}
      >
        <IonIcon icon={checkmarkCircleOutline} /> {/* Add the icon */}
        Available
      </IonButton> {/* Green button if active, default color otherwise */}
      <IonButton 
        color={activeButton === 'In Mission' ? 'warning' : 'medium'} 
        onClick={() => { setStatus('In Mission'); setActiveButton('In Mission'); }}
      >
        <IonIcon icon={alertCircleOutline} /> {/* Add the icon */}
        In Mission
      </IonButton> {/* Yellow button if active, default color otherwise */}
      <IonButton 
        color={activeButton === 'Occupied' ? 'danger' : 'medium'} 
        onClick={() => { setStatus('Occupied'); setActiveButton('Occupied'); }}
      >
        <IonIcon icon={closeCircleOutline} /> {/* Add the icon */}
        Occupied
      </IonButton> {/* Red button if active, default color otherwise */}
    </IonToolbar>
  );
};

export default StatusBar;