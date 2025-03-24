import type { Meta, StoryObj } from "@storybook/react";
import Snowman from "../Snowman";

const meta: Meta<typeof Snowman> = { title: "unDraw/Snowman", component: Snowman };

export default meta;
type Story = StoryObj<typeof Snowman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
