import React from 'react';
import { PROMPT_PREFIX, PROMPT_SUFFIX } from '../config';

class Chat extends React.Component {
  // Existing code...

  renderUserPrompt(prompt) {
    // Remove the PROMPT_PREFIX and PROMPT_SUFFIX from the user prompt
    const displayedPrompt = prompt.replace(PROMPT_PREFIX, '').replace(PROMPT_SUFFIX, '');

    // Existing code to render the user prompt...
  }

  // Existing code...
}

export default Chat;
