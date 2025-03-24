import type { Meta, StoryObj } from "@storybook/react";
import JobOffers from "../JobOffers";

const meta: Meta<typeof JobOffers> = { title: "unDraw/JobOffers", component: JobOffers };

export default meta;
type Story = StoryObj<typeof JobOffers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
