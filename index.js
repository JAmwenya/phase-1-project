document.addEventListener('DOMContentLoaded',()=> {
    // Add mouseover event listener to the buttons
    const buttons = document.querySelectorAll('.card button');
    document.addEventListener('DOMContentLoaded', () => {
        // Select all buttons inside cards
        const buttons = document.querySelectorAll('.card button');
        
        // Loop through each button and add a mouseover event listener
        buttons.forEach((button, index) => {
          button.addEventListener('mouseover', () => {
            // Select the corresponding card
            const card = document.getElementById(`card${index + 1}`);
            // Set the transition and change the opacity
            card.style.transition = 'opacity 1s';
            card.style.opacity = 0.5;
          });
      
          // Optionally add a mouseout event to revert the opacity change
          button.addEventListener('mouseout', () => {
            const card = document.getElementById(`card${index + 1}`);
            card.style.transition = 'opacity 1s';
            card.style.opacity = 1;
          });
        });
      });
      
//     document.getElementById('button').addEventListener('mouseover',()=>{
//     const card = document.getElementById('card');
//     //change the opacity of the card when you hover over the button
//     card.style.transition = 'opacity 1s';
//     card.style.opacity = 0.1;
//     });
//   });