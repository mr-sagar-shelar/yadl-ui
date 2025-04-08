import type { Meta, StoryObj } from "@storybook/react";
import ProgressIndicator from "../ProgressIndicator";

const meta: Meta<typeof ProgressIndicator> = { title: "unDraw/ProgressIndicator", component: ProgressIndicator };

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
