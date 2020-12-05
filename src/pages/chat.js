import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Icons
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';

const DynamicAppTabNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/app-tab'),
  { ssr: false }
);

const DynamicLabelBottomNavigationWithNoSSR = dynamic(
  () => import('app/UI/components/label-bottom-navigation'),
  { ssr: false }
);

const mensagensBot = [
  { message: 'Olá, no que posso ajudar?', type: 'BOT' },
  { message: 'Lembre que todo ponto critico precisa de uma foto', type: 'BOT' },
  { message: 'Por nada, precisando é só chamar', type: 'BOT' },
  { message: 'Olá, no que posso ajudar?', type: 'BOT' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [valueText, setValueText] = useState('');
  const [indexBot, setIndexBot] = useState(0);

  const sendMessage = () => {
    let messageAux = messages.slice();
    messageAux.push({ message: valueText, type: 'HUMAN' });
    setMessages(messageAux);
    setValueText('');

    setTimeout(() => {
      messageAux.push(mensagensBot[indexBot]);
      const aux = indexBot + 1;
      setMessages(messageAux);
      setIndexBot(aux);
    }, 2000);
  };

  return (
    <>
      <DynamicAppTabNavigationWithNoSSR title="Chat" />

      <div
        className="absolute flex flex-col bg-gray-200 p-4 chat-services overflow-auto"
        style={{ top: '67px', bottom: '153px', right: '0', left: '0' }}
      >
        {messages.map((item) =>
          item.type === 'BOT' ? (
            <div className="chat bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3">
              {item.message}
            </div>
          ) : (
            <div
              style={{ backgroundColor: '#4B78BA' }}
              className="message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3"
            >
              {item.message}
            </div>
          )
        )}
      </div>

      <div
        className="fixed flex w-full bg-white p-4"
        style={{ bottom: '75px' }}
      >
        <div
          className="rotate-12 flex flex-col h-8 w-8 p-3 text-white rounded-full items-center justify-center"
          style={{ backgroundColor: '#686868' }}
        >
          <AttachmentOutlinedIcon style={{ fontSize: '18px' }} />
        </div>
        <input
          type="text"
          name="message"
          placeholder="Digite sua mensagem"
          style={{ borderColor: '#4B78BA' }}
          className="pl-4 pr-16 py-2 ml-2 border focus:outline-none w-full"
          value={valueText}
          onChange={(e) => {
            setValueText(e.target.value);
          }}
        />
        <button
          style={{ text: '#4B78BA' }}
          className="absolute right-0 bottom-0 mr-8 mb-6 "
          onClick={() => sendMessage()}
        >
          Enviar
        </button>
      </div>

      <DynamicLabelBottomNavigationWithNoSSR selected="chat" />
    </>
  );
}
