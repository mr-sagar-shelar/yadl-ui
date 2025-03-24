import type { Meta, StoryObj } from "@storybook/react";
import ServerlessSearch from "../ServerlessSearch";

const meta: Meta<typeof ServerlessSearch> = { title: "Azure/AiMachineLearning/ServerlessSearch", component: ServerlessSearch };

export default meta;
type Story = StoryObj<typeof ServerlessSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
