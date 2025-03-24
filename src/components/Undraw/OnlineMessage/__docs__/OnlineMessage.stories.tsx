import type { Meta, StoryObj } from "@storybook/react";
import OnlineMessage from "../OnlineMessage";

const meta: Meta<typeof OnlineMessage> = { title: "unDraw/OnlineMessage", component: OnlineMessage };

export default meta;
type Story = StoryObj<typeof OnlineMessage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
