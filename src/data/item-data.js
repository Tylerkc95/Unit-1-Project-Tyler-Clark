export class Item {
  constructor(name, image, project, progress, tag, action, description) {
    this.name = name;
    this.image = image;
    this.project = project;
    this.progress = progress;
    this.tag = tag;
    this.action = action;
    this.description = description;
  }
}

export const items = [
  {
    name: "TV",
    image: "TV",
    project: "Storage Room",
    progress: "To-do",
    tag: "Electronics",
    action: "Sell",
    description: "My old college TV. About 32 inches.",
  },
  {
    name: "Barstools",
    image: "Barstools",
    project: "Storage Room",
    progress: "Doing",
    tag: "Furniture",
    action: "Donate",
    description: "Given to us.",
  },
  {
    name: "Desk Fan",
    image: "Desk Fan",
    project: "Storage Room",
    progress: "Done",
    tag: "Small appliances",
    action: "Recycle",
    description: "My old desk fan from college.",
  },
];
