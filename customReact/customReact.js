const customRender = (customElement, Container) => {
  const element = document.createElement(customElement.type);
  element.setAttribute("href", customElement.props.href);
  element.setAttribute("style", customElement.props.style);
  element.setAttribute("target", customElement.props.target);
  element.innerHTML = customElement.children;

  Container.appendChild(element);
};
const customElement = {
  type: "a",
  props: {
    href: "https://google.com",
    style: "color: red",
    target: "_blank",
  },
  children: "Click me to visit google!",
};
const mainContainer = document.querySelector("#root");

customRender(customElement, mainContainer);
