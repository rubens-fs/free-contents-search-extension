document.addEventListener("DOMContentLoaded", function() {
  // JS will only run after the HTML is loaded.
  const switchBtn = document.querySelector('.switch input');
  const title = document.querySelector('#title');

  function swap() {
    if (this.checked) {
      title.textContent = 'Free Videos Search';
      document.querySelector('.options-videos').style.display = 'block';
      document.querySelector('.options-photos').style.display = 'none';
    } else {
      title.textContent = 'Free Images Search';
      document.querySelector('.options-photos').style.display = 'block';
      document.querySelector('.options-videos').style.display = 'none';
    }
  };

  let selectedOption = null;

  function chosenOption(option) {
    // Uncheck the previous option
    if (selectedOption) {
      document.getElementById(selectedOption + '-search').checked = false;
    }
    // Mark the new option
    document.getElementById(option + '-search').checked = true;
    selectedOption = option;
  }

  let options = document.querySelectorAll('.search-option');
  
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
      chosenOption(this.id.split('-')[0]);
    });
  }

  const searchButton = document.querySelector("#btn");

  // If you want to add more websites for search, besides adding them below and in the HTML file, pay attention to the total size of the extension (CSS)
  function search() {
    let searchInput = document.querySelector('#search-bar');
    if (!searchInput.value) {
      return alert('Please make sure you have an option selected and/or a search term.');
    }
    switch (selectedOption) {
      /* Photos section */
      case 'unsplash':
          window.open (
              'https://unsplash.com/s/photos/' + searchInput.value, '_blank'
          );
          break;
      case 'pexels':
          window.open (
              'https://www.pexels.com/search/' + searchInput.value, '_blank'
          );
          break;
      case 'pixabay':
          window.open (
              'https://pixabay.com/images/search/' + searchInput.value, '_blank'
          );
          break;
      case 'stocksnap':
          window.open (
              'https://stocksnap.io/search/' + searchInput.value, '_blank'
          );
          break;
      case 'freeimages':
          window.open (
              'https://www.freeimages.com/search/' + searchInput.value, '_blank'
          );
          break;
      case 'negativespace':
          window.open (
              'https://negativespace.co/?s=' + searchInput.value, '_blank'
          );
          break;
      /* Videos section */
      case 'videvo':
          window.open (
              'https://www.videvo.net/search/' + searchInput.value, '_blank'
          );
          break;
      case 'pexelsVideos':
          window.open (
              'https://www.pexels.com/search/videos/' + searchInput.value, '_blank'
          );
          break;
      case 'pixabayVideos':
          window.open (
              'https://pixabay.com/videos/search/' + searchInput.value, '_blank'
          );
          break;
      case 'mazwai':
          window.open (
              'https://mazwai.com/stock-video-footage/' + searchInput.value, '_blank'
          );
          break;
      case 'coverr':
          window.open (
              'https://coverr.co/s?q=' + searchInput.value, '_blank'
          );
          break;
      case 'videezy':
          window.open (
              'https://www.videezy.com/free-video/' + searchInput.value, '_blank'
          );
          break;
      default:
          alert('Please select a search option!');
    }
  }

  // Active the function when ENTER is pressed
  document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      let btn_enter = document.querySelector("#btn");
      btn_enter.click();
    }
  });

  switchBtn.addEventListener("change", swap);
  searchButton.addEventListener("click", search);
});
