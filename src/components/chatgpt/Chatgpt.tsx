import { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

interface MessageModel {
  message: string;
  sentTime: string;
  sender: string;
}

const Chatgpt = () => {
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const updateMessages = (newMessage: MessageModel) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSendRequest = async (message: string) => {
    const newMessage: MessageModel = {
      message,
      sentTime: new Date().toISOString(),
      sender: "user",
    };

    updateMessages(newMessage);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);

      if (
        response &&
        response.choices &&
        response.choices[0]?.message?.content
      ) {
        const content = response.choices[0].message.content;
        const chatGPTResponse: MessageModel = {
          message: content,
          sentTime: new Date().toISOString(),
          sender: "ChatGPT",
        };
        updateMessages(chatGPTResponse);
      } else {
        throw new Error("Invalid response from OpenAI API");
      }
    } catch (error) {
      console.error("Error processing message:", error);
      const errorMessage: MessageModel = {
        message: "Sorry, something went wrong. Please try again later.",
        sentTime: new Date().toISOString(),
        sender: "ChatGPT",
      };
      updateMessages(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    // Add any necessary initialization or side effects here
  }, []); // Empty dependency array to run once on component mount

  async function processMessageToChatGPT(chatMessages: MessageModel[]) {
    try {
      const apiMessages = chatMessages.map((messageObject) => {
        const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
        return { role, content: messageObject.message };
      });

      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "I'm a Student using ChatGPT for learning",
          },
          ...apiMessages,
        ],
      };

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error processing message:", error);
      throw new Error("Invalid response from OpenAI API");
    }
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Send a Message"
              onSend={handleSendRequest}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chatgpt;
