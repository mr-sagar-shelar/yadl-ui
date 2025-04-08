import type { Meta, StoryObj } from "@storybook/react";
import ContentSafety from "../ContentSafety";

const meta: Meta<typeof ContentSafety> = { title: "Azure/AiMachineLearning/ContentSafety", component: ContentSafety };

export default meta;
type Story = StoryObj<typeof ContentSafety>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
