import type { Meta, StoryObj } from "@storybook/react";
import MyLocation from "../MyLocation";

const meta: Meta<typeof MyLocation> = { title: "unDraw/MyLocation", component: MyLocation };

export default meta;
type Story = StoryObj<typeof MyLocation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
