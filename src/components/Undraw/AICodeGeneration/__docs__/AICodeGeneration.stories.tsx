import type { Meta, StoryObj } from "@storybook/react";
import AICodeGeneration from "../AICodeGeneration";

const meta: Meta<typeof AICodeGeneration> = { title: "unDraw/AICodeGeneration", component: AICodeGeneration };

export default meta;
type Story = StoryObj<typeof AICodeGeneration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
