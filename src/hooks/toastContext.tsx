import React, { createContext, useContext, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/toastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}


interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description}: Omit<ToastMessage, 'id'>) => { 
    const id = uuid();
    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessage((state) => [...state, toast]);
  }, []);
  const removeToast = useCallback((id: string) =>{
    setMessage((state) => state.filter((message) => message.id !== id) )
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast (): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }

  return context;
} 

export { ToastProvider, useToast }