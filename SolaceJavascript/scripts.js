document.querySelector('.chat-button').addEventListener('click', function() {
  let existingChatbox = document.querySelector('.chatbox');
  
  if (existingChatbox) {
    existingChatbox.style.display = existingChatbox.style.display === 'none' ? 'block' : 'none';
    return; 
  }

  // Create chatbox if it doesn't exist
  let chatbox = document.createElement('div');
  chatbox.classList.add('chatbox');
  chatbox.innerHTML = `
    <div class="chat-header">
      Chatbot
      <span class="close-chat">&times;</span>
    </div>
    <div class="chat-body">
      <div class="chat-message">Hello, this is an automatic chatbot, how can I help you?</div>
    </div>
    <input type="text" class="chat-input" placeholder="Type a message...">
  `;
  document.body.appendChild(chatbox);

  // Close chatbox on close icon click
  chatbox.querySelector('.close-chat').addEventListener('click', function() {
    chatbox.style.display = 'none'; // Close the chatbox
  });

  // Handle user input and bot response
  document.querySelector('.chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      let userMessage = e.target.value;

      if (userMessage.trim() !== '') {
        // Append user's message
        let userChatMessage = document.createElement('div');
        userChatMessage.classList.add('chat-message');
        userChatMessage.innerText = userMessage;
        document.querySelector('.chat-body').appendChild(userChatMessage);

        // Append bot's response
        let botMessage = document.createElement('div');
        botMessage.classList.add('chat-message');
        botMessage.innerText = "Sorry, I don't know the reply.";
        document.querySelector('.chat-body').appendChild(botMessage);

        // Clear input field
        e.target.value = '';

        // Scroll to the bottom of the chat body
        document.querySelector('.chat-body').scrollTop = document.querySelector('.chat-body').scrollHeight;
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  /* 
  Adding functionality to the expand button for the 
  information section. This will allow users to expand 
  and collapse additional content.
  */
  const expandButton = document.querySelector('.expand-button');
  const extraContent = document.querySelector('.extra-content');
  const lowkeyText = document.querySelector('.lowkey-text');

  // Toggle extra content visibility on button click
  expandButton.addEventListener('click', () => {
    if (extraContent.style.display === "inline") {
      extraContent.style.display = "none";
      lowkeyText.classList.remove('expanded'); // Hide extra lines
      expandButton.textContent = "Expand"; // Update button text
    } else {
      extraContent.style.display = "inline"; // Show hidden content
      lowkeyText.classList.add('expanded'); // Ensure all text is visible
      expandButton.textContent = "Collapse"; // Update button text
    }
  });

  /*
  Adding hover effect to the call-to-action button,
  which will make the video monochromatic 
  when the user hovers over the button.
  */
  const ctaButton = document.querySelector('.cta-button');
  const video = document.querySelector('.video');

  // Apply grayscale filter to the video when mouse is over the button
  ctaButton.addEventListener('mouseover', () => {
    video.style.filter = 'grayscale(100%)'; // Make video grayscale
    ctaButton.style.opacity = '1.0'; // Increase button opacity
  });

  // Remove grayscale filter from video when mouse leaves the button
  ctaButton.addEventListener('mouseout', () => {
    video.style.filter = 'none'; // Remove grayscale filter
    ctaButton.style.opacity = '0.7'; // Decrease button opacity
  });

  /*
  Placeholder for chat bot functionality.
  Showing an alert on click for now. This should 
  be replaced with actual chat bot integration.
  */
  const chatBotButton = document.querySelector('.floating-chatbot');
  chatBotButton.addEventListener('click', () => {
    alert('Chat Bot Clicked! (Integrate actual chat bot here)'); // Placeholder alert
  });

  /*
  Add basic search functionality.
  */
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `https://www.google.com/search?q=site:yourwebsite.com+${encodeURIComponent(query)}`;
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });
});
