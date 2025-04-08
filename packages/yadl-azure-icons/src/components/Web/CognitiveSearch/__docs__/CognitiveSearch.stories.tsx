import type { Meta, StoryObj } from "@storybook/react";
import CognitiveSearch from "../CognitiveSearch";

const meta: Meta<typeof CognitiveSearch> = { title: "Azure/Web/CognitiveSearch", component: CognitiveSearch };

export default meta;
type Story = StoryObj<typeof CognitiveSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
