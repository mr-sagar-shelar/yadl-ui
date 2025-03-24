import type { Meta, StoryObj } from "@storybook/react";
import AccessAccount from "../AccessAccount";

const meta: Meta<typeof AccessAccount> = { title: "unDraw/AccessAccount", component: AccessAccount };

export default meta;
type Story = StoryObj<typeof AccessAccount>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
