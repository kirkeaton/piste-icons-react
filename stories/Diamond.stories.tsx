import React from "react";

import { Diamond } from "@piste-icons/react";

export default {
  title: "Ratings/Diamond",
  component: Diamond,
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

const Template = (args) => {
  console.log("args", args);
  return <Diamond {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  color: "black",
  size: 24,
};
