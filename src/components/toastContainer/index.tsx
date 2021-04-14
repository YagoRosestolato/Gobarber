import React from 'react';
import { ToastMessage } from '../../hooks/toastContext'
import { Container } from './styles';
import Toast from './toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
    <Container>
      {messages.map ((message)=> (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );


export default ToastContainer;