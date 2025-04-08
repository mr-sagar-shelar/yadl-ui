import type { Meta, StoryObj } from "@storybook/react";
import FeaturesOverview from "../FeaturesOverview";

const meta: Meta<typeof FeaturesOverview> = { title: "unDraw/FeaturesOverview", component: FeaturesOverview };

export default meta;
type Story = StoryObj<typeof FeaturesOverview>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
