import type { Meta, StoryObj } from "@storybook/react";
import FeaturePreviews from "../FeaturePreviews";

const meta: Meta<typeof FeaturePreviews> = { title: "Azure/General/FeaturePreviews", component: FeaturePreviews };

export default meta;
type Story = StoryObj<typeof FeaturePreviews>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
