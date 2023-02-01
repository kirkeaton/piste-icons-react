import React from "react";

import { DoubleDiamond } from "@piste-icons/react";

export default {
  title: "Ratings/DoubleDiamond",
  component: DoubleDiamond,
  argTypes: {
    color: {
      control: "select",
      options: ["black"],
    },
    size: {
      control: "select",
      options: [18, 24, 36, 48],
    },
  },
};

const Template = (args) => <DoubleDiamond {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "black",
  size: 24,
};
