import type { Meta, StoryObj } from "@storybook/react";
import Textract from "../Textract";

const meta: Meta<typeof Textract> = { title: "AWS/MachineLearning/Textract", component: Textract };

export default meta;
type Story = StoryObj<typeof Textract>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
