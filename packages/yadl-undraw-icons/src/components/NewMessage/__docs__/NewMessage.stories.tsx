import type { Meta, StoryObj } from "@storybook/react";
import NewMessage from "../NewMessage";

const meta: Meta<typeof NewMessage> = { title: "unDraw/NewMessage", component: NewMessage };

export default meta;
type Story = StoryObj<typeof NewMessage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
