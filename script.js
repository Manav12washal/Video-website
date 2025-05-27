// Alert button functionality
document.getElementById("alertButton").addEventListener("click", function() {
    alert("You clicked the button!");
    gtag('event', 'button_click', { 
        'event_category': 'Interaction', 
        'event_label': 'Clicked Alert Button' 
    });
});

// Form submission functionality
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        gtag('event', 'form_submission', { 
            'event_category': 'User Action', 
            'event_label': 'Newsletter Signup' 
        });
        alert(`Thank you, ${name}, for subscribing!`);
    } else {
        alert("Please fill in all required fields.");
    }
});

// File upload functionality (Added GA tracking)
document.getElementById("fileInput").addEventListener("change", function() {
    let file = this.files[0];
    if (file) {
        document.getElementById("fileInfo").textContent = `Uploaded: ${file.name} (${file.size} bytes)`;
        
        // ✅ Send event to Google Analytics
        gtag('event', 'file_upload', { 
            'event_category': 'User Action', 
            'event_label': `Uploaded File: ${file.name}`,
            'file_size': file.size 
        });

        console.log(`File uploaded: ${file.name}`);
    }
});

// ✅ Debugging video events (Added console logs)
const video = document.getElementById("myVideo");

video.addEventListener("play", () => {
    console.log("Video played event triggered");
    gtag('event', 'video_play', { 
        'event_category': 'Media', 
        'event_label': 'User Started Video',
        'user_type': 'Returning Visitor'  
    });
});

video.addEventListener("pause", () => {
    console.log("Video paused event triggered");
    gtag('event', 'video_pause', { 
        'event_category': 'Media', 
        'event_label': 'User Paused Video',
        'user_type': 'Returning Visitor'  
    });
});

video.addEventListener("ended", () => {
    console.log("Video completed event triggered");
    gtag('event', 'video_complete', { 
        'event_category': 'Media', 
        'event_label': 'User Finished Watching Video',
        'user_type': 'Returning Visitor'  
    });
});
