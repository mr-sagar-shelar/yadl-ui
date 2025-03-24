import type { Meta, StoryObj } from "@storybook/react";
import BotServices from "../BotServices";

const meta: Meta<typeof BotServices> = { title: "Azure/AiMachineLearning/BotServices", component: BotServices };

export default meta;
type Story = StoryObj<typeof BotServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
