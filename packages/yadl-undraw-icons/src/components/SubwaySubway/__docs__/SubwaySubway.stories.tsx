import type { Meta, StoryObj } from "@storybook/react";
import SubwaySubway from "../SubwaySubway";

const meta: Meta<typeof SubwaySubway> = { title: "unDraw/SubwaySubway", component: SubwaySubway };

export default meta;
type Story = StoryObj<typeof SubwaySubway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
