const radioContainers = document.querySelectorAll(
    ".custom-control.custom-radio"
  );
  radioContainers.forEach((radioContainer) => {
    const radio = radioContainer.querySelector("input[type='radio']");

    const label = radioContainer.querySelector(
      "label.custom-control-label"
    );

    if (label.innerHTML == "Baik Sekali") {
      radio.checked = true;
    }
  });