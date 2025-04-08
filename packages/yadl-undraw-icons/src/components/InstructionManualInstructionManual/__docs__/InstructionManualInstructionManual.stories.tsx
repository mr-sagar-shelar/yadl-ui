import type { Meta, StoryObj } from "@storybook/react";
import InstructionManualInstructionManual from "../InstructionManualInstructionManual";

const meta: Meta<typeof InstructionManualInstructionManual> = { title: "unDraw/InstructionManualInstructionManual", component: InstructionManualInstructionManual };

export default meta;
type Story = StoryObj<typeof InstructionManualInstructionManual>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
