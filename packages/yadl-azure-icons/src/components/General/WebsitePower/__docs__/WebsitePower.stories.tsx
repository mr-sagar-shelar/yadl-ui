import type { Meta, StoryObj } from "@storybook/react";
import WebsitePower from "../WebsitePower";

const meta: Meta<typeof WebsitePower> = { title: "Azure/General/WebsitePower", component: WebsitePower };

export default meta;
type Story = StoryObj<typeof WebsitePower>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
