export class AttributeNode {
  constructor(node, index, boundAttrs, boundEvents, context) {
    this.node = node;
    this.index = index;
    this.boundAttrs = boundAttrs;
    this.boundEvents = boundEvents;
    this.context = context;

    this.addListeners();
  }

  addListeners() {
    this.boundEvents.forEach((eventHandler, eventName) => {
      this.node.addEventListener(eventName, function(event) {
        eval(eventHandler);
      }.bind(this.context));
    });
  }

  cleanUp() {
    this.boundAttrs.forEach(attr =>
      attr.value = attr.value.replace('---!{', '').replace('}!---', ''));
  }

  update(newNode) {
    this.boundAttrs.forEach(attr => {
      const newAttr = newNode.boundAttrs.get(attr.name);
      attr.value !== newAttr.value ? attr.value = newAttr.value : null;
    });
  }
}