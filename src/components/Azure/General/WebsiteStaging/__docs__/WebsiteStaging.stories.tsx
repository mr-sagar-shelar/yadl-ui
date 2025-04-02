import type { Meta, StoryObj } from "@storybook/react";
import WebsiteStaging from "../WebsiteStaging";

const meta: Meta<typeof WebsiteStaging> = { title: "Azure/General/WebsiteStaging", component: WebsiteStaging };

export default meta;
type Story = StoryObj<typeof WebsiteStaging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
