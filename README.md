# React Multi Select App

This app was created in order to fulfill requirements of the assignment as part of job application process.

GitHub repo: https://github.com/ekatamel/faceup.

The basic functionality of this app is MultiSelect component, which renders different options and allows user to easily choose multiple options from the list and manipulate with them (e.g. delete).

**Upgrade**: on branch feat/add-own-options (https://github.com/ekatamel/faceup/tree/feat/add-own-options) you can find upgraded version of MultiSelect component, which accepts user input as an option and adds it on Enter press. This user option cannot be the same as any option already provided in data. When user option is deleted, it won't become part of the original data.

## Tech stack

For the project I used following technologies:

- React
- TypeScript (type definition and type checking)
- TailwindCSS (styling)
- Clsx (for easier conditional styling)

## Local development environment

In order to set up local development environment, follow these steps:

### Prerequisites

- Node 14 or higher

1. Clone the project repository from GitHub:

```shell script
git clone https://github.com/ekatamel/faceup.git
```

2. Navigate to the project directory:

```shell script
cd your-project
```

3. Run frontend

```shell script
npm start
```

## MultiSelect component logic

The MultiSelect component is a reusable React component that provides a dropdown menu for selecting multiple items from a list of options.

### Accepted properties:

- `data`: An array of objects that represent the available options. Each object should have a value property (a unique identifier for the option) and a label property (the text to display for the option).
- `label`: A string that represents the label for the MultiSelect component.
- `placeholder`: A string that represents the placeholder text to display when no items are selected.

### Usage:

To use the MultiSelect component in your React application, import the component and render it with the necessary props:

```
import { MultiSelect } from './components/MultiSelect';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

function MyComponent() {
  return (
    <MultiSelect
      data={options}
      label="Select options"
      placeholder="Select options"
    />
  );
}
```

The MultiSelect component will render a dropdown menu with the available options. When the user clicks on an option, it will be added to the selected items list. Clicking on a selected item close icon will remove this item from the selected items list and add it back to the available options list. The selected items list will be displayed as a list of tags above the dropdown menu.

To show all available options, user can click on the "input". Clicking outside of options will close the menu.
