import type { Meta, StoryObj } from "@storybook/react";
import CognitiveServices from "../CognitiveServices";

const meta: Meta<typeof CognitiveServices> = { title: "Azure/Web/CognitiveServices", component: CognitiveServices };

export default meta;
type Story = StoryObj<typeof CognitiveServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
