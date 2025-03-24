import type { Meta, StoryObj } from "@storybook/react";
import PowerBIEmbedded from "../PowerBIEmbedded";

const meta: Meta<typeof PowerBIEmbedded> = { title: "Azure/Analytics/PowerBIEmbedded", component: PowerBIEmbedded };

export default meta;
type Story = StoryObj<typeof PowerBIEmbedded>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
