import type { Meta, StoryObj } from "@storybook/react";
import QuantumEngine from "../QuantumEngine";

const meta: Meta<typeof QuantumEngine> = { title: "GCP/QuantumEngine", component: QuantumEngine };

export default meta;
type Story = StoryObj<typeof QuantumEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
