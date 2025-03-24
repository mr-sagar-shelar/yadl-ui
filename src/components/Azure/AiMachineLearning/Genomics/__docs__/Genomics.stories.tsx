import type { Meta, StoryObj } from "@storybook/react";
import Genomics from "../Genomics";

const meta: Meta<typeof Genomics> = { title: "Azure/AiMachineLearning/Genomics", component: Genomics };

export default meta;
type Story = StoryObj<typeof Genomics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
