import type { Meta, StoryObj } from "@storybook/react";
import BuildingWebsites from "../BuildingWebsites";

const meta: Meta<typeof BuildingWebsites> = { title: "unDraw/BuildingWebsites", component: BuildingWebsites };

export default meta;
type Story = StoryObj<typeof BuildingWebsites>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
