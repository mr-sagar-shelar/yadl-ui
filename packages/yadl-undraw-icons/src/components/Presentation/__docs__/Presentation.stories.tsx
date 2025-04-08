import type { Meta, StoryObj } from "@storybook/react";
import Presentation from "../Presentation";

const meta: Meta<typeof Presentation> = { title: "unDraw/Presentation", component: Presentation };

export default meta;
type Story = StoryObj<typeof Presentation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
