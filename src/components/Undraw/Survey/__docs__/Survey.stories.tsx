import type { Meta, StoryObj } from "@storybook/react";
import Survey from "../Survey";

const meta: Meta<typeof Survey> = { title: "unDraw/Survey", component: Survey };

export default meta;
type Story = StoryObj<typeof Survey>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
