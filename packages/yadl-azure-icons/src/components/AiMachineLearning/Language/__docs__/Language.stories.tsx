import type { Meta, StoryObj } from "@storybook/react";
import Language from "../Language";

const meta: Meta<typeof Language> = { title: "Azure/AiMachineLearning/Language", component: Language };

export default meta;
type Story = StoryObj<typeof Language>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
