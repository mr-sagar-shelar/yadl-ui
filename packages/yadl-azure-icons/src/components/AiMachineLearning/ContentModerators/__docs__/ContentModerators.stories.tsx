import type { Meta, StoryObj } from "@storybook/react";
import ContentModerators from "../ContentModerators";

const meta: Meta<typeof ContentModerators> = { title: "Azure/AiMachineLearning/ContentModerators", component: ContentModerators };

export default meta;
type Story = StoryObj<typeof ContentModerators>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
