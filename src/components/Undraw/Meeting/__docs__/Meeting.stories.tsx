import type { Meta, StoryObj } from "@storybook/react";
import Meeting from "../Meeting";

const meta: Meta<typeof Meeting> = { title: "unDraw/Meeting", component: Meeting };

export default meta;
type Story = StoryObj<typeof Meeting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
