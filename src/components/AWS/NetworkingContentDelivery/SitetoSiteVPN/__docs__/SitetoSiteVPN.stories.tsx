import type { Meta, StoryObj } from "@storybook/react";
import SitetoSiteVPN from "../SitetoSiteVPN";

const meta: Meta<typeof SitetoSiteVPN> = { title: "AWS/NetworkingContentDelivery/SitetoSiteVPN", component: SitetoSiteVPN };

export default meta;
type Story = StoryObj<typeof SitetoSiteVPN>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
