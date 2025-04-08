import type { Meta, StoryObj } from "@storybook/react";
import Omics from "../Omics";

const meta: Meta<typeof Omics> = { title: "AWS/MachineLearning/Omics", component: Omics };

export default meta;
type Story = StoryObj<typeof Omics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
