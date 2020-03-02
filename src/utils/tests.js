import "./tests.css";

let results;
export const assert = (value, desc) => {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  results.appendChild(li);
  if (!value) {
    li.parentNode.parentNode.className = "fail";
  }
  return li;
};
export const test = (name, fn) => {
  results = document.getElementById("test-results");
  results = assert(true, name).appendChild(document.createElement("ul"));
  results.className = "asserts";
  fn();
};

export const throwError = (fn, ...rest) => {
  try {
    fn(...rest);
    return false;
  } catch (e) {
    return true;
  }
};
