import type { Meta, StoryObj } from "@storybook/react";
import WebsiteBuilder from "../WebsiteBuilder";

const meta: Meta<typeof WebsiteBuilder> = { title: "unDraw/WebsiteBuilder", component: WebsiteBuilder };

export default meta;
type Story = StoryObj<typeof WebsiteBuilder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
