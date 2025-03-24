import type { Meta, StoryObj } from "@storybook/react";
import Texting from "../Texting";

const meta: Meta<typeof Texting> = { title: "unDraw/Texting", component: Texting };

export default meta;
type Story = StoryObj<typeof Texting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
