import type { Meta, StoryObj } from "@storybook/react";
import DefenderHistorian from "../DefenderHistorian";

const meta: Meta<typeof DefenderHistorian> = { title: "Azure/Other/DefenderHistorian", component: DefenderHistorian };

export default meta;
type Story = StoryObj<typeof DefenderHistorian>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
