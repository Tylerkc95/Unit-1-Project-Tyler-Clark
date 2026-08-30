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
  {
    name: "Roomba",
    image: "20260830_121032",
    project: "Basement",
    progress: "To-do",
    tag: "Small appliances",
    action: "Sell",
    description: "Works fine; it just gets stuck on everything.",
  },
  {
    name: "EQ Pedal",
    image: "20260830_121112",
    project: "Basement",
    progress: "Done",
    tag: "Guitar Pedals",
    action: "Sell",
    description: "CastleRock equalizer pedal. In great condition.",
  },
  {
    name: "Compressor Pedal",
    image: "20260830_121202",
    project: "Basement",
    progress: "Done",
    tag: "Guitar Pedals",
    action: "Sell",
    description: "MXR Super Comp compression pedal. In great condition.",
  },
  {
    name: "Backpack",
    image: "20260830_121348",
    project: "Storage Room",
    progress: "To-do",
    tag: "Broken",
    action: "Recycle",
    description:
      "Backpack that's missing a magnet and doesn't stay closed anymore. I would rather recycle this somehow than throw it away.",
  },
  {
    name: "Cat Piano Toy",
    image: "20260830_121504",
    project: "Storage Room",
    progress: "Planned",
    tag: "Toys",
    action: "Gift",
    description: "Give this to my nephew for Christmas.",
  },
];
