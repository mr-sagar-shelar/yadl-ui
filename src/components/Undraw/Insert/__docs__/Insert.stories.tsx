import type { Meta, StoryObj } from "@storybook/react";
import Insert from "../Insert";

const meta: Meta<typeof Insert> = { title: "unDraw/Insert", component: Insert };

export default meta;
type Story = StoryObj<typeof Insert>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
