import type { Meta, StoryObj } from "@storybook/react";
import Translate from "../Translate";

const meta: Meta<typeof Translate> = { title: "AWS/MachineLearning/Translate", component: Translate };

export default meta;
type Story = StoryObj<typeof Translate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
