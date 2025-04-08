import type { Meta, StoryObj } from "@storybook/react";
import MessagingApp from "../MessagingApp";

const meta: Meta<typeof MessagingApp> = { title: "unDraw/MessagingApp", component: MessagingApp };

export default meta;
type Story = StoryObj<typeof MessagingApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
