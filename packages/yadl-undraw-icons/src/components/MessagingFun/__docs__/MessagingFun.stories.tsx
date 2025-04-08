import type { Meta, StoryObj } from "@storybook/react";
import MessagingFun from "../MessagingFun";

const meta: Meta<typeof MessagingFun> = { title: "unDraw/MessagingFun", component: MessagingFun };

export default meta;
type Story = StoryObj<typeof MessagingFun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
