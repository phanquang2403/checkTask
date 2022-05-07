const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");

const locationSection1 = section1.offsetTop;
const locationSection2 = section2.offsetTop;

const checkChildrenSectionAll = (selectNumber) => {
  for (const key in selectNumber) {
    if (selectNumber.hasOwnProperty(key)) {
      let elementClick = selectNumber[key];
      elementClick.classList.remove("no-active");
      elementClick.classList.add("active");
    }
  }
};

const checkSection = () => {
  const selectNumber = section1.children;
  for (const key in selectNumber) {
    if (selectNumber.hasOwnProperty(key)) {
      let elementClick = selectNumber[key];
      elementClick.addEventListener("click", () => {
        checkChildrenSectionAll(selectNumber);
        elementClick.classList.add("no-active");
      });
    }
  }
};
checkSection();
