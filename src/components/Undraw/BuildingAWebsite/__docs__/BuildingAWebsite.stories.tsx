import type { Meta, StoryObj } from "@storybook/react";
import BuildingAWebsite from "../BuildingAWebsite";

const meta: Meta<typeof BuildingAWebsite> = { title: "unDraw/BuildingAWebsite", component: BuildingAWebsite };

export default meta;
type Story = StoryObj<typeof BuildingAWebsite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
