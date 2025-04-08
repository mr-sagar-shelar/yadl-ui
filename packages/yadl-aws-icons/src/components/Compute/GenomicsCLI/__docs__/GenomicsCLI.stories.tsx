import type { Meta, StoryObj } from "@storybook/react";
import GenomicsCLI from "../GenomicsCLI";

const meta: Meta<typeof GenomicsCLI> = { title: "AWS/Compute/GenomicsCLI", component: GenomicsCLI };

export default meta;
type Story = StoryObj<typeof GenomicsCLI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
