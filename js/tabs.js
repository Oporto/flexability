document.querySelectorAll("#nav li").forEach(function(navEl) {
    navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
  });
  
  function toggleTab(selectedNav, targetId) {
    var navEls = document.querySelectorAll("#nav li");
  
    navEls.forEach(function(navEl) {
      if (navEl.id == selectedNav) {
        navEl.classList.add("is-active");
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
        }
      }
    });
  
    var tabs = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(function(tab) {
      if (tab.id == targetId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }

var froms =["Habitat for Humanity", "National Geographic", "Worcester Health Department", "Massachussets Health & Hospital Association", "Businesses of Westford-MA"]
var pets =["Isabel","Steve", "Jenny", "Jack", "Meagan"];

function showMessage(msg){
  let from = froms[parseInt(msg)-1];
  $('#message-pane').removeClass('is-hidden');
  $('.card').removeClass('active');
  $('#card-' + msg).addClass('active');
  $('.message .address .name').text(from);
  $('.message .address .email').text(faker.internet.email());
  var msg_body = 
    '<p>' +
    window.faker.lorem.paragraphs(faker.random.number(40)) +
    '</p>';
  $('.message .content').html(msg_body);
}

function showMessage2(msg){
  let from = pets[parseInt(msg)-1];
  $('#message-pane2').removeClass('is-hidden');
  $('.card').removeClass('active');
  $('#card2-' + msg).addClass('active');
  $('.message .address .name').text(from);
  $('.message .address .email').text(faker.internet.email());
  var msg_body = 
    '<p>' +
    window.faker.lorem.paragraphs(faker.random.number(40)) +
    '</p>';
  $('.message .content').html(msg_body);
}

function searched2(){
  $('#card2-1').addClass('is-hidden');
  $('#card2-2').addClass('is-hidden');
  $('#card2-3').removeClass('is-hidden');
  $('#card2-5').removeClass('is-hidden');
  $('#searchS2').text("Showing 3 results for 'Marketing'");
}

function searched(){
  $('#card-1').addClass('is-hidden');
  $('#card-2').addClass('is-hidden');
  $('#card-3').removeClass('is-hidden');
  $('#card-5').removeClass('is-hidden');
  $('#searchS').text("Showing 3 results for 'Healthcare'");
}

function searchReset(){
  $('#card-3').addClass('is-hidden');
  $('#card-5').addClass('is-hidden');
  $('#card-1').removeClass('is-hidden');
  $('#card-2').removeClass('is-hidden');
  $('#searchS2').text("Showing recommended people based on skills");
  $('#card2-3').addClass('is-hidden');
  $('#card2-5').addClass('is-hidden');
  $('#card2-1').removeClass('is-hidden');
  $('#card2-2').removeClass('is-hidden');
  $('#searchS').text("Showing recommended projects based on skills and interests");
}
