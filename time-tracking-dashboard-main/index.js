// Add this JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const timeButtons = document.querySelectorAll('.over');
  const activityCards = document.querySelectorAll('.activity');
  let currentTimeframe = 'weekly';

  // Load initial data
  fetchData();

  async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      updateCards(data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  function updateCards(data) {
    activityCards.forEach(card => {
      const title = card.querySelector('.top-section').firstChild.textContent.trim();
      const activityData = data.find(item => item.title === title);
      
      const hoursElement = card.querySelector('.hours');
      const lastWeekElement = card.querySelector('.last-week');
      
      if (activityData) {
        hoursElement.textContent = `${activityData.timeframes[currentTimeframe].current}hrs`;
        lastWeekElement.textContent = `Last Week - ${activityData.timeframes[currentTimeframe].previous}hrs`;
      }
    });
  }

  // Time selection functionality
  timeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      timeButtons.forEach(btn => btn.classList.remove('selection'));
      
      // Add active class to clicked button
      this.classList.add('selection');
      
      // Update current timeframe
      currentTimeframe = this.classList.contains('daily') ? 'daily' :
                        this.classList.contains('weekly') ? 'weekly' :
                        'monthly';
      
      // Reload data with new timeframe
      fetchData();
    });
  });
});