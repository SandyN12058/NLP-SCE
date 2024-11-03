hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
    }
    
    function highlightKeyword() {
        const text = document.getElementById("textInput").value;
      const keyword = document.getElementById("keywordInput").value;
      const output = document.getElementById("output");
      
      if (!text || !keyword) {
          alert("Please enter both text and keyword.");
          return;
        }
        
        // Create a regular expression with global and case-insensitive flags
        const regex = new RegExp(`(${keyword})`, 'gi');
        const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
        
        // Show the output box and display the highlighted text
        output.innerHTML = highlightedText;
        output.style.display = "block";

        const container = document.getElementById('container');
        container.classList.add('move-up');
    }

    document.getElementById("topic").addEventListener("click", function(event) {
        event.preventDefault();
        alert("39. Text Search and Highlight\n\nDescription: Search for a keyword in a text and highlight its occurrences.");
    });

    document.getElementById("about").addEventListener("click", function(event) {
        const message = `Name           : Sandeep Shrikant Naduvinmani\nRoll No.        : 421046\nGR No.         : 22110767\nDivision        : BTech-A\nDepartment : Computer Engineering`;

        event.preventDefault();
        alert(message);
    });
