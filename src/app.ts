// Code goes here!

class ProjectInput {
  //We are giving our properties types
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    //We use type casting (as HTMLElement) due to Typescript not being able to look into our HTML File, but we know in this case
    //That these elements will not be null, and we know the specific type of element

    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;

    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    //This returns a copy of a Node, with true, we return a copy of the node's descendants
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    //Returns the first child node as an HTML Element
    this.element = importedNode.firstElementChild as HTMLFormElement;

    //We run this method with every instance created
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
