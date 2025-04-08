import type { Meta, StoryObj } from "@storybook/react";
import Bear_marketBearMarket from "../Bear_marketBearMarket";

const meta: Meta<typeof Bear_marketBearMarket> = { title: "unDraw/Bear_marketBearMarket", component: Bear_marketBearMarket };

export default meta;
type Story = StoryObj<typeof Bear_marketBearMarket>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
