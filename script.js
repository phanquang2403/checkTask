const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

const checkChildrenSectionAll = (selectNumber) => {
  for (const key in selectNumber) {
    if (selectNumber.hasOwnProperty(key)) {
      let elementClick = selectNumber[key];
      elementClick.classList.remove("no-active");
      elementClick.classList.add("active");
    }
  }
};

const checkSection = (sectionStart, sectionEnd = null) => {
  const selectNumber = sectionStart.children;
  const locationEnd = sectionEnd
    ? window.pageYOffset + sectionEnd.getBoundingClientRect().top
    : "";
  for (const key in selectNumber) {
    if (selectNumber.hasOwnProperty(key)) {
      let elementClick = selectNumber[key];
      elementClick.addEventListener("click", () => {
        checkChildrenSectionAll(selectNumber);
        elementClick.classList.add("no-active");
        locationEnd != ""
          ? (document.documentElement.scrollTop = locationEnd)
          : null;
      });
    }
  }
};

checkSection(section1, section2);
checkSection(section2, section3);
checkSection(section3);
