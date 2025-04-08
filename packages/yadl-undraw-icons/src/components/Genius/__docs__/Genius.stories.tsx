import type { Meta, StoryObj } from "@storybook/react";
import Genius from "../Genius";

const meta: Meta<typeof Genius> = { title: "unDraw/Genius", component: Genius };

export default meta;
type Story = StoryObj<typeof Genius>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
