chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "autofill") {
      autofillForm();
    }
  });
  
  function autofillForm() {
    const userData = {
      name: "Arvind",
      email: "Arvind@example.com",
      phone: "9876543210",
      skills: "JavaScript, HTML, CSS, Chrome Extensions"
    };
  
    const inputs = document.querySelectorAll("input, textarea");
  
    inputs.forEach((field) => {
      const placeholder = field.placeholder?.toLowerCase() || "";
      const nameAttr = field.name?.toLowerCase() || "";
      const idAttr = field.id?.toLowerCase() || "";
  
      if (placeholder.includes("name") || nameAttr.includes("name") || idAttr.includes("name")) {
        field.value = userData.name;
      }
  
      if (placeholder.includes("email") || nameAttr.includes("email")) {
        field.value = userData.email;
      }
  
      if (placeholder.includes("phone") || placeholder.includes("mobile")) {
        field.value = userData.phone;
      }
  
      if (
        placeholder.includes("skill") ||
        placeholder.includes("experience") ||
        nameAttr.includes("skill")
      ) {
        field.value = userData.skills;
      }
    });
  }
  