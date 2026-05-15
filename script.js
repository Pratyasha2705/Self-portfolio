const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const formData = {
    name: form[0].value,
    email: form[1].value,
    message: form[2].value
  };

  try {

    const response = await fetch("http://localhost:3000/send", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(formData)

    });

    const result = await response.text();

    alert(result);

    form.reset();

  } catch (error) {

    alert("Message failed");

    console.log(error);

  }

});