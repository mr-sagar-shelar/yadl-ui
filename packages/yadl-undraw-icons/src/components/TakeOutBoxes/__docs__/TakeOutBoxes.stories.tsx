import type { Meta, StoryObj } from "@storybook/react";
import TakeOutBoxes from "../TakeOutBoxes";

const meta: Meta<typeof TakeOutBoxes> = { title: "unDraw/TakeOutBoxes", component: TakeOutBoxes };

export default meta;
type Story = StoryObj<typeof TakeOutBoxes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
