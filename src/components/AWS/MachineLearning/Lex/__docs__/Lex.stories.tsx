import type { Meta, StoryObj } from "@storybook/react";
import Lex from "../Lex";

const meta: Meta<typeof Lex> = { title: "AWS/MachineLearning/Lex", component: Lex };

export default meta;
type Story = StoryObj<typeof Lex>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
