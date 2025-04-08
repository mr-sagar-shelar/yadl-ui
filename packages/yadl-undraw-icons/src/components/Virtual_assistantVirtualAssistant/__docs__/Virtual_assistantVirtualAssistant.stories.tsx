import type { Meta, StoryObj } from "@storybook/react";
import Virtual_assistantVirtualAssistant from "../Virtual_assistantVirtualAssistant";

const meta: Meta<typeof Virtual_assistantVirtualAssistant> = { title: "unDraw/Virtual_assistantVirtualAssistant", component: Virtual_assistantVirtualAssistant };

export default meta;
type Story = StoryObj<typeof Virtual_assistantVirtualAssistant>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
