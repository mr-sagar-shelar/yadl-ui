import type { Meta, StoryObj } from "@storybook/react";
import FormRecognizers from "../FormRecognizers";

const meta: Meta<typeof FormRecognizers> = { title: "Azure/AiMachineLearning/FormRecognizers", component: FormRecognizers };

export default meta;
type Story = StoryObj<typeof FormRecognizers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
