import type { Meta, StoryObj } from "@storybook/react";
import QAEngineersQAEngineers from "../QAEngineersQAEngineers";

const meta: Meta<typeof QAEngineersQAEngineers> = { title: "unDraw/QAEngineersQAEngineers", component: QAEngineersQAEngineers };

export default meta;
type Story = StoryObj<typeof QAEngineersQAEngineers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
