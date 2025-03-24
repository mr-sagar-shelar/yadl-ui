import type { Meta, StoryObj } from "@storybook/react";
import GenomicsAccounts from "../GenomicsAccounts";

const meta: Meta<typeof GenomicsAccounts> = { title: "Azure/AiMachineLearning/GenomicsAccounts", component: GenomicsAccounts };

export default meta;
type Story = StoryObj<typeof GenomicsAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
