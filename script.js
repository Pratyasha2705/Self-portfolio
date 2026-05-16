const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const formData = {
    name: form[0].value,
    email: form[1].value,
    message: form[2].value
  };

  try {

    const response = await fetch("https://self-portfolio-02co.onrender.com/send", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(formData)

    });

    const result = await response.text();

    console.log(result);

    if (response.ok) {

      alert("Message Sent ✅");

      form.reset();

    } else {

      alert("Failed: " + result);

    }

  } catch (error) {

    console.log(error);

    alert("Message failed");

  }

});