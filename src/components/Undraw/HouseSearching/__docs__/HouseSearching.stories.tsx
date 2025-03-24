import type { Meta, StoryObj } from "@storybook/react";
import HouseSearching from "../HouseSearching";

const meta: Meta<typeof HouseSearching> = { title: "unDraw/HouseSearching", component: HouseSearching };

export default meta;
type Story = StoryObj<typeof HouseSearching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
