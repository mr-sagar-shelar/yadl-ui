import type { Meta, StoryObj } from "@storybook/react";
import Cooking from "../Cooking";

const meta: Meta<typeof Cooking> = { title: "unDraw/Cooking", component: Cooking };

export default meta;
type Story = StoryObj<typeof Cooking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
