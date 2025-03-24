import type { Meta, StoryObj } from "@storybook/react";
import LanguageUnderstanding from "../LanguageUnderstanding";

const meta: Meta<typeof LanguageUnderstanding> = { title: "Azure/AiMachineLearning/LanguageUnderstanding", component: LanguageUnderstanding };

export default meta;
type Story = StoryObj<typeof LanguageUnderstanding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
