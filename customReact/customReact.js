const customRender = (customElement, Container) => {
//   const element = document.createElement(customElement.type);
//   element.innerHTML = customElement.children;
//   element.setAttribute("href", customElement.props.href);
//   element.setAttribute("style", customElement.props.style);
//   element.setAttribute("target", customElement.props.target);
//   Container.appendChild(element);

    const element = document.createElement(customElement.type);
    element.innerHTML = customElement.children;
    for (let prop in customElement.props) {
        element.setAttribute(prop, customElement.props[prop]);
    }
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
