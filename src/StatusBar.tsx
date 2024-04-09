import { useStatus } from './StatusContext'; // Import the useStatus hook
import { IonToolbar, IonTitle, IonButton } from '@ionic/react';

const StatusBar: React.FC = () => {
  const { status, setStatus } = useStatus(); // Get status and setStatus from the context

  return (
    <IonToolbar color="primary" style={{ textAlign: 'center' }}> {/* Inline styles */}
      <IonTitle>Your current status is: {status}</IonTitle>
      <IonButton onClick={() => setStatus('Available')}>Available</IonButton>
      <IonButton onClick={() => setStatus('In Mission')}>In Mission</IonButton>
      <IonButton onClick={() => setStatus('Occupied')}>Occupied</IonButton>
    </IonToolbar>
  );
};

export default StatusBar;