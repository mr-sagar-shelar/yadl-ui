import type { Meta, StoryObj } from "@storybook/react";
import WalkInTheCity from "../WalkInTheCity";

const meta: Meta<typeof WalkInTheCity> = { title: "unDraw/WalkInTheCity", component: WalkInTheCity };

export default meta;
type Story = StoryObj<typeof WalkInTheCity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
