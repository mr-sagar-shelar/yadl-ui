import type { Meta, StoryObj } from "@storybook/react";
import Camping from "../Camping";

const meta: Meta<typeof Camping> = { title: "unDraw/Camping", component: Camping };

export default meta;
type Story = StoryObj<typeof Camping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
