import type { Meta, StoryObj } from "@storybook/react";
import DefenderProgramableBoard from "../DefenderProgramableBoard";

const meta: Meta<typeof DefenderProgramableBoard> = { title: "Azure/Other/DefenderProgramableBoard", component: DefenderProgramableBoard };

export default meta;
type Story = StoryObj<typeof DefenderProgramableBoard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
