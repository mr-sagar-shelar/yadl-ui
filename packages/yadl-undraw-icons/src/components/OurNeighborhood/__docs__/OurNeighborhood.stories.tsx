import type { Meta, StoryObj } from "@storybook/react";
import OurNeighborhood from "../OurNeighborhood";

const meta: Meta<typeof OurNeighborhood> = { title: "unDraw/OurNeighborhood", component: OurNeighborhood };

export default meta;
type Story = StoryObj<typeof OurNeighborhood>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
