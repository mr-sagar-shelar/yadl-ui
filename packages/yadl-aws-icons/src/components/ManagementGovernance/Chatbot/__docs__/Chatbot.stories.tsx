import type { Meta, StoryObj } from "@storybook/react";
import Chatbot from "../Chatbot";

const meta: Meta<typeof Chatbot> = { title: "AWS/ManagementGovernance/Chatbot", component: Chatbot };

export default meta;
type Story = StoryObj<typeof Chatbot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
