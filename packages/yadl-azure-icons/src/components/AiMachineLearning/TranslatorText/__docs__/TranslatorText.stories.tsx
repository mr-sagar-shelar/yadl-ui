import type { Meta, StoryObj } from "@storybook/react";
import TranslatorText from "../TranslatorText";

const meta: Meta<typeof TranslatorText> = { title: "Azure/AiMachineLearning/TranslatorText", component: TranslatorText };

export default meta;
type Story = StoryObj<typeof TranslatorText>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
