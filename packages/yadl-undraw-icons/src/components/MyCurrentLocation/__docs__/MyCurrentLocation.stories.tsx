import type { Meta, StoryObj } from "@storybook/react";
import MyCurrentLocation from "../MyCurrentLocation";

const meta: Meta<typeof MyCurrentLocation> = { title: "unDraw/MyCurrentLocation", component: MyCurrentLocation };

export default meta;
type Story = StoryObj<typeof MyCurrentLocation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
