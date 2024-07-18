import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

function createBroadcastChannel<T>(key: string, onStateChange: (state: T) => void): BroadcastChannel {
  const channel = new BroadcastChannel(key);

  channel.onmessage = (event) => {
    onStateChange(event.data);
  };

  return channel;
}

export function useSyncState<T>(initialValue: T, channelKey: string): [T, Dispatch<SetStateAction<T>>] {
  const [internalState, setInternalState] = useState<T>(initialValue);
  const broadcastChannel = useRef(createBroadcastChannel(channelKey, setInternalState));

  useEffect(() => {
    broadcastChannel.current.postMessage(internalState);
  }, [internalState]);

  useEffect(() => {
    () => {
      broadcastChannel.current.close();
    };
  }, []);

  const setState = (newValue: T | ((prevState: T) => T)) => {
    const value = newValue instanceof Function ? newValue(internalState) : newValue;
    broadcastChannel.current.postMessage(value);
    setInternalState(value);
  };

  return [internalState, setState];
}
