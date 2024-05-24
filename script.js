const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === '') return;
  appendMessage('user', userMessage);
  // Aquí llamarías a tu modelo de chatbot para obtener la respuesta
  // Por ejemplo, podrías usar TensorFlow.js para un modelo de IA pre-entrenado
  const botReply = '¡Hola! Soy un chatbot animado. ¿En qué puedo ayudarte?'; // Respuesta simulada
  appendMessage('bot', botReply);
  userInput.value = '';
}

function appendMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
