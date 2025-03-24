import type { Meta, StoryObj } from "@storybook/react";
import Emails from "../Emails";

const meta: Meta<typeof Emails> = { title: "unDraw/Emails", component: Emails };

export default meta;
type Story = StoryObj<typeof Emails>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
