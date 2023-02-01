import React from "react";

import { TerrainPark } from "@piste-icons/react";

export default {
  title: "Ratings/TerrainPark",
  component: TerrainPark,
  argTypes: {
    color: {
      control: "select",
      options: ["orange"],
    },
    size: {
      control: "select",
      options: [18, 24, 36, 48],
    },
  },
};

const Template = (args) => <TerrainPark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "orange",
  size: 24,
};
