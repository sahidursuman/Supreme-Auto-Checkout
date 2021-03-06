class FormBuilder {
  constructor(schema, targetNode, name) {
    const BrutusinForms = brutusin["json-forms"];
    BrutusinForms.addDecorator(
      function (element, schema) {
        if (element.tagName && schema && schema.name) {
          var tagName = element.tagName.toLowerCase();
          if (tagName === "input") {
            element.name = schema.name;
          }
        }
      }
    );

    this.form = BrutusinForms.create(schema);
    this.targetNode = targetNode;
    this.name = name;
    this.category = schema.category;
  }

  async getInitialData() {
    let options = await getOption(this.category, this.name);
    return options;
  }

  async render() {
    const store = await getAllOptions(this.category);
    if (store === undefined) {
      await createStore(this.category);
    }
    
    const initialData = await this.getInitialData();

    if (initialData !== undefined) {
      this.form.render(this.targetNode, initialData);
    } else {
      this.form.render(this.targetNode);
    }

    const btnContainer = document.createElement('div');
    btnContainer.style.textAlign = 'center';

    const formNode = this.targetNode.getElementsByTagName('form')[0];

    const btn = document.createElement('input');
    btn.type = 'submit';
    btn.className = 'btn btn-raised btn-danger save-btn';
    btn.innerText = 'Save';
    formNode.addEventListener('submit', async () => {
      await this.onSave();
    });

    btnContainer.appendChild(btn);
    formNode.appendChild(btnContainer);
  }

  async onSave() {
    const isValid = this.form.validate();
    if (isValid) {
      await setOptionValue(this.category, this.name, this.form.getData());
      success('Configuration saved !');
    }
  }
}