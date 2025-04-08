import type { Meta, StoryObj } from "@storybook/react";
import SharingKnowledge from "../SharingKnowledge";

const meta: Meta<typeof SharingKnowledge> = { title: "unDraw/SharingKnowledge", component: SharingKnowledge };

export default meta;
type Story = StoryObj<typeof SharingKnowledge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
