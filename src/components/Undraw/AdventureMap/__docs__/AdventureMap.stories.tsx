import type { Meta, StoryObj } from "@storybook/react";
import AdventureMap from "../AdventureMap";

const meta: Meta<typeof AdventureMap> = { title: "unDraw/AdventureMap", component: AdventureMap };

export default meta;
type Story = StoryObj<typeof AdventureMap>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
