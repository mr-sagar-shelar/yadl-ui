import type { Meta, StoryObj } from "@storybook/react";
import MyWebsite from "../MyWebsite";

const meta: Meta<typeof MyWebsite> = { title: "unDraw/MyWebsite", component: MyWebsite };

export default meta;
type Story = StoryObj<typeof MyWebsite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
