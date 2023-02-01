import React from "react";

import { Square } from "@piste-icons/react";

export default {
  title: "Ratings/Square",
  component: Square,
  argTypes: {
    color: {
      control: "select",
      options: ["blue", "orange"],
    },
    size: {
      control: "select",
      options: [18, 24, 36, 48],
    },
  },
};

const Template = (args) => <Square {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  size: 24,
};
