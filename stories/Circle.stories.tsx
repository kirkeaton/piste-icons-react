import React from "react";

import { Circle } from "@piste-icons/react";

export default {
  title: "Ratings/Circle",
  component: Circle,
  argTypes: {
    color: {
      control: "select",
      options: ["black", "blue", "green", "orange", "red"],
    },
    size: {
      control: "select",
      options: [18, 24, 36, 48],
    },
  },
};

const Template = (args) => <Circle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "green",
  size: 24,
};
