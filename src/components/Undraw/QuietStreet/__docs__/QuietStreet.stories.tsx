import type { Meta, StoryObj } from "@storybook/react";
import QuietStreet from "../QuietStreet";

const meta: Meta<typeof QuietStreet> = { title: "unDraw/QuietStreet", component: QuietStreet };

export default meta;
type Story = StoryObj<typeof QuietStreet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
