import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const offlineListenerHandle = () => setStatus('offline');
    const onlineListenerHandle = () => setStatus('online');

    window.addEventListener('offline', offlineListenerHandle);
    window.addEventListener('online', onlineListenerHandle);
    return () => {
      window.removeEventListener('offline', offlineListenerHandle);
      window.removeEventListener('online', onlineListenerHandle);
    };
  });
  return (
    <div className={`status ${status === 'offline' && 'status_offline'}`}>
      {status}
    </div>
  );
};
export default ConnectionStatus;
