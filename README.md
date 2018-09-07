# generator-qualia-meteor
Generate Qualia-style Blaze templates

## Install

```
npm install -g yo @qualialabs/generator-qualia-meteor
```

## Usage

### Create a template

```
cd dir/in/which/to/create/templates
yo @qualialabs/qualia-meteor:template
```

Enter the name of your template to generate it:

```
? New template name myTemplateName
   create my_template_name.html
   create my_template_name.js
   create my_template_name.css
```

### Create a Meteor package

```
cd dir/in/which/to/create/package-files
yo @qualialabs/qualia-meteor:package
```

Answer the prompts to generate your package files:

```
? Full package name (e.g. qualia:lasr) qualia:test
? Brief summary This is a test
   create package.js
   create README.md
   create client/main.js
   create server/main.js
```
