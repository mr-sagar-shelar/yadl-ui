import type { Meta, StoryObj } from "@storybook/react";
import Observations from "../Observations";

const meta: Meta<typeof Observations> = { title: "unDraw/Observations", component: Observations };

export default meta;
type Story = StoryObj<typeof Observations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
