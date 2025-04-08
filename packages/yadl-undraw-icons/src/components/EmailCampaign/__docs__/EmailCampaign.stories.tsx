import type { Meta, StoryObj } from "@storybook/react";
import EmailCampaign from "../EmailCampaign";

const meta: Meta<typeof EmailCampaign> = { title: "unDraw/EmailCampaign", component: EmailCampaign };

export default meta;
type Story = StoryObj<typeof EmailCampaign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
